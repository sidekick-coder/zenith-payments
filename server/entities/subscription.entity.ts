import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/subscription.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Subscription extends composeWith(
    Base,
    Model('zpayments__subscriptions')
) {}