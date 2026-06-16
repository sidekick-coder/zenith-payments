import type GatewayEntity from '../entities/gatewayEntity.entity.ts'
import type Product from '../entities/product.entity.ts'
import type Payment from '../entities/payment.entity.ts'
import type ProductPrice from '../entities/productPrice.entity.ts'
import type Order from '../entities/order.entity.ts'
import type OrderItem from '../entities/orderItem.entity.ts'
import type User from '#server/entities/user.entity.ts'

export interface PayPayload {
    product: Product
    user: User
    payment: Payment,
    price: ProductPrice,
    order: Order,
    orderItems: OrderItem[],
}

export interface CreateResponse {
    /** The gateway entity created for this payment */
    entity: GatewayEntity
    
    /** URL to redirect the user to complete the payment */
    checkout_url: string
}

export interface GetStatusPayload {
    payment: Payment
}

export default class GatewayProducts {
    public pay(payload: PayPayload): Promise<CreateResponse> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { payload })

        throw error
    }

    public getStatus(payload: GetStatusPayload): Promise<Payment['status']> {
        const error = new Error('Method not implemented.')

        Object.assign(error, { payload })

        throw error
    }
}
