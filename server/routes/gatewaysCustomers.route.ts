import payment from '../facades/zpayment.ts'
import rootRouter from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'

const router = rootRouter.prefix('/api/zpayments/gateways/:gateway_id/customers')
    .use(authMiddleware)
    .group()

router.post('/sync', async ({ params, acl }) => {
    const gateway = await payment.gateways.find(params.gateway_id)

    acl.authorize('update', 'Gateway', gateway)

    if (!gateway.customers) {
        throw new Error('Customers not supported for this gateway')
    }

    await gateway.customers.sync()
    
    return { success: true }
})