import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.alterTable('zpayments__orders')
        .addColumn('deleted_at', 'timestamp')
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.alterTable('zpayments__orders')
        .dropColumn('deleted_at')
        .execute()
}
