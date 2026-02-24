import Payment from '../entities/payment.entity.ts'
import zpayment from '../facades/zpayment.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import { undeleted } from '#server/queries/index.ts'
import validator from '#shared/services/validator.service.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import env from '#server/facades/env.facade.ts'
import db from '#server/facades/db.facade.ts'

const router = rootRouter.prefix('/api/zpayments/payments')
    .use(authMiddleware)
    .group()

const unrestricted = rootRouter.prefix('/api/zpayments/payments').group()

router.get('/', async ({ query: routeQuery, acl }) => {
    acl.authorize('read-all', 'Payment')

    const payload = validator.validate(routeQuery, schemas.payment.index)

    let query = Payment.select().selectAll()

    if (payload.status) {
        query = query.where('status', '=', payload.status)
    }

    if (payload.start_date) {
        query = query.where('created_at', '>=', payload.start_date as any)
    }

    if (payload.end_date) {
        query = query.where('created_at', '<=', payload.end_date as any)
    }

    const pagination = await Payment.paginate({
        page: payload.page,
        limit: payload.limit,
        orderBy: payload.orderBy || ['created_at'],
        orderDesc: payload.orderDesc || ['desc'],
        query: () => query,
    })

    return pagination
})

router.get('/:id', async ({ params, acl }) => {
    
    const payment = await Payment.find(params.id)
    
    acl.authorize('read', payment)
    
    if (!payment) {
        throw new Error('Payment not found')
    }
    
    return payment
})

unrestricted.get('/:id/process', async ({ params, response }) => {
    const paymentId = validator.validate(params.id, schemas.url.number())

    const result = await zpayment.process(paymentId)

    const url = new URL('/zpayments/result', env.get('APP_URL'))
    
    url.searchParams.set('payment_id', String(result.payment.id))
    url.searchParams.set('order_id', String(result.order.id))

    if (result.payment.status === 'pending') {
        url.searchParams.set('result', 'pending')
    }

    if (result.payment.status === 'failed') {
        url.searchParams.set('result', 'failed')
    }

    if (result.payment.status === 'approved') {
        url.searchParams.set('result', 'approved')
    }

    response.redirect(url.toString())
})