import type GatewayEntityMeta from './gatewayEntityMeta.entity.ts'
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class GatewayEntity extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public gateway: string
    public external_id: string
    public name: string
    public description: string | null
    public type: string
    public raw: string

    public metas?: GatewayEntityMeta[]
}
