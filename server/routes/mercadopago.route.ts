import { MercadoPagoConfig, PreApproval } from 'mercadopago'
import payment from '../facades/zpayment.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import Subscription from '../entities/subscription.entity.ts'
import zpayment from '../facades/zpayment.ts'
import Payment from '../entities/payment.entity.ts'
import Order from '../entities/order.entity.ts'
import MercadoPago from '../strategies/mercado-pago.strategy.ts'
import rootRouter from '#server/facades/router.facade.ts'
import validator from '#shared/services/validator.service.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import schemas from '#zpayments/shared/validators/index.ts'
import Plan from '#zpayments/server/entities/plan.entity.ts'
import { undeleted } from '#server/queries/index.ts'
import GatewayEntity from '#zpayments/server/entities/gatewayEntity.entity.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import BaseException from '#server/exceptions/base.ts'
import logger from '#server/facades/logger.facade.ts'
import env from '#server/env.ts'

const router = rootRouter.prefix('/api/zpayments/mercadopago')
    .use(authMiddleware)
    .group()

const unrestricted = rootRouter.prefix('/api/zpayments/mercadopago').group()

unrestricted.get('/success', async ({ query, response }) => {
    const payment_id = query.payment_id as string
    const order_id = query.order_id as string

    const payment = await Payment.findOrFail(Number(payment_id))
    const order = await Order.findOrFail(Number(order_id))

    await Payment.updateById(payment.id, {
        status: 'success',
    })

    await Order.updateById(order.id, {
        status: 'success',
    })

    const url = new URL(env.APP_URL)

    url.pathname = '/admin/zpayments/payments'

    response.redirect(url.toString())
})

unrestricted.get('/failure', async ({ query, response }) => {
    const payment_id = query.external_reference as string
    const order_id = query.order_id as string

    console.log(query)

    const payment = await Payment.findOrFail(Number(payment_id))
    const order = await Order.findOrFail(Number(order_id))

    await Payment.updateById(payment.id, {
        status: 'failed',
    })

    await Order.updateById(order.id, {
        status: 'failed',
    })

    const url = new URL(env.APP_URL)

    url.pathname = '/admin/zpayments/payments'

    response.redirect(url.toString())
})

unrestricted.get('/pending', async ({ query }) => {
    return query
})