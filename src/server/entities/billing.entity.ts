import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/billing.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Billing extends composeWith(
    Base,
    Model('zpayments__billings')
) {}