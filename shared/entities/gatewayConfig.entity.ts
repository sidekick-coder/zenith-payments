import { BaseEntity } from '#shared/mixins/baseEntity.mixin.ts'
import { compose } from '#shared/utils/compose.ts'

export const GATEWAY_OPTIONS = [
    {
        id: 'stripe',
        label: 'Stripe',
        config_fields: {
            api_key: { 
                component: 'text-field',
                label: 'API Key',
            }
        }
    }
]

export default class GatewayConfig extends compose(BaseEntity) {
    public static GATEWAY_OPTIONS = GATEWAY_OPTIONS

    public id: number
    public name: string
    public description: string
    public gateway: string
    public config: Record<string, any>

    public get configFields() {
        const option = GatewayConfig.GATEWAY_OPTIONS.find(o => o.id === this.gateway)
        
        return option ? option.config_fields : {}
    }
}