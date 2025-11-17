import { Kysely } from 'kysely'

const table = 'zpayments__gateway_entities'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('gateway', 'varchar(100)', col => col.notNull())
        .addColumn('entity_id', 'varchar(255)', col => col.notNull())
        .addColumn('entity_type', 'varchar(100)', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .addUniqueConstraint('gateway_entity_unique', ['gateway', 'entity_id', 'entity_type', 'deleted_at'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

