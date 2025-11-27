import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Billing from '#zpayments/server/entities/billing.entity.ts'
import User from '#server/entities/user.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import db from '#server/facades/db.facade.ts'

const router = rootRouter.prefix('/api/zpayments/gateway-entities')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl, query: routeQuery }) => {
    acl.authorize('read', 'GatewayEntity')

    const payload = validator.validate(routeQuery, v => v.intersect([
        schemas.pagination.schema,
        v.object({
            gateway_id: v.optional(v.string()),
        })
    ]))

    let query = db.selectFrom('zpayments__gateway_entities as ge')
        .selectAll('ge')
        .where(undeleted)
        .orderBy('ge.created_at', 'desc')

    if (payload.gateway_id) {
        query = query.where('ge.gateway', '=', payload.gateway_id)
    }

    const pagination = await GatewayEntity.paginate({
        page: payload.page,
        limit: payload.limit,
        query: () => query
    })

    return pagination
})