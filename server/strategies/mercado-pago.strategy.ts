import { MercadoPagoConfig } from 'mercadopago'
import Gateway from '../gateways/gateway.gateway.ts'
import MercadoPagoPlan from './mercado-pago-plan.strategy.ts'
import MercadoPagoSubscription from './mercado-pago-subscription.strategy.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

export default class MercadoPago extends Gateway {
    public plans: MercadoPagoPlan
    public subscriptions: MercadoPagoSubscription
    public client: MercadoPagoConfig

    constructor(data: GatewayConfig) {
        super(data)
        this.client = new MercadoPagoConfig({ accessToken: this.config.accessToken })
        this.plans = new MercadoPagoPlan(this.id, this.client, this.config.publicKey)
        this.subscriptions = new MercadoPagoSubscription(this.id, this.client)
    }
}