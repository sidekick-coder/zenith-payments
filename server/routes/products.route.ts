import zpayment from '../facades/zpayment.ts'
import ProductPrice from '../entities/productPrice.entity.ts'
import Order from '../entities/order.entity.ts'
import OrderItem from '../entities/orderItem.entity.ts'
import Payment from '../entities/payment.entity.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Product from '#zpayments/server/entities/product.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import User from '#server/entities/user.entity.ts'
import BaseException from '#server/exceptions/base.ts'

const router = rootRouter.prefix('/api/zpayments/products')
    .use(authMiddleware)
    .group()

const publicRouter = rootRouter.prefix('/api/zpayments/products')
    .group()

router.get('/', async ({ query }) => {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10

    const pagination = await Product.paginate({
        page,
        limit,
        query: qb => qb.selectAll()
            .where(undeleted)
            .orderBy('created_at', 'desc'),
    })

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

publicRouter.post('/pay', async ({ params, body, acl }) => {
    const payload = validator.validate(body, v => v.object({
        product_id: v.number(),
        gateway_id: v.string(),
        user_id: v.number(),
    }))

    const product = await Product.findOrFail(payload.product_id)
    const user = await User.findOrFail(payload.user_id)
    const gateway = await zpayment.gateways.find(payload.gateway_id)

    const price = await ProductPrice.findOne({
        where: eb => eb.and({
            product_id: product.id,
            gateway_id: gateway.id,
        })
    })

    if (!price) {
        throw new BaseException('Price not found for the selected gateway', 404)
    }

    if (!gateway.products) {
        throw new BaseException('Selected gateway does not support product payments', 400)
    }

    const order = await Order.create({
        user_id: user.id,
        purpose: 'product',
        status: 'pending',
        amount: price.amount,
        currency: price.currency,
    })

    const orderItem = await OrderItem.create({
        order_id: order.id,
        item_type: 'product',
        item_id: String(product.id),
        quantity: 1,
        unit_amount: price.amount,
        currency: price.currency,
    })

    const payment = await Payment.create({
        order_id: order.id,
        gateway_id: gateway.id,
        status: 'pending',
        amount: price.amount,
    })


    const result = await gateway.products.pay({
        payment,
        order,
        orderItems: [orderItem],
        product,
        price,
        user,
    })
})