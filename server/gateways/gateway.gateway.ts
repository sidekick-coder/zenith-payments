import type GatewayPlan from './gatewayPlans.gateway.ts'
import type GatewayPayment from './gatewayPayments.gateway.ts'
import type GatewaySubscription from './gatewaySubscriptions.gateway.ts'
import type GatewayCustomers from './gatewayCustomers.gateway.ts'
import type GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

export default class Gateway {
    public id: string
    public name: string
    public gateway: string
    public description: string
    public config: any
    
    public payments?: GatewayPayment
    public plans?: GatewayPlan
    public subscriptions?: GatewaySubscription
    public customers?: GatewayCustomers

    constructor(data: GatewayConfig) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.gateway = data.gateway
        this.config = data.config
    }
}
