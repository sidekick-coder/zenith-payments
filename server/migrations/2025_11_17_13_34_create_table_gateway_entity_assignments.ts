import { Kysely } from 'kysely'

const table = 'zpayments__gateway_entity_assignments'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('entity_id', 'integer', col => col.notNull()
            .references('zpayments__gateway_entities.id')
            .onDelete('cascade')
        )
        .addColumn('assignable_id', 'varchar(255)', col => col.notNull())
        .addColumn('assignable_type', 'varchar(100)', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .addUniqueConstraint('gateway_entity_assignment_unique', ['entity_id', 'assignable_id', 'assignable_type', 'deleted_at'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
