import type GatewayEntity from '../entities/gatewayEntity.entity.ts'
import type Product from '../entities/product.entity.ts'
import type User from '#server/entities/user.entity.ts'

export interface PayPayload {
    product: Product
    user: User
}

export interface CreateResponse {
    /** The gateway entity created for this payment */
    entity: GatewayEntity
    
    /** URL to redirect the user to complete the payment */
    url: string
}

export default class GatewayProducts {
    public pay(payload: PayPayload): Promise<CreateResponse> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { payload })

        throw error
    }
}
