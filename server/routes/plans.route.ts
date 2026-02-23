import payment from '../facades/zpayment.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import Subscription from '../entities/subscription.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Plan from '#zpayments/server/entities/plan.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import GatewayEntity from '#zpayments/server/entities/gatewayEntity.entity.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import BaseException from '#server/exceptions/base.ts'
import logger from '#server/facades/logger.facade.ts'

const router = rootRouter.prefix('/api/zpayments/plans')
    .use(authMiddleware)
    .group()

router.get('/', async ({ query }) => {
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

router.get('/:id', async ({ params }) => {    
    const plan = await Plan.find(params.id)
    
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

    const pagination = await GatewayEntity.paginate({
        query: qb => qb
            .selectAll()
            .where('id', 'in', assigned.map(a => a.entity_id))
            .where(undeleted)
    })

    return pagination
})

router.post('/:id/links', async ({ params, body, acl }) => {
    const plan = await Plan.findOrFail(params.id)

    acl.authorize('update', plan)

    const payload = validator.validate(body, v => v.object({
        gateway: v.string(),
        external_id: v.string(),
    }))

    const gateway = await payment.gateways.find(payload.gateway)

    if (!gateway.plans) {
        throw new Error('Gateway does not support plans')
    }

    const [error, entity] = await tryCatch(() => gateway.plans!.find(payload.external_id))

    if (error) {
        throw new BaseException('Failed to find plan in gateway', 400)
    }

    const assigned = await GatewayEntityAssignment.firstOrCreate({
        select: qb => qb.selectAll()
            .where('entity_id', '=', entity.id)
            .where('assignable_type', '=', 'Plan')
            .where('assignable_id', '=', plan.id.toString()),
        values: {
            entity_id: entity.id,
            assignable_type: 'Plan',
            assignable_id: plan.id.toString(),
        }
    })

    return {
        assigned,
        entity 
    }
})

router.get('/:id/subscribe', async ({ params, response }) => {
    const plan = await Plan.findOrFail(params.id)

    const gateway = await payment.gateways.find('mercadopago')

    if (!gateway.plans) {
        response.redirect('/error?message=Gateway%20does%20not%20support%20plans')
        return
    }

    const subscribeUrl = await gateway.plans.createSubscribeURL(plan)

    response.redirect(subscribeUrl)
})