import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/productMeta.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class ProductMeta extends composeWith(
    Base,
    Model('zpayments__product_metas')
) {}
