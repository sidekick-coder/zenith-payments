import GatewayEntity from './gatewayEntity.entity.ts'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/plan.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class Plan extends composeWith(
    Base,
    Model('zpayments__plans')
) {
    public async findEntityByGatewayId(gatewayId: string) {
        return await GatewayEntity.findOneOrFail({
            query: qb => qb
                .selectAll()
                .where('gateway', '=', gatewayId)
                .where('id', 'in', (eb) =>
                    eb.selectFrom('zpayments__gateway_entity_assignments')
                        .select('entity_id')
                        .where('assignable_id', '=', String(this.id))
                )
        })
    }
}