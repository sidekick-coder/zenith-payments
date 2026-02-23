import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Product from '#zpayments/server/entities/product.entity.ts'
import ProductMeta from '#zpayments/server/entities/productMeta.entity.ts'
import { undeleted } from '#server/queries/index.ts'

const router = rootRouter.prefix('/api/zpayments/products/:productId/metas')
    .use(authMiddleware)
    .group()

router.get('/', async ({ params, query }) => {
    const product = await Product.findOrFail(params.productId)
    
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await ProductMeta.paginate({
        page,
        limit,
        query: qb => qb.selectAll()
            .where('product_id', '=', product.id)
            .where(undeleted)
            .orderBy('created_at', 'desc'),
    })

    return pagination
})

router.get('/:id', async ({ params }) => {
    const product = await Product.findOrFail(params.productId)
    
    const meta = await ProductMeta.findOne({
        where: eb => eb.and({
            id: Number(params.id),
            product_id: product.id
        })
    })
    
    if (!meta) {
        throw new Error('Product meta not found')
    }
    
    return meta
})

router.post('/', async ({ params, body, acl }) => {
    const product = await Product.findOrFail(params.productId)
    
    acl.authorize('update', product)

    const payload = validator.validate(body, schemas.productMeta.create)
    
    const meta = await ProductMeta.create({
        product_id: product.id,
        name: payload.name,
        value: payload.value || null,
    })
    
    return meta
})

router.put('/:id', async ({ params, body, acl }) => {
    const product = await Product.findOrFail(params.productId)
    
    acl.authorize('update', product)
    
    const meta = await ProductMeta.findOne({
        where: eb => eb.and({
            id: Number(params.id),
            product_id: product.id
        })
    })

    if (!meta) {
        throw new Error('Product meta not found')
    }

    const payload = validator.validate(body, schemas.productMeta.update)
    
    await ProductMeta.updateById(meta.id, {
        name: payload.name ?? meta.name,
        value: payload.value ?? meta.value,
    })

    meta.merge(payload)
    
    return meta
})

router.delete('/:id', async ({ params, acl }) => {
    const product = await Product.findOrFail(params.productId)
    
    acl.authorize('update', product)
    
    const meta = await ProductMeta.findOne({
        where: eb => eb.and({
            id: Number(params.id),
            product_id: product.id
        })
    })
    
    if (!meta) {
        throw new Error('Product meta not found')
    }
    
    await meta.softDelete()
    
    return meta
})
