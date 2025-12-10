import { sql } from 'kysely'
import User from '#server/entities/user.entity.ts'
import HasManythroughService from '#server/services/hasManythrough.service.ts'

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
}