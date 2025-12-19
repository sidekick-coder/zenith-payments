import type ProductPrice from './productPrice.entity.ts'
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class Product extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public name: string
    public description: string | null

    // amount dynamic loaded from prices
    public amount?: number

    public prices?: ProductPrice[]

    public useGateway(gateway_id: string) {
        if (!this.prices || this.prices.length === 0) {
            return
        }

        const price = this.prices.find(p => p.gateway_id === gateway_id)
        
        if (price) {
            this.amount = price.amount
        }
    }
}
