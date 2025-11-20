import type GatewayEntity from '../entities/gatewayEntity.entity.ts'

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
}
