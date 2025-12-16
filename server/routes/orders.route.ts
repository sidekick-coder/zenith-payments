import Order from '../entities/order.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'

const router = rootRouter.prefix('/api/zpayments/orders')
    .use(authMiddleware)
    .group()

router.get('/', async ({ query }) => {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Order.paginate({
        page,
        limit,
        query: qb => qb.selectAll().orderBy('created_at', 'desc'),
    })

    return pagination
})

router.get('/:id', async ({ params }) => {
    const order = await Order.find(params.id)
    
    if (!order) {
        throw new Error('Order not found')
    }
    
    return order
})
