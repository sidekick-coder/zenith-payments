import { Kysely } from 'kysely'

const table = 'zpayments__product_metas'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('product_id', 'integer', col => col.notNull()
            .references('zpayments__products.id')
            .onDelete('cascade')
        )
        .addColumn('name', 'varchar(255)', col => col.notNull())
        .addColumn('value', 'text', col => col)
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

