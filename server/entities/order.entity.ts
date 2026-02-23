import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/order.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import type { ExpressionBuilder } from '#server/queries/index.ts'
import type { OrderWhere } from '#zpayments/shared/validators/order.validator.ts'
import BelongsToUser from '#server/relations/belongsToUser.relation.ts'
import { Relation } from '#server/mixins/relations.mixin.ts'

export const OrderRelations = {
    user: new BelongsToUser()
}
export default class Order extends composeWith(
    Base,
    Model('zpayments__orders'),
    Relation(OrderRelations)
) {
    public static where(eb: ExpressionBuilder<'zpayments__orders'>, payload: OrderWhere) { 
        const and = []
        
        if (payload.user_id) {
            and.push(eb('user_id', 'in', payload.user_id))
        }

        if (payload.purpose) {
            and.push(eb('purpose', '=', payload.purpose))
        }

        return eb.and(and)
    }
}
