import type { ProductPriceSchema } from '#zpayments/shared/schemas/index.ts'
import { DatabaseRepository } from '@sidekick-coder/zenith-kit/server'

export interface ProductPriceRespotoryQueryOptions {
    id?: number | number[]
    search?: string
    country?: string | string[]
    currency?: string | string[]
    product_id?: number
    show_deleted?: boolean
}

export default class ProductPriceRespotory extends DatabaseRepository<ProductPriceSchema, number, ProductPriceRespotoryQueryOptions> {
    public autoCreatedAt: boolean = true
    public autoUpdatedAt: boolean = true
    
    constructor(db: DatabaseRepository['db']) {
        super(db, 'zpayments__product_prices', 'id')
    }

    public query(options: ProductPriceRespotoryQueryOptions = {}) {
        let query = super.query(options)

        if (!options.show_deleted) {
            query = query.where('deleted_at', 'is', null)
        }

        if (options?.search) {
            query = query.innerJoin('zpayments__products as p', 'zpayments__products.id', 'zpayments__product_prices.product_id')

            query = query.where('p.name', 'like', `%${options.search}%`)
        }

        if (options?.id) {
            const ids = Array.isArray(options.id) ? options.id : [options.id]

            query = query.where('id', 'in', ids)
        }

        if (options.product_id) {
            query = query.where('product_id', '=', options.product_id)
        }

        if (options.country) {
            const countries = Array.isArray(options.country) ? options.country : [options.country]

            query = query.where('country', 'in', countries)
        }

        if (options.currency) {
            const currencies = Array.isArray(options.currency) ? options.currency : [options.currency]

            query = query.where('currency', 'in', currencies)
        }

        return query
    }

    public softDeleteById(id: number) {
        return this.updateById(id, { deleted_at: new Date().toISOString() })
    }
}


