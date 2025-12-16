import type { Generated } from 'kysely'
import type { SoftDeleteTable, TimestampTable } from '#server/queries/index.ts'

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

export interface ProductTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    name: string
    description: string | null
}

export interface ProductMetaTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    product_id: number
    name: string
    value: string | null
}

export interface ProductPriceTable extends TimestampTable, SoftDeleteTable {
    id: Generated<number>
    product_id: number
    amount: number
    currency: string
}

export interface OrderTable extends TimestampTable {
    id: Generated<number>
    user_id: number
    purpose: string
    status: string
    amount: number
    currency: string
}

export interface OrderItemTable {
    id: Generated<number>
    order_id: number
    product_id: number | null
    price_id: number | null
    subscription_id: number | null
    quantity: number
    amount: number
    currency: string
}

export interface PaymentTable extends TimestampTable {
    id: Generated<number>
    order_id: number
    gateway_id: string
    status: string
    amount: number
}

declare module '#server/contracts/database.contract' {
    export interface Database  {
        zpayments__gateway_entities: GatewayEntityTable
        zpayments__gateway_entity_metas: GatewayEntityMetaTable
        zpayments__gateway_entity_assignments: GatewayEntityAssignmentTable

        zpayments__products: ProductTable
        zpayments__product_metas: ProductMetaTable
        zpayments__product_prices: ProductPriceTable

        zpayments__orders: OrderTable
        zpayments__order_items: OrderItemTable

        zpayments__payments: PaymentTable
    }
}
