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
        id: 'succeeded',
        label: $t('Succeeded'),
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
        color: 'var(--color-purple-500)',
    }
]

export default class Payment extends compose(BaseEntity, Timestamp) {
    public static STATUS = STATUS

    public id: number
    public order_id: number
    public gateway_id: string
    public status: string
    public amount: number

    public get statusLabel() {
        const status = Payment.STATUS.find(s => s.id === this.status)
        return status ? status.label : this.status
    }

    public get statusColor() {
        const status = Payment.STATUS.find(s => s.id === this.status)

        return status ? status.color : 'var(--color-gray-500)'
    }
}
