import type User from '#shared/entities/user.entity.ts'

import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export const STATUS = [
    {
        id: 'pending',
        label: $t('Pending'),
        color: 'var(--color-yellow-500)',
    },
    {
        id: 'approved',
        label: $t('Approved'),
        color: 'var(--color-green-500)',
    },
    {
        id: 'failed',
        label: $t('Failed'),
        color: 'var(--color-red-500)',
    },
    {
        id: 'refunded',
        label: $t('Refunded'),
        color: 'var(--color-blue-500)',
    }
]

export default class Billing extends compose(BaseEntity, Timestamp, SoftDelete) {
    public static STATUS = STATUS

    public id: number
    public user_id: number
    public purpose: string
    public amount: number
    public status: 'pending' | 'approved' | 'failed' | 'refunded'

    public user?: User

    public get statusLabel() {
        const status = Billing.STATUS.find(s => s.id === this.status)
        return status ? status.label : this.status
    }

    public get statusColor() {
        const status = Billing.STATUS.find(s => s.id === this.status)

        return status ? status.color : 'var(--color-gray-500)'
    }
}