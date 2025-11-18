import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import GatewayPlan from '../entities/gatewayPlans.entity.ts'

export default class MercadoPagoPlan extends GatewayPlan {
    public id: string
    
    constructor(id: string) {
        super()
        this.id = id
    }

    public link: GatewayPlan['link'] = async (plan) => {
        const entity = await GatewayEntity.create({
            gateway: this.id,
            external_id: plan.id.toString(),
            name: plan.name,
            description: plan.description || null,
            type: 'Plan',
            raw: JSON.stringify(plan),
        })

        const assigned = await GatewayEntityAssignment.create({
            gateway_entity_id: entity.id,
            assignable_id: plan.id.toString(),
            assignable_type: 'Plan',
        })
        
        return assigned
    }
}