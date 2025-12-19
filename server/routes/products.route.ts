import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Product from '#zpayments/server/entities/product.entity.ts'
import { undeleted } from '#server/queries/index.ts'

const router = rootRouter.prefix('/api/zpayments/products')
    .use(authMiddleware)
    .group()

router.get('/', async ({ query }) => {
    const payload = validator.validate(query, schemas.product.index)

    const pagination = await Product.paginate({
        page: payload.page,
        limit: payload.limit,
        orderBy: payload.orderBy,
        orderDesc: payload.orderDesc,
        query: qb => Product.query(qb, payload),
    })

    if (payload.include) {
        await Product.load(pagination.items, payload.include)
    }

    return pagination
})

router.get('/:id', async ({ params }) => {    
    const product = await Product.find(params.id)
    
    if (!product) {
        throw new Error('Product not found')
    }
    
    return product
})

router.post('/', async ({ body, acl }) => {
    
    const payload = validator.validate(body, schemas.product.create)

    acl.authorize('create', 'Product', payload)
    
    const product = await Product.create({
        name: payload.name,
        description: payload.description || null,
    })
    
    return product
})

router.put('/:id', async ({ params, body, acl }) => {
    const product = await Product.findOrFail(params.id)
    
    acl.authorize('update', product)

    const payload = validator.validate(body, schemas.product.update)
    
    await Product.updateById(product.id, {
        name: payload.name ?? product.name,
        description: payload.description ?? product.description,
    })

    product.merge(payload)
    
    return product
})

router.delete('/:id', async ({ params, acl }) => {    
    const product = await Product.find(params.id)

    acl.authorize('delete', product)
    
    if (!product) {
        throw new Error('Product not found')
    }
    
    await product.softDelete()
    
    return product
})