import type GatewayEntity from './gatewayEntity.entity.ts'

import { UserEntity as User, BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export default class GatewayEntityAssignment extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public entity_id: number
    public assignable_id: string
    public assignable_type: string

    public gateway_entity?: GatewayEntity
}
