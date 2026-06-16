import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/productPrice.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class ProductPrice extends composeWith(
    Base,
    Model('zpayments__product_prices')
) {}
