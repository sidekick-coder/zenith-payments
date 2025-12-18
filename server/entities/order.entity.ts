import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/order.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Order extends composeWith(
    Base,
    Model('zpayments__orders')
) {
    public async setStatus(status: Order['status']) {
        await Order.updateById(this.id, { status })
        
        this.status = status
    }
}
