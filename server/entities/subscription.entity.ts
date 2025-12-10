import { sql } from 'kysely'
import GatewayEntityAssignment from './gatewayEntityAssignment.entity.ts'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/subscription.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import db from '#server/facades/db.facade.ts'
import HasManythroughService from '#server/services/hasManythrough.service.ts'

export default class Subscription extends composeWith(
    Base,
    Model('zpayments__subscriptions')
) {
    public get entities(){
        return new HasManythroughService({
            id: String(this.id),
            pivotTable: 'zpayments__gateway_entity_assignments',
            pivoForeignKey: 'assignable_id',
            table: 'zpayments__gateway_entities',
            tableForeignKey: 'id',
        })
    }
        
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

    public static findByGatewayEntityId(entityId: number) {
        const query = db.selectFrom('zpayments__subscriptions as s')
            .selectAll('s')
            .innerJoin('zpayments__gateway_entity_assignments as gea', join => 
                join.onRef('gea.assignable_id', '=', sql`CAST(s.id AS VARCHAR)`)
            )
            .where('gea.entity_id', '=', entityId)
            .where('gea.assignable_type', '=', 'subscription')

        return this.findOne({
            query: () => query as any
        })
    }
}