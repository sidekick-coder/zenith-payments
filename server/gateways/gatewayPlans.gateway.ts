import type GatewayEntity from '../entities/gatewayEntity.entity.ts'
import type Plan from '../entities/plan.entity.ts'

export default class GatewayPlan {
    public list(){
        const error = new Error('Method not implemented.')

        throw error
    }

    public find(id: string): Promise<GatewayEntity> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { id })

        throw error
    }

    public sync(plan: Plan): void {
        const error = new Error('Method not implemented.')

        Object.assign(error, { plan })

        throw error
    }

    public unsync(plan: Plan): void {
        const error = new Error('Method not implemented.')

        Object.assign(error, { plan })

        throw error
    }
}
