import { Kysely } from 'kysely'

const table = 'zpayments__orders'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('user_id', 'integer', col => col.notNull())
        .addColumn('purpose', 'varchar(255)', col => col.notNull())
        .addColumn('status', 'varchar(50)', col => col.notNull())
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('currency', 'varchar(5)', col => col.notNull())
        .addTimestampColumns()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}
