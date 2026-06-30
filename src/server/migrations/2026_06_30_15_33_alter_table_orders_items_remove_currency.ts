import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.alterTable('zpayments__order_items')
        .dropColumn('currency')
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.alterTable('zpayments__order_items')
        .addColumn('currency', 'varchar(3)', col => col.notNull())
        .execute()
}
