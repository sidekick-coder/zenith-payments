import { Kysely } from 'kysely'

const table = 'zpayments__order_items'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('order_id', 'integer', col => col.notNull()
            .references('zpayments__orders.id')
            .onDelete('cascade')
        )
        .addColumn('product_id', 'integer', col => col
            .references('zpayments__products.id')
            .onDelete('set null')
        )
        .addColumn('price_id', 'integer', col => col
            .references('zpayments__product_prices.id')
            .onDelete('set null')
        )
        .addColumn('subscription_id', 'integer', col => col
            .references('zpayments__subscriptions.id')
            .onDelete('set null')
        )
        .addColumn('quantity', 'integer', col => col.notNull().defaultTo(1))
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('currency', 'varchar(3)', col => col.notNull())
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
