import { BaseEntity } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class OrderItem extends compose(BaseEntity) {
    public id: number
    public order_id: number
    public item_type: string
    public item_id: string
    public quantity: number
    public unit_amount: number
    public currency: string
}
