import { Kysely } from 'kysely'

const table = 'zpayments__order_items'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('order_id', 'integer', col => col.notNull()
            .references('zpayments__orders.id')
            .onDelete('cascade')
        )
        .addColumn('item_type', 'varchar(100)', col => col.notNull())
        .addColumn('item_id', 'varchar(128)', col => col.notNull())
        .addColumn('quantity', 'integer', col => col.notNull().defaultTo(1))
        .addColumn('unit_amount', 'integer', col => col.notNull())
        .addColumn('currency', 'varchar(3)', col => col.notNull())
        .addUniqueConstraint('order_item_unique', ['order_id', 'item_type', 'item_id'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
