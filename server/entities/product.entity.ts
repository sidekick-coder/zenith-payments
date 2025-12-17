import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/product.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import MetadataService from '#server/services/metadata.service.ts'

export default class Product extends composeWith(
    Base,
    Model('zpayments__products')
) {
    public get $metas(){
        return new MetadataService({
            foreignKey: 'product_id',
            table: 'zpayments__product_metas',
            id: this.id,
        })
    }
}
