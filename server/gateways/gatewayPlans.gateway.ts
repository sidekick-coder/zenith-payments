import type GatewayEntity from '../entities/gatewayEntity.entity.ts'
import type Plan from '../entities/plan.entity.ts'

export default class GatewayPlan {
    public createSubscribeURL(plan: Plan): Promise<string> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { plan })

        throw error
    }

    public list(){
        const error = new Error('Method not implemented.')

        throw error
    }

    public find(id: string): Promise<GatewayEntity> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { id })

        throw error
    }
}
