import { Kysely } from 'kysely'

const table = 'zpayments__product_prices'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('product_id', 'integer', col => col.notNull()
            .references('zpayments__products.id')
            .onDelete('cascade')
        )
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('currency', 'varchar(3)', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
