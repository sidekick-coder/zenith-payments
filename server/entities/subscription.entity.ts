import GatewayEntityAssignment from './gatewayEntityAssignment.entity.ts'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/subscription.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Subscription extends composeWith(
    Base,
    Model('zpayments__subscriptions')
) {
    public async assignEntity(entityId: number) {
        await GatewayEntityAssignment.firstOrCreate({
            select: qb => qb
                .where('assignable_id', '=', String(this.id))
                .where('entity_id', '=', entityId),
            values: {
                assignable_type: 'subscription',
                assignable_id: String(this.id),
                entity_id: entityId,
            }
        })
    }
}