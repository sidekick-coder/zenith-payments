import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import config from '#server/facades/config.facade.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

const router = rootRouter.prefix('/api/zpayments/gateways')
    .use(authMiddleware)
    .group()

// GET all gateways
router.get('/', async ({ acl }) => {
    acl.authorize('read', 'gateways')

    const gatewaysConfig = config.get('zpayments.gateways', {})
    
    const gateways = [] as GatewayConfig[]

    for (const [id, gateway] of Object.entries<any>(gatewaysConfig)) {
        gateways.push(GatewayConfig.from({
            id,
            ...gateway
        }))
    }

    return {
        items: gateways,
    }
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

    console.log('Updated Gateway:', gateways[params.id])
    
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

export default router