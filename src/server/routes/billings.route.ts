import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Billing from '#zpayments/server/entities/billing.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import payment from '#zpayments/server/facades/zpayment.ts'

const router = rootRouter.prefix('/api/zpayments/billings')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl, query }) => {
    acl.authorize('read', 'Billing')

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Billing.paginate({
        page,
        limit,
        query: qb => qb.selectAll()
            .where(undeleted)
            .orderBy('created_at', 'desc'),
    })

    if (pagination.items.length) {
        const users = await User.list({
            query: qb => qb.selectAll().where('id', 'in', pagination.items.map(b => b.user_id))
        })

        pagination.items.forEach(billing => {
            billing.user = users.find(u => u.id === billing.user_id)
        })
    }

    return pagination
})

router.get('/:id', async ({ params, acl }) => {
    
    const billing = await Billing.find(params.id)
    
    acl.authorize('read', billing)
    
    if (!billing) {
        throw new Error('Billing not found')
    }
    
    return billing
})


router.post('/', async ({ body, acl }) => {
    
    const payload = validator.validate(body, schemas.billing.create)

    acl.authorize('create', 'Billing', payload)
    
    const billing = await Billing.create({
        user_id: payload.user_id,
        amount: payload.amount,
        purpose: payload.purpose,
        status: 'pending',
    })
    
    return billing
})


router.post('/:id/approve', async ({ params, acl }) => {
    const billing = await Billing.findOrFail(params.id)
    
    acl.authorize('update', billing)

    await payment.billing.approve(billing)
})

router.post('/:id/fail', async ({ params, acl }) => {
    const billing = await Billing.findOrFail(params.id)
    
    acl.authorize('update', billing)

    await payment.billing.fail(billing)
})

router.post('/:id/reopen', async ({ params, acl }) => {
    const billing = await Billing.findOrFail(params.id)
    
    acl.authorize('update', billing)

    await payment.billing.reopen(billing)
})

router.post('/:id/refund', async ({ params, acl }) => {
    const billing = await Billing.findOrFail(params.id)
    
    acl.authorize('update', billing)

    await payment.billing.refund(billing)
})

router.delete('/:id', async ({ params, acl }) => {    
    const billing = await Billing.find(params.id)

    acl.authorize('delete', billing)
    
    if (!billing) {
        throw new Error('Billing not found')
    }
    
    await billing.softDelete()
    
    return billing
})
