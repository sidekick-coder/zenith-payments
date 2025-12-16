import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class ProductPrice extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public product_id: number
    public gateway_id?: string | null
    public country?: string | null
    public amount: number
    public currency: string
}
