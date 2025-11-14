import type { Generated } from 'kysely'
import type { SoftDeleteTable, TimestampTable } from '#server/queries/index.ts'

export interface TransactionTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    user_id: number
    gateway: string
    amount: number
    status: 'pending' | 'completed' | 'failed' | 'refunded'
    external_id: string
    external_data: string | null
}

declare module '#server/contracts/database.contract' {
    export interface Database  {
        zpayments__transactions: TransactionTable
    }
}
