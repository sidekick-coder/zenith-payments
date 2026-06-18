// import rootRouter from '#server/facades/router.facade.ts'
// import validator from '#shared/services/validator.service.ts'
// import authMiddleware from '#server/middlewares/auth.middleware.ts'
// import schemas from '#zpayments/shared/validators/index.ts'
// import ProductPrice from '#zpayments/server/entities/productPrice.entity.ts'
// import { undeleted } from '#server/queries/index.ts'
//
// const router = rootRouter.prefix('/api/zpayments/products/:productId/prices')
//     .use(authMiddleware)
//     .group()
//
// router.get('/', async ({ query, params, acl }) => {
//     const productId = validator.validate(params.productId, schemas.url.number())
//     const page = Number(query.page) || 1
//     const limit = Number(query.limit) || 10
//
//     acl.authorize('read', 'ProductPrice', {
//         product_id: productId,
//     })
//
//     const pagination = await ProductPrice.paginate({
//         page,
//         limit,
//         query: qb => qb.selectAll()
//             .where(undeleted)
//             .where('product_id', '=', productId)
//             .orderBy('created_at', 'desc'),
//     })
//
//     return pagination
// })
//
// router.get('/:id', async ({ params, acl }) => {
//     const productPrice = await ProductPrice.find(params.id)
//
//     if (!productPrice) {
//         throw new Error('Product price not found')
//     }
//
//     acl.authorize('view', productPrice)
//
//     return productPrice
// })
//
// router.post('/', async ({ body, acl, params }) => {
//     const productId = validator.validate(params.productId, schemas.url.number())
//     const payload = validator.validate(body, schemas.productPrice.create)
//
//     acl.authorize('create', 'ProductPrice', payload)
//
//     const productPrice = await ProductPrice.create({
//         ...payload,
//         product_id: productId,
//     })
//
//     return productPrice
// })
//
// router.put('/:id', async ({ params, body, acl }) => {
//     const productPrice = await ProductPrice.findOrFail(params.id)
//
//     acl.authorize('update', productPrice)
//
//     const payload = validator.validate(body, schemas.productPrice.update)
//
//     await ProductPrice.updateById(productPrice.id, payload)
//
//     productPrice.merge(payload)
//
//     return productPrice
// })
//
// router.delete('/:id', async ({ params, acl }) => {
//     const productPrice = await ProductPrice.find(params.id)
//
//     acl.authorize('delete', productPrice)
//
//     if (!productPrice) {
//         throw new Error('Product price not found')
//     }
//
//     await productPrice.softDelete()
//
//     return productPrice
// })
