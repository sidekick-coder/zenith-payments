import { MercadoPagoConfig, PreApprovalPlan } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import GatewayPlan from '../gateways/gatewayPlans.gateway.ts'

export default class MercadoPagoPlan extends GatewayPlan {
    public id: string
    public client: MercadoPagoConfig
    public preApprovalPlan: PreApprovalPlan
    
    constructor(id: string, client: MercadoPagoConfig) {
        super()
        this.id = id
        this.client = client
        this.preApprovalPlan = new PreApprovalPlan(this.client)
    }

    public find: GatewayPlan['find'] = async (id) => {
        const { api_response: _, ...plan } = await this.preApprovalPlan.get({
            preApprovalPlanId: id,
        })

        const entity = await GatewayEntity.updateOrCreate({
            where: eb => eb.and({
                gateway: this.id,
                external_id: id,
            }),
            values: {
                gateway: this.id,
                external_id: id,
                name: plan.reason || `Plan ${id}`,
                type: 'plan',
                raw: JSON.stringify(plan),
            }
        })

        return entity
    }
}