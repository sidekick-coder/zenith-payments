import type { Generated } from 'kysely'
import type { SoftDeleteTable, TimestampTable } from '#server/queries/index.ts'

export interface BillingTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    user_id: number
    amount: number
    purpose: string
    status: 'pending' | 'approved' | 'failed' | 'refunded'
}

export interface SubscriptionTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    user_id: number
    amount: number
    status: 'active' | 'inactive' | 'cancelled' | 'suspended'
}

export interface PlanTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    name: string
    description: string | null
    amount: number
    status: 'active' | 'inactive' | 'archived'
}

declare module '#server/contracts/database.contract' {
    export interface Database  {
        zpayments__billings: BillingTable
        zpayments__subscriptions: SubscriptionTable
        zpayments__plans: PlanTable
    }
}
