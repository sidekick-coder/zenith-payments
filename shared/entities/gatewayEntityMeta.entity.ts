import type GatewayEntity from './gatewayEntity.entity.ts'
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class GatewayEntityMeta extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public entity_id: number
    public name: string
    public value: string

    public gatewayEntity?: GatewayEntity
}
