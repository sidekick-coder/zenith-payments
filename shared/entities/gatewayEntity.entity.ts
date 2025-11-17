import type GatewayEntityMeta from './gatewayEntityMeta.entity.ts'
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class GatewayEntity extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public gateway: string
    public entity_id: string
    public entity_type: string

    public metas?: GatewayEntityMeta[]
}
