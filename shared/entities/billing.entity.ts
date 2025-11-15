import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class GatewayConfig extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public user_id: number
    public amount: number
    public status: 'pending' | 'completed' | 'failed' | 'refunded'
}