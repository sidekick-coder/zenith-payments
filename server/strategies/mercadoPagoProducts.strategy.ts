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

        const path = `/api/zpayments/gateways/${this.id}/mercado-pago/notifications`

        const baseUrl = new URL(path, env.APP_URL)

        baseUrl.searchParams.set('paymentId', String(payment.id))
        baseUrl.searchParams.set('userId', String(user.id))
        baseUrl.searchParams.set('productId', String(product.id))

        const successUrl = new URL(baseUrl.toString())
        
        successUrl.searchParams.set('status', 'success')

        const failureUrl = new URL(baseUrl.toString())
        
        failureUrl.searchParams.set('status', 'failure')

        const pendingUrl = new URL(baseUrl.toString())

        pendingUrl.searchParams.set('status', 'pending')
        


        const items = [
            {
                id: String(product.id),
                title: product.name,
                description: product.description || '',
                quantity: 1,
                unit_price: price.amount,
            }
        ]

        const response = await this.preference.create({
            body: {
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
        })

        console.log(response)

        throw new Error('Not implemented yet')
    }

    
}
