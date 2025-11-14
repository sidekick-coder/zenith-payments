import { Kysely } from 'kysely'

const table = 'zpayments__transactions'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('user_id', 'integer', col => col.notNull()
            .references('users.id')
            .onDelete('cascade')
        )
        .addColumn('gateway', 'varchar(255)', col => col.notNull())
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('status', 'varchar(50)', col => col.notNull().defaultTo('pending'))
        .addColumn('external_id', 'varchar(255)', col => col.notNull().unique())
        .addColumn('external_data', 'text')
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

