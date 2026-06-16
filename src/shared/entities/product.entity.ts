import ProductPrice from './productPrice.entity.ts'
import { BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export default class Product extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public name: string
    public description: string | null

    // selected price
    public price?: ProductPrice
    public prices?: ProductPrice[]

    public static parse(data: any) {
        if (data.prices && Array.isArray(data.prices)) {
            data.prices = data.prices.map((p: any) => ProductPrice.from(p))
        }

        return data
    }

    public get amountFormatted(): string | null {
        if (!this.price) return null

        return this.price.amountFormatted
    }

    public useGateway(gateway_id: string) {
        if (!this.prices || this.prices.length === 0) {
            return
        }

        const price = this.prices.find(p => p.gateway_id === gateway_id)
        
        if (price) {
            this.price = price
        }
    }
}
