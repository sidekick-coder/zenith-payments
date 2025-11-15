import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Billing from '#zpayments/server/entities/billing.entity.ts'

const router = rootRouter.prefix('/api/zpayments/billings')
    .use(authMiddleware)
    .group()

// GET all billings
router.get('/', async ({ acl, query }) => {
    acl.authorize('read', 'Billing')

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Billing.paginate({
        query: qb => qb.orderBy('created_at', 'desc'),
        page,
        limit
    })

    return pagination
})

// GET billing by id
router.get('/:id', async ({ params, acl }) => {
    
    const billing = await Billing.find(params.id)
    
    acl.authorize('read', billing)
    
    if (!billing) {
        throw new Error('Billing not found')
    }
    
    return billing
})

// POST create billing
router.post('/', async ({ body, acl }) => {
    
    const payload = validator.validate(body, schemas.billing.create)

    acl.authorize('create', 'Billing', payload)
    
    const billing = await Billing.create(payload)
    
    return billing
})

// PUT update billing
router.put('/:id', async ({ params, body, acl }) => {    
    const payload = validator.validate(body, schemas.billing.update)
    
    const billing = await Billing.find(params.id)

    acl.authorize('update', billing)
    
    if (!billing) {
        throw new Error('Billing not found')
    }
    
    const updatedBilling = await Billing.updateById(params.id, payload)
    
    return updatedBilling
})

// DELETE billing
router.delete('/:id', async ({ params, acl }) => {    
    const billing = await Billing.find(params.id)

    acl.authorize('delete', billing)
    
    if (!billing) {
        throw new Error('Billing not found')
    }
    
    await billing.softDelete()
    
    return billing
})