import { MercadoPagoConfig, PreApproval } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewaySubscription from '../gateways/gatewaySubscriptions.gateway.ts'
import type { CreateSubscriptionPayload, GatewaySubscriptionResponse } from '../gateways/gatewaySubscriptions.gateway.ts'
import env from '#server/env.ts'

export default class MercadoPagoSubscription extends GatewaySubscription {
    public id: string
    public client: MercadoPagoConfig
    public preApproval: PreApproval
    
    constructor(id: string, client: MercadoPagoConfig) {
        super()
        this.id = id
        this.client = client
        this.preApproval = new PreApproval(this.client)
    }

    public create = async (payload: CreateSubscriptionPayload): Promise<GatewaySubscriptionResponse> => {
        const { user, plan } = payload

        const planEntity = await GatewayEntity.findOne({
            where: eb => eb.and({
                gateway: this.id,
                type: 'plan',
            })
        })

        if (!planEntity) {
            throw new Error(`Plan gateway entity not found for gateway ${this.id}`)
        }

        const response = await this.preApproval.create({
            body: {
                preapproval_plan_id: planEntity.external_id,
                reason: plan.name,
                payer_email: user.email,
                back_url: env.APP_URL + '/api/zpayments/webhooks/mercadopago',
                auto_recurring: {
                    frequency: 1,
                    frequency_type: 'months',
                    transaction_amount: plan.amount,
                    currency_id: 'BRL',
                }
            }
        })

        const { api_response: _, ...subscription } = response

        if (!subscription.id) {
            throw new Error('Subscription ID not returned from Mercado Pago')
        }

        const entity = await GatewayEntity.findOrCreate({
            gateway: this.id,
            external_id: subscription.id,
            name: `Subscription ${subscription.id}`,
            type: 'subscription',
            raw: JSON.stringify(subscription),
        })

        return {
            entity,
            checkoutUrl: subscription.init_point || '',
        }
    }
}
