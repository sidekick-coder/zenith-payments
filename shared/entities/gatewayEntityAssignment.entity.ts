import type GatewayEntity from './gatewayEntity.entity.ts'
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class GatewayEntityAssignment extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public entity_id: number
    public assignable_id: string
    public assignable_type: string

    public gateway_entity?: GatewayEntity
}
