import { sql } from 'kysely'
import db from '#server/facades/db.facade.ts'
import { undeleted } from '#server/queries/index.ts'
import { UserEntity } from '@sidekick-coder/zenith-kit/shared'

export default class Customer extends UserEntity {

    public static findByGatewayEntityId(entityId: number) {
        throw new Error('Method not implemented.')
        // const query = db.selectFrom('users as u')
        //     .selectAll('u')
        //     .innerJoin('zpayments__gateway_entity_assignments as gea', join => 
        //         join.onRef('gea.assignable_id', '=', sql`CAST(u.id AS VARCHAR)`)
        //     )
        //     .where('gea.entity_id', '=', entityId)
        //     .where('gea.assignable_type', '=', 'user')
        //     .where(undeleted.column('u.deleted_at'))
        //
        // return this.findOne({
        //     query: () => query as any
        // })
    }
}
