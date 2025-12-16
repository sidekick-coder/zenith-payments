import { MercadoPagoConfig, PreApproval } from 'mercadopago'
import payment from '../facades/zpayment.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import Subscription from '../entities/subscription.entity.ts'
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


router.post('/subscriptions', async ({ body, user, acl }) => {
    const payload = validator.validate(body, v => v.object({
        email: v.string(),
        gateway_id: v.string(),
        plan_id: v.number(),
        card_token: v.string(),
    }))

    const plan = await Plan.findOrFail(payload.plan_id)
    const gateway = await payment.gateways.find(payload.gateway_id)
    const entity = await plan.findEntityByGatewayId(payload.gateway_id)

    const client = new MercadoPagoConfig({ accessToken: gateway.config.accessToken })
    const preApproval = new PreApproval(client)

    const { api_response: _, ...subscription } = await preApproval.create({
        body: {
            preapproval_plan_id: entity.external_id,
            reason: plan.name,
            payer_email: payload.email,
            back_url: env.APP_URL + '/api/zpayments/mercadopago/webhooks',
            card_token_id: payload.card_token,
            auto_recurring: {
                frequency: 1,
                frequency_type: 'months',
                transaction_amount: plan.amount / 100,
                currency_id: 'BRL',
            }
        }
    })

    if (!subscription.id) {
        throw new Error('Subscription ID not returned from Mercado Pago')
    }
    
    const subscriptionEntity = await GatewayEntity.findOrCreate({
        gateway: gateway.id,
        external_id: subscription.id,
        name: `Subscription ${subscription.id}`,
        type: 'subscription',
        raw: JSON.stringify(subscription),
    })

    const subscriptionRecord = await Subscription.create({
        user_id: user.id,
        plan_id: plan.id,
        amount: plan.amount,
        status: subscription.status === 'authorized' ? 'active' : 'pending',
    })

    await subscriptionRecord.assignEntity(subscriptionEntity.id)

    return subscriptionRecord
})