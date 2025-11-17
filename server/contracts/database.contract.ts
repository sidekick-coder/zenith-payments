import type { Generated } from 'kysely'
import type { SoftDeleteTable, TimestampTable } from '#server/queries/index.ts'

export interface BillingTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    user_id: number
    amount: number
    purpose: string
    status: 'pending' | 'approved' | 'failed' | 'refunded'
}

declare module '#server/contracts/database.contract' {
    export interface Database  {
        zpayments__billings: BillingTable
    }
}
