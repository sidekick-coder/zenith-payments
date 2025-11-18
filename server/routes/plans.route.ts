import payment from '../facades/payment.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Plan from '#zpayments/server/entities/plan.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import GatewayEntity from '#zpayments/server/entities/gatewayEntity.entity.ts'

const router = rootRouter.prefix('/api/zpayments/plans')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl, query }) => {
    acl.authorize('read', 'Plan')

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Plan.paginate({
        page,
        limit,
        query: qb => qb.selectAll()
            .where(undeleted)
            .orderBy('created_at', 'desc'),
    })

    return pagination
})

router.get('/:id', async ({ params, acl }) => {
    
    const plan = await Plan.find(params.id)
    
    acl.authorize('read', plan)
    
    if (!plan) {
        throw new Error('Plan not found')
    }
    
    return plan
})

router.post('/', async ({ body, acl }) => {
    
    const payload = validator.validate(body, schemas.plan.create)

    acl.authorize('create', 'Plan', payload)
    
    const plan = await Plan.create({
        name: payload.name,
        description: payload.description || null,
        amount: payload.amount,
        status: payload.status || 'active',
    })
    
    return plan
})

router.put('/:id', async ({ params, body, acl }) => {
    const plan = await Plan.findOrFail(params.id)
    
    acl.authorize('update', plan)

    const payload = validator.validate(body, schemas.plan.update)
    
    await Plan.updateById(plan.id, {
        name: payload.name ?? plan.name,
        description: payload.description ?? plan.description,
        amount: payload.amount ?? plan.amount,
        status: payload.status ?? plan.status,
    })

    plan.merge(payload)
    
    return plan
})

router.delete('/:id', async ({ params, acl }) => {    
    const plan = await Plan.find(params.id)

    acl.authorize('delete', plan)
    
    if (!plan) {
        throw new Error('Plan not found')
    }
    
    await plan.softDelete()
    
    return plan
})

router.post('/:id/links', async ({ params, body, acl }) => {
    const plan = await Plan.findOrFail(params.id)

    acl.authorize('update', plan)

    const payload = validator.validate(body, v => v.object({
        gateway: v.string(),
    }))

    const gateway = await payment.gateways.find(payload.gateway)

    if (!gateway.plans) {
        throw new Error('Gateway does not support plans')
    }

    await gateway.plans.link(plan)

    return { success: true }


})

router.get('/:id/links', async ({ params, acl }) => {
    const plan = await Plan.findOrFail(params.id)

    acl.authorize('read', plan)

    const assigned = await GatewayEntityAssignment.list({
        query: qb => qb
            .selectAll()
            .where('assignable_type', '=', 'Plan')
            .where('assignable_id', '=', params.id)
            .where(undeleted)
    })

    if (!assigned.length) {
        return { items: [] }
    }

    const links = await GatewayEntity.list({
        query: qb => qb
            .selectAll()
            .where('id', 'in', assigned.map(a => a.gateway_entity_id))
            .where(undeleted)
    })

    return { items: links }
})