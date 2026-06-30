import type { OrderItemSchema } from '#zpayments/shared/schemas/orderItemSchema.ts'
import { DatabaseRepository } from '@sidekick-coder/zenith-kit/server'

export interface OrderItemRepositoryQueryOptions {
    id?: number | number[]
    order_id?: number | number[]
}

export default class OrderItemRepository extends DatabaseRepository<OrderItemSchema, number, OrderItemRepositoryQueryOptions> {

    constructor(db: DatabaseRepository['db']) {
        super(db, 'zpayments__order_items', 'id')
    }

    public query(options: OrderItemRepositoryQueryOptions = {}) {
        let query = super.query(options)

        if (options?.id) {
            const ids = Array.isArray(options.id) ? options.id : [options.id]

            query = query.where('id', 'in', ids)
        }

        if (options.order_id) {
            const ids = Array.isArray(options.order_id) ? options.order_id : [options.order_id]

            query = query.where('order_id', 'in', ids)
        }

        return query
    }
}
