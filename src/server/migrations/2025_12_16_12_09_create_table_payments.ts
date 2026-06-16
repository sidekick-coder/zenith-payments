import { Kysely } from 'kysely'

const table = 'zpayments__payments'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('order_id', 'integer', col => col.notNull()
            .references('zpayments__orders.id')
            .onDelete('cascade')
        )
        .addColumn('gateway_id', 'varchar(128)', col => col.notNull())
        .addColumn('status', 'varchar(50)', col => col.notNull())
        .addColumn('amount', 'integer', col => col.notNull())
        .addTimestampColumns()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
