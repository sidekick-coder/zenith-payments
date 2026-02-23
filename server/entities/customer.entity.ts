import { sql } from 'kysely'
import User from '#server/entities/user.entity.ts'
import HasManythroughService from '#server/services/hasManythrough.service.ts'
import db from '#server/facades/db.facade.ts'
import { undeleted } from '#server/queries/index.ts'

export default class Customer extends User {
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
        const query = db.selectFrom('users as u')
            .selectAll('u')
            .innerJoin('zpayments__gateway_entity_assignments as gea', join => 
                join.onRef('gea.assignable_id', '=', sql`CAST(u.id AS VARCHAR)`)
            )
            .where('gea.entity_id', '=', entityId)
            .where('gea.assignable_type', '=', 'user')
            .where(undeleted.column('u.deleted_at'))
    
        return this.findOne({
            query: () => query as any
        })
    }
}