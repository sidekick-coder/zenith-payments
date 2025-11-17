import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Plan from '#zpayments/server/entities/plan.entity.ts'
import { undeleted } from '#server/queries/index.ts'

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