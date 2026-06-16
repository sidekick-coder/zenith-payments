import Order from '../entities/order.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'
import schemas from '#zpayments/shared/validators/index.ts'

const router = rootRouter.prefix('/api/zpayments/users/:user_id/orders')
    .use(authMiddleware)
    .group()

router.get('/', async ({ query, params, acl }) => {
    const userId = validator.validate(params.user_id, schemas.url.number())
    const payload = validator.validate(query, schemas.order.userIndex)

    acl.authorize('read', 'Order', { user_id: userId })

    const where = {
        ...payload,
        user_id: [userId],
    }

    const pagination = await Order.paginate({
        page: payload.page,
        limit: payload.limit,
        orderBy: payload.orderBy,
        orderDesc: payload.orderDesc,
        where: eb => Order.where(eb, where),
    })

    if (payload.include) {
        await Order.load(pagination.items, payload.include)
    }

    return pagination
})