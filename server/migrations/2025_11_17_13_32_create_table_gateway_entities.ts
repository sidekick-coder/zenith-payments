import { Kysely } from 'kysely'

const table = 'zpayments__gateway_entities'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('gateway', 'varchar(100)', col => col.notNull())
        .addColumn('external_id', 'varchar(255)', col => col.notNull())
        .addColumn('name', 'varchar(255)', col => col.notNull())
        .addColumn('description', 'text')
        .addColumn('type', 'varchar(100)', col => col.notNull())
        .addColumn('raw', 'text', col => col.notNull().defaultTo('{}'))
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .addUniqueConstraint('gateway_entity_unique', ['gateway', 'external_id', 'type', 'deleted_at'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

