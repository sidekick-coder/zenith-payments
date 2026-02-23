import { MercadoPagoConfig, PreApprovalPlan } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewayEntityAssignment from '../entities/gatewayEntityAssignment.entity.ts'
import GatewayPlan from '../gateways/gatewayPlans.gateway.ts'
import env from '#server/env.ts'

export default class MercadoPagoPlan extends GatewayPlan {
    public id: string
    public client: MercadoPagoConfig
    public preApprovalPlan: PreApprovalPlan
    public public_key: string
    
    constructor(id: string, client: MercadoPagoConfig, public_key: string) {
        super()
        this.id = id
        this.client = client
        this.public_key = public_key
        this.preApprovalPlan = new PreApprovalPlan(this.client)
    }

    public createSubscribeURL: GatewayPlan['createSubscribeURL'] = async (plan) => {
        const url = new URL(env.APP_URL + '/zpayments/mercado-pago/subscribe')

        url.searchParams.set('gateway_id', this.id)
        url.searchParams.set('plan_id', plan.id.toString())
        url.searchParams.set('public_key', this.public_key)

        return url.toString()
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