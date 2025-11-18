import type GatewayPayment from './gatewayPayments.entity.ts'
import type GatewayPlan from './gatewayPlans.entity.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

export default class Gateway {
    public id: string
    public name: string
    public gateway: string
    public description: string
    public config: any
    
    public payments?: GatewayPayment
    public plans?: GatewayPlan

    constructor(data: GatewayConfig) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.gateway = data.gateway
        this.config = data.config
    }
}
