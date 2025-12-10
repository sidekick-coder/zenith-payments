import { sql } from 'kysely'
import GatewayEntityAssignment from './gatewayEntityAssignment.entity.ts'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/subscription.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import db from '#server/facades/db.facade.ts'
import HasManythroughService from '#server/services/hasManythrough.service.ts'
import { undeleted } from '#server/queries/softDelete.ts'

export default class Subscription extends composeWith(
    Base,
    Model('zpayments__subscriptions')
) {
    public get $entities(){
        return new HasManythroughService({
            sourceId: String(this.id),
            
            targetTable: 'zpayments__gateway_entities',
            targetPrimaryKey: 'id',

            pivotTable: 'zpayments__gateway_entity_assignments',
            pivotTargetKey: 'entity_id',
            pivotSourceKey: 'assignable_id',
        })
    }

    public static findByGatewayEntityId(entityId: number) {
        const query = db.selectFrom('zpayments__subscriptions as s')
            .selectAll('s')
            .innerJoin('zpayments__gateway_entity_assignments as gea', join => 
                join.onRef('gea.assignable_id', '=', sql`CAST(s.id AS VARCHAR)`)
            )
            .where('gea.entity_id', '=', entityId)
            .where('gea.assignable_type', '=', 'subscription')
            .where(undeleted.column('s.deleted_at'))

        return this.findOne({
            query: () => query as any
        })
    }
}