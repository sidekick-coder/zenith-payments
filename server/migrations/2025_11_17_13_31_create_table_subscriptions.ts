import { Kysely } from 'kysely'

const table = 'zpayments__subscriptions'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addIdColumn()
        .addColumn('user_id', 'integer', col => col
            .references('users.id')
            .onDelete('cascade')
        )
        .addColumn('plan_id', 'integer', col => col
            .references('zpayments__plans.id')
            .onDelete('cascade')
        )
        .addColumn('amount', 'integer', col => col.notNull())
        .addColumn('status', 'varchar(50)', col => col.notNull())
        .addTimestampColumns()
        .addSoftDeleteColumn()
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

