import Gateway from '../entities/gateway.entity.ts'
import MercadoPagoPlan from './mercado-pago-plan.gateway.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

export default class MercadoPago extends Gateway {
    public plans?: MercadoPagoPlan

    constructor(data: GatewayConfig) {
        super(data)
        this.plans = new MercadoPagoPlan(this.id)
    }
}