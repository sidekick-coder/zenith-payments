import ProductPrice from './productPrice.entity.ts'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/product.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import MetadataService from '#server/services/metadata.service.ts'
import HasMany from '#server/relations/hasMany.relation.ts'
import { Relation } from '#server/mixins/relations.mixin.ts'
import { undeleted   } from '#server/queries/index.ts'
import type { SelectFrom } from '#server/queries/index.ts'
import type { ProductWhere } from '#zpayments/shared/validators/product.validator.ts'
import MetadataQueryService from '#server/services/metadataQuery.service.ts'

const ProductRelations = {
    prices: new HasMany({
        table: 'zpayments__products',
        tableKey: 'id',

        targetTable: 'zpayments__product_prices',
        targetKey: 'product_id',

        property: 'prices',
        serialize: (row: any) => ProductPrice.from(row),
    })
}

export default class Product extends composeWith(
    Base,
    Model('zpayments__products'),
    Relation(ProductRelations)
) {
    public get $metas(){
        return new MetadataService({
            foreignKey: 'product_id',
            table: 'zpayments__product_metas',
            id: this.id,
        })
    }

    public static query(qb: SelectFrom<'zpayments__products'>, where: ProductWhere) {
        let result = qb.selectAll().where(undeleted)

        if (where.search) {
            result = result.where(eb => eb.or([
                eb('name', 'like', `%${where.search}%`),
                eb('description', 'like', `%${where.search}%`),
            ]))
        }

        if (where.metas) {
            const service = new MetadataQueryService(where.metas, 'zpayments__product_metas', 'product_id')
            
            result = service.apply(result)
        }

        return result
    }
}
