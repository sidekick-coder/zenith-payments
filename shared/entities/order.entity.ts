import type User from '#shared/entities/user.entity.ts'

import { BaseEntity, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export const STATUS = [
    {
        id: 'pending',
        label: $t('Pending'),
        color: 'var(--color-yellow-500)',
    },
    {
        id: 'processing',
        label: $t('Processing'),
        color: 'var(--color-blue-500)',
    },
    {
        id: 'completed',
        label: $t('Completed'),
        color: 'var(--color-green-500)',
    },
    {
        id: 'cancelled',
        label: $t('Cancelled'),
        color: 'var(--color-red-500)',
    },
    {
        id: 'failed',
        label: $t('Failed'),
        color: 'var(--color-red-500)',
    }
]

export default class Order extends compose(BaseEntity, Timestamp) {
    public static STATUS = STATUS

    public id: number
    public user_id: number
    public purpose: string
    public status: string
    public amount: number
    public currency: string

    public user?: User

    public get statusLabel() {
        const status = Order.STATUS.find(s => s.id === this.status)
        return status ? status.label : this.status
    }

    public get statusColor() {
        const status = Order.STATUS.find(s => s.id === this.status)

        return status ? status.color : 'var(--color-gray-500)'
    }
}
