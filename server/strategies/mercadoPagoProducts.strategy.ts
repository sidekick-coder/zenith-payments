import { MercadoPagoConfig, Preference } from 'mercadopago'
import { sql  } from 'kysely'
import type { Insertable } from 'kysely'
import type { email } from 'valibot'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewaySubscription from '../gateways/gatewaySubscriptions.gateway.ts'
import type { CreateSubscriptionPayload, GatewaySubscriptionResponse } from '../gateways/gatewaySubscriptions.gateway.ts'
import Subscription from '../entities/subscription.entity.ts'
import Customer from '../entities/customer.entity.ts'
import GatewayProducts from '../gateways/gatewayProducts.gateway.ts'
import env from '#server/env.ts'
import logger from '#server/facades/logger.facade.ts'
import type { Database } from '#server/contracts/database.contract'
import db from '#server/facades/db.facade.ts'

export default class MercadoPagoProducts extends GatewayProducts {
    public id: string
    public client: MercadoPagoConfig
    public preference: Preference
    public logger = logger.child({
        label: 'mercado-pago'
    })
    
    constructor(id: string, client: MercadoPagoConfig) {
        super()
        this.id = id
        this.client = client
        this.preference = new Preference(this.client)
    }

    public pay: GatewayProducts['pay'] = async ({ product, price, user, payment }) => {
        const baseURL = 'https://parrot-apt-ewe.ngrok-free.app'

        const params = new URLSearchParams()

        params.set('gateway_id', this.id)
        params.set('payment_id', String(payment.id))
        params.set('order_id', String(payment.order_id))

        const successUrl = new URL('/api/zpayments/mercadopago/success', baseURL)
        const failureUrl = new URL('/api/zpayments/mercadopago/failure', baseURL)
        const pendingUrl = new URL('/api/zpayments/mercadopago/pending', baseURL)

        for (const [key, value] of params.entries()) {
            successUrl.searchParams.append(key, value)
            failureUrl.searchParams.append(key, value)
            pendingUrl.searchParams.append(key, value)
        }

        const items = [
            {
                id: String(product.id),
                title: product.name,
                description: product.description || '',
                quantity: 1,
                unit_price: price.amount,
            }
        ]

        const payload = {
            items: items,
            payer: {
                name: user.name,
                email: user.email
            },
            back_urls: {
                success: successUrl.toString(),
                failure: failureUrl.toString(),
                pending: pendingUrl.toString(),
            },
            auto_return: 'approved',
            external_reference: String(payment.id),
        }

        const { api_response: _, ...response } = await this.preference.create({
            body: payload,
        })
        
        const entity = await GatewayEntity.create({
            external_id: String(response.id),
            name: 'MercadoPago Preference',
            type: 'preference',
            gateway: this.id,
            raw: JSON.stringify(response),
        })

        await payment.$entities.attach(entity.id)

        return {
            entity,
            checkout_url: response.init_point,
        }
    }

    
}
