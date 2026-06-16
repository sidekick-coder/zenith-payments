import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/gatewayEntityMeta.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class GatewayEntityMeta extends composeWith(
    Base,
    Model('zpayments__gateway_entity_metas')
) {}
