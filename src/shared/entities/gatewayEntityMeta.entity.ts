import type GatewayEntity from './gatewayEntity.entity.ts'
import { BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export default class GatewayEntityMeta extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public entity_id: number
    public name: string
    public value: string

    public gatewayEntity?: GatewayEntity
}
