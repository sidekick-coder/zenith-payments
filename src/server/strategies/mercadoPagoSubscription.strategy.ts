import { MercadoPagoConfig, PreApproval } from 'mercadopago'
import type { Insertable } from 'kysely'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewaySubscription from '../gateways/gatewaySubscriptions.gateway.ts'
import type { CreateSubscriptionPayload, GatewaySubscriptionResponse } from '../gateways/gatewaySubscriptions.gateway.ts'
import Subscription from '../entities/subscription.entity.ts'
import Customer from '../entities/customer.entity.ts'
import logger from '#server/facades/logger.facade.ts'
import type { Database } from '#server/contracts/database.contract'
import { env } from '@sidekick-coder/zenith-kit/server'

export default class MercadoPagoSubscription extends GatewaySubscription {
    public id: string
    public client: MercadoPagoConfig
    public preApproval: PreApproval
    public logger = logger.child({
        label: 'mercado-pago'
    })
    
    constructor(id: string, client: MercadoPagoConfig) {
        super()
        this.id = id
        this.client = client
        this.preApproval = new PreApproval(this.client)
    }

    public async sync(): Promise<void> {
        const response = await this.preApproval.search({
            options: {}
        })

        if (!response.results?.length) {
            return
        }

        for await (const item of response.results) {
            this.logger.info(`syncing ${item.id}`, { item })

            const entity = await GatewayEntity.updateOrCreate({
                where: eb => eb.and({
                    gateway: this.id,
                    type: 'subscription',
                    external_id: String(item.id),
                }),
                values: {
                    gateway: this.id,
                    external_id: String(item.id),
                    name: `Subscription ${item.id}`,
                    type: 'subscription',
                    raw: JSON.stringify(item),
                }
            })
            
            const payload: Insertable<Database['zpayments__subscriptions']> = {
                user_id: null,
                plan_id: null,
                amount: item.auto_recurring?.transaction_amount || 0,
                status: item.status === 'authorized' ? 'active' : 'inactive',
            }

            const payer = await GatewayEntity.findOne({
                where: eb => eb.and({
                    gateway: this.id,
                    type: 'customer',
                    external_id: String(item.payer_id),
                })
            })

            if (payer) {
                const customer = await Customer.findByGatewayEntityId(payer.id)

                if (customer) {
                    payload.user_id = customer.id
                }
            }
            
            let subscription = await Subscription.findByGatewayEntityId(entity.id)

            if (!subscription) {
                subscription = await Subscription.create(payload)

                await subscription.$entities.attach(entity.id, {
                    assignable_type: 'subscription',
                })
            }



            await Subscription.updateById(subscription.id, payload)
        }
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
                back_url: env.get('ZENITH_APP_URL') + '/api/zpayments/webhooks/mercadopago',
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
