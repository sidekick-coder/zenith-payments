import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/gatewayEntity.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class GatewayEntity extends composeWith(
    Base,
    Model('zpayments__gateway_entities')
) {}
