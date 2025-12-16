import { Kysely } from 'kysely'

const table = 'zpayments__products'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('name', 'varchar(255)', col => col.notNull())
        .addColumn('description', 'text', col => col)
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('currency', 'varchar(10)', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

