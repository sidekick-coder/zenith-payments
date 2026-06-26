import type { OrderSchema } from '#zpayments/shared/schemas/index.ts'
import { DatabaseRepository } from '@sidekick-coder/zenith-kit/server'

export interface OrderRepositoryQueryOptions {
    id?: number | number[]
    user_id?: number
    status?: string
    show_deleted?: boolean
}

export default class OrderRepository extends DatabaseRepository<OrderSchema, number, OrderRepositoryQueryOptions> {
    public autoCreatedAt: boolean = true
    public autoUpdatedAt: boolean = true

    constructor(db: DatabaseRepository['db']) {
        super(db, 'zpayments__orders', 'id')
    }

    public query(options: OrderRepositoryQueryOptions = {}) {
        let query = super.query(options)

        if (!options.show_deleted) {
            query = query.where('deleted_at', 'is', null)
        }

        if (options?.id) {
            const ids = Array.isArray(options.id) ? options.id : [options.id]

            query = query.where('id', 'in', ids)
        }

        if (options.user_id) {
            query = query.where('user_id', '=', options.user_id)
        }

        if (options.status) {
            query = query.where('status', '=', options.status)
        }

        return query
    }

    public softDeleteById(id: number) {
        return this.updateById(id, { deleted_at: new Date().toISOString() })
    }
}
