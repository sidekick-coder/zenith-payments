import { Kysely } from 'kysely'

const table = 'zpayments__gateway_entity_metas'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('entity_id', 'integer', col => col.notNull()
            .references('zpayments__gateway_entities.id')
            .onDelete('cascade')
        )
        .addColumn('name', 'varchar(255)', col => col.notNull())
        .addColumn('value', 'text', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .addUniqueConstraint('gateway_entity_meta_name', ['entity_id', 'name', 'deleted_at'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

