import { MercadoPagoConfig, Preference, Payment } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewayProducts from '../gateways/gatewayProducts.gateway.ts'
import logger from '#server/facades/logger.facade.ts'
import type { PaymentStatus } from '#zpayments/shared/entities/payment.entity.ts'
import env from '#server/facades/env.facade.ts'

export default class MercadoPagoProducts extends GatewayProducts {
    public id: string
    public client: MercadoPagoConfig
    public preference: Preference
    public payment: Payment
    public config: Record<string, any>
    public logger = logger.child({
        label: 'mercado-pago'
    })
    
    constructor(id: string, client: MercadoPagoConfig, config: Record<string, any>) {
        super()
        this.id = id
        this.client = client
        this.config = config
        this.preference = new Preference(this.client)
        this.payment = new Payment(this.client)
    }

    public getMPPaymentByExternalId = async (externalId: string) => {
        const { results } = await this.payment.search({ 
            options: {
                external_reference: externalId,
            }
        })

        return results?.[0] || null
    }

    public pay: GatewayProducts['pay'] = async ({ product, price, user, payment }) => {
        let url = new URL(`/api/zpayments/payments/${payment.id}/process`, env.get('APP_URL'))

        if (this.config.back_url) {
            url = new URL(this.config.back_url.replace(':id', String(payment.id)))
        }

        const priceAmount = price.amount / 100

        const items = [
            {
                id: String(product.id),
                title: product.name,
                description: product.description || '',
                quantity: 1,
                unit_price: priceAmount,
            }
        ]

        const payload = {
            items: items,
            payer: {
                name: user.name,
                email: user.email
            },
            back_urls: {
                success: url.toString(),
                failure: url.toString(),
                pending: url.toString(),
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
            checkout_url: response.init_point!,
        }
    }

    public getStatus: GatewayProducts['getStatus'] = async ({ payment }) => {
        const mpPayment = await this.getMPPaymentByExternalId(String(payment.id))

        if (!mpPayment) {
            this.logger.warn(`Payment not found in MercadoPago: ${payment.id}`)
            return 'pending'
        }

        const entity = await GatewayEntity.updateOrCreate({
            where: eb => eb.and({
                gateway: this.id,
                type: 'payment',
                external_id: String(mpPayment.id),
            }),
            values: {
                gateway: this.id,
                external_id: String(mpPayment.id),
                name: `Payment ${mpPayment.id}`,
                type: 'payment',
                raw: JSON.stringify(mpPayment),
            }
        })

        await payment.$entities.attach(entity.id)

        const statusMap: Record<string, PaymentStatus> = {
            'approved': 'approved',
            'pending': 'pending',
            'in_process': 'pending',
            'rejected': 'failed',
            'cancelled': 'failed',
            'refunded': 'refunded',
            'charged_back': 'failed',
        }

        return statusMap[mpPayment.status!] || 'pending'
    }

    
}
