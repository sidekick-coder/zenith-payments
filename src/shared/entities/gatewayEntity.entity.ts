import type GatewayEntityMeta from './gatewayEntityMeta.entity.ts'
import { BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

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
