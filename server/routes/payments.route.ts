import Payment from '../entities/payment.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import { undeleted } from '#server/queries/index.ts'

const router = rootRouter.prefix('/api/zpayments/payments')
    .use(authMiddleware)
    .group()

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
