import Payment from '../entities/payment.entity.ts'
import zpayment from '../facades/zpayment.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import { undeleted } from '#server/queries/index.ts'
import validator from '#shared/services/validator.service.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import env from '#server/facades/env.facade.ts'

const router = rootRouter.prefix('/api/zpayments/payments')
    .use(authMiddleware)
    .group()

const unrestricted = rootRouter.prefix('/api/zpayments/payments').group()

router.get('/', async ({ query }) => {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Payment.paginate({
        page,
        limit,
        query: qb => qb.selectAll().orderBy('created_at', 'desc'),
    })

    return pagination
})

router.get('/:id', async ({ params }) => {
    const payment = await Payment.find(params.id)
    
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