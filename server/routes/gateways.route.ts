import zpayment from '../facades/zpayment.ts'
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
    
    const gateways = await zpayment.gateways.list()

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
    
    const gateway = zpayment.gateways.find(params.id)
    
    return gateway
})

// POST create gateway
router.post('/', async ({ body, acl }) => {
    acl.authorize('create', 'gateways')
    
    const payload = validator.validate(body, schemas.gateway.create)
    
    const gateway = await zpayment.gateways.create({
        id: payload.id,
        name: payload.name,
        gateway: payload.gateway,
        config: payload.config || {}
    })
    
    return gateway
})

// PUT update gateway
router.put('/:id', async ({ params, body, acl }) => {
    acl.authorize('update', 'gateways')
    
    const payload = validator.validate(body, schemas.gateway.update)
    
    const gateway = await zpayment.gateways.update(params.id, {
        name: payload.name,
        config: payload.config,
    })

    return gateway
})

// DELETE gateway
router.delete('/:id', async ({ params, acl }) => {
    acl.authorize('delete', 'gateways')

    await zpayment.gateways.delete(params.id)

    return {
        success: true
    }
})
