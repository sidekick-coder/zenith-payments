import type { ProductMetaSchema } from '#zpayments/shared/schemas/index.ts'
import { DatabaseRepository } from '@sidekick-coder/zenith-kit/server'

export interface ProductMetaRespotoryQueryOptions {
    id?: number | number[]
    search?: string
    name?: string 
    value?: string
    product_id?: number
    show_deleted?: boolean
}


export default class ProductMetaRespotory extends DatabaseRepository<ProductMetaSchema, number, ProductMetaRespotoryQueryOptions> {
    public autoCreatedAt: boolean = true
    public autoUpdatedAt: boolean = true
    
    constructor(db: DatabaseRepository['db']) {
        super(db, 'zpayments__product_metas', 'id')
    }

    public query(options: ProductMetaRespotoryQueryOptions = {}) {
        let query = super.query(options)

        if (!options.show_deleted) {
            query = query.where('deleted_at', 'is', null)
        }

        if (options.search) {
            query = query.where('name', 'like', `%${options.search}%`)
        }

        if (options.name) {
            query = query.where('name', '=', options.name)
        }

        if (options.value) {
            query = query.where('value', '=', options.value)
        }

        if (options?.id) {
            const ids = Array.isArray(options.id) ? options.id : [options.id]

            query = query.where('id', 'in', ids)
        }

        if (options.product_id) {
            query = query.where('product_id', '=', options.product_id)
        }

        return query
    }

    public softDeleteById(id: number) {
        return this.updateById(id, { deleted_at: new Date().toISOString() })
    }
}


