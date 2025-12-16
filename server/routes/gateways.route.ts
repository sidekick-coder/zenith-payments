import payment from '../facades/zpayment.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import config from '#server/facades/config.facade.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Pagination from '#shared/entities/pagination.entity.ts'

const router = rootRouter.prefix('/api/zpayments/gateways')
    .use(authMiddleware)
    .group()

// GET all gateways
router.get('/', async ({ acl }) => {
    acl.authorize('read', 'gateways')
    
    const gateways = await payment.gateways.list()

    return new Pagination({
        page: 1,
        total: gateways.length,
        total_pages: 1,
        per_page: gateways.length,
        items: gateways,
    })
})

// GET gateway by id
router.get('/:id', async ({ params, acl }) => {
    acl.authorize('read', 'gateways')
    
    const gateways = config.get('zpayments.gateways', {})
    const gateway = gateways[params.id]
    
    if (!gateway) {
        throw new Error('Gateway not found')
    }
    
    return gateway
})

// POST create gateway
router.post('/', async ({ body, acl }) => {
    acl.authorize('create', 'gateways')
    
    const payload = validator.validate(body, schemas.gateway.create)
    
    const gateways = config.get('zpayments.gateways', {})

    if (gateways[payload.id]) {
        throw new Error('Gateway with this ID already exists')
    }
    
    const newGateway = {
        ...payload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    
    gateways[payload.id] = newGateway

    config.set('zpayments.gateways', gateways)
    
    return payload
})

// PUT update gateway
router.put('/:id', async ({ params, body, acl }) => {
    acl.authorize('update', 'gateways')
    
    const payload = validator.validate(body, schemas.gateway.update)
    
    const gateways = config.get('zpayments.gateways', {})
    
    if (!gateways[params.id]) {
        throw new Error('Gateway not found')
    }
    
    gateways[params.id] = {
        ...gateways[params.id],
        ...payload,
        updatedAt: new Date().toISOString()
    }
    
    config.set(`zpayments.gateways.${params.id}`, gateways[params.id])
    
    return {
        id: params.id,
        ...gateways[params.id]
    }
})

// DELETE gateway
router.delete('/:id', async ({ params, acl }) => {
    acl.authorize('delete', 'gateways')
    
    const gateways = config.get('zpayments.gateways', {})
    
    if (!gateways[params.id]) {
        throw new Error('Gateway not found')
    }
    
    const deletedGateway = {
        id: params.id,
        ...gateways[params.id]
    }
    delete gateways[params.id]
    config.set('zpayments.gateways', gateways)
    
    return deletedGateway
})

router.post('/:id/subscriptions/sync', async ({ params, acl }) => {
    const gateway = await payment.gateways.find(params.id)

    acl.authorize('update', 'Gateway', gateway)

    if (!gateway.subscriptions) {
        throw new Error('Subscriptions not supported for this gateway')
    }

    await gateway.subscriptions.sync()

    return { success: true }
})