import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/plan.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Plan extends composeWith(
    Base,
    Model('zpayments__plans')
) {}