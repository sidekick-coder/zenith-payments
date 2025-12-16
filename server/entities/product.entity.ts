import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/product.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Product extends composeWith(
    Base,
    Model('zpayments__products')
) {}
