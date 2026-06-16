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
    },
    {
        id: 'mercadopago',
        label: 'MercadoPago',
        config_fields: {
            public_key: { 
                component: 'text-field',
                label: 'Public Key',
                type: 'password'
            },
            access_token: { 
                component: 'text-field',
                label: 'Access Token',
                type: 'password'
            },
            back_url: {
                component: 'text-field',
                label: 'Callback URL',
                hint: 'Used for tests with ngrok or similar services. Default APP_URL/api/zpayments/payments/:id/process'
            }
        }
    }
]

export default class GatewayConfig extends compose(BaseEntity) {
    public static GATEWAY_OPTIONS = GATEWAY_OPTIONS

    public id: string
    public name: string
    public description: string
    public gateway: string
    public config: Record<string, any>

    public get configFields() {
        const option = GatewayConfig.GATEWAY_OPTIONS.find(o => o.id === this.gateway)
        
        return option ? option.config_fields : {}
    }
}