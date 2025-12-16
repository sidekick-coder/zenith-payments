import payment from '#zpayments/server/facades/zpayment.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Subscription from '#zpayments/server/entities/subscription.entity.ts'
import Plan from '#zpayments/server/entities/plan.entity.ts'
import User from '#server/entities/user.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import BaseException from '#server/exceptions/base.ts'

const router = rootRouter.prefix('/api/zpayments/subscriptions')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl, query }) => {
    acl.authorize('read', 'Subscription')

    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Subscription.paginate({
        page,
        limit,
        query: qb => qb.selectAll()
            .where(undeleted)
            .orderBy('created_at', 'desc'),
    })

    if (pagination.items.length) {
        const users = await User.list({
            query: qb => qb.selectAll().where('id', 'in', pagination.items.map(s => s.user_id))
        })

        const plans = await Plan.list({
            query: qb => qb.selectAll().where('id', 'in', pagination.items.map(s => s.plan_id))
        })

        pagination.items.forEach(subscription => {
            subscription.user = users.find(u => u.id === subscription.user_id)
            subscription.plan = plans.find(p => p.id === subscription.plan_id)
        })
    }

    return pagination
})

router.get('/:id', async ({ params, acl }) => {
    const subscription = await Subscription.find(params.id)
    
    acl.authorize('read', subscription)
    
    if (!subscription) {
        throw new Error('Subscription not found')
    }
    
    // Load related user and plan
    const [user, plan] = await Promise.all([
        User.find(subscription.user_id),
        Plan.find(subscription.plan_id)
    ])
    
    subscription.user = user || undefined
    subscription.plan = plan || undefined
    
    return subscription
})

router.post('/', async ({ body, acl }) => {
    const payload = validator.validate(body, schemas.subscription.create)

    acl.authorize('create', 'Subscription', payload)

    const exists = await Subscription.findOne({
        query: qb => qb
            .where('user_id', '=', payload.user_id)
            .where('plan_id', '=', payload.plan_id)
            .where('deleted_at', 'is', null)
    })

    if (exists) {
        throw new BaseException('Subscription already exists for this user and plan')
    }

    // Verify plan exists
    const plan = await Plan.findOrFail(payload.plan_id)
    
    const subscription = await Subscription.create({
        user_id: payload.user_id,
        plan_id: payload.plan_id,
        amount: payload.amount || plan.amount,
        status: 'inactive',
    })
    
    return subscription
})

router.post('/:id/activate', async ({ params, acl }) => {
    const subscription = await Subscription.findOrFail(params.id)
    
    acl.authorize('update', subscription)

    return payment.subscription.activate(subscription)
})

router.post('/:id/deactivate', async ({ params, acl }) => {
    const subscription = await Subscription.findOrFail(params.id)
    
    acl.authorize('update', subscription)

    return payment.subscription.deactivate(subscription)
})

router.post('/:id/cancel', async ({ params, acl }) => {
    const subscription = await Subscription.findOrFail(params.id)
    
    acl.authorize('update', subscription)

    await Subscription.updateById(subscription.id, {
        status: 'cancelled'
    })
    
    const updatedSubscription = await Subscription.findOrFail(subscription.id)
    
    return updatedSubscription
})

router.post('/:id/suspend', async ({ params, acl }) => {
    const subscription = await Subscription.findOrFail(params.id)
    
    acl.authorize('update', subscription)

    await Subscription.updateById(subscription.id, {
        status: 'suspended'
    })
    
    const updatedSubscription = await Subscription.findOrFail(subscription.id)
    
    return updatedSubscription
})

router.delete('/:id', async ({ params, acl }) => {
    const subscription = await Subscription.find(params.id)

    acl.authorize('delete', subscription)
    
    if (!subscription) {
        throw new Error('Subscription not found')
    }
    
    await subscription.softDelete()
    
    return subscription
})