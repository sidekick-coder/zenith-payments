import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/orderItem.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class OrderItem extends composeWith(
    Base,
    Model('zpayments__order_items')
) {}
