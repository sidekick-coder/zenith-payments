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
import User from '#server/entities/user.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'

const router = rootRouter.prefix('/api/zpayments/products/:product_id/payments')
    .use(authMiddleware)
    .group()

router.post('/', async ({ params, body }) => {
    const productId = validator.validate(params.product_id, schemas.url.number())

    const payload = validator.validate(body, v => v.object({
        gateway_id: v.string(),
        user_id: v.number(),
    }))

    const product = await Product.findOrFail(productId)
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


    const [error, result] = await tryCatch(() => gateway.products!.pay({
        payment,
        order,
        orderItems: [orderItem],
        product,
        price,
        user,
    }))
    
    if (error) {
        await payment.merge({ status: 'failed' }).save()
        await order.merge({ status: 'failed' }).save()
    
        throw error
    }
    
    return result
})