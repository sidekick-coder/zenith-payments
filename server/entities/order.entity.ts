import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/order.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import User from '#server/entities/user.entity.ts'
import type { ExpressionBuilder } from '#server/queries/index.ts'
import type { OrderInclude, OrderWhere } from '#zpayments/shared/validators/order.validator.ts'

export default class Order extends composeWith(
    Base,
    Model('zpayments__orders')
) {
    public static async loadUser(payload: Order | Order[]) {
        const entities = Array.isArray(payload) ? payload : [payload]

        if (!entities.length) return

        const userIds = entities.map(e => e.user_id).filter((v, i, a) => v && a.indexOf(v) === i)

        const users = await User.list({
            query: ub => ub
                .selectAll()
                .where('id', 'in', userIds)
        })

        const userMap = new Map(users.map(u => [u.id, u]))

        entities.forEach(e => {
            if (e.user_id) {
                e.user = userMap.get(e.user_id)
            }
        })
    }

    public static async load(payload: Order | Order[], relations: OrderInclude) {        
        if (relations.includes('user')) {
            await this.loadUser(payload)
        }
    }

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
