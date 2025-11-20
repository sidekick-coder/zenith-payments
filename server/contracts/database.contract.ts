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
    plan_id: number
    amount: number
    status: 'pending' | 'active' | 'inactive' | 'cancelled' | 'suspended'
}

export interface PlanTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    name: string
    description: string | null
    amount: number
    status: 'active' | 'inactive' | 'archived'
}

export interface GatewayEntityTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    gateway: string
    external_id: string
    name: string
    description: string | null
    type: string
    raw: string
}

export interface GatewayEntityMetaTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    entity_id: number
    name: string
    value: string
}

export interface GatewayEntityAssignmentTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    entity_id: number
    assignable_id: string
    assignable_type: string
}

declare module '#server/contracts/database.contract' {
    export interface Database  {
        zpayments__billings: BillingTable
        zpayments__subscriptions: SubscriptionTable
        zpayments__plans: PlanTable
        zpayments__gateway_entities: GatewayEntityTable
        zpayments__gateway_entity_metas: GatewayEntityMetaTable
        zpayments__gateway_entity_assignments: GatewayEntityAssignmentTable
    }
}
