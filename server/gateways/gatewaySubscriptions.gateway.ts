import type Plan from '../entities/plan.entity.ts'
import type GatewayEntity from '../entities/gatewayEntity.entity.ts'
import type User from '#server/entities/user.entity.ts'

export interface CreateSubscriptionPayload {
    user: User
    plan: Plan
}

export interface GatewaySubscriptionResponse {
    entity: GatewayEntity
    checkoutUrl: string
}

export default class GatewaySubscription {
    public sync() {
        const error = new Error('Method not implemented.')

        throw error
    }
    
    public list(){
        const error = new Error('Method not implemented.')

        throw error
    }

    public create(payload: CreateSubscriptionPayload): Promise<GatewaySubscriptionResponse> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { payload })

        throw error
    }
}
