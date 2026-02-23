import Order from '../entities/order.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'
import schemas from '#zpayments/shared/validators/index.ts'

const router = rootRouter.prefix('/api/zpayments/orders')
    .use(authMiddleware)
    .group()

router.get('/', async ({ query }) => {
    const payload = validator.validate(query, schemas.order.index)

    const pagination = await Order.paginate({
        page: payload.page,
        limit: payload.limit,
        orderBy: payload.orderBy,
        orderDesc: payload.orderDesc,
        where: eb => Order.where(eb, payload),
    })

    if (payload.include) {
        await Order.load(pagination.items, payload.include)
    }

    return pagination
})

router.get('/:id', async ({ params }) => {
    const order = await Order.find(params.id)
    
    if (!order) {
        throw new Error('Order not found')
    }
    
    return order
})
