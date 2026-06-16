import { BaseEntityMixin as BaseEntity, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export const STATUS = [
    {
        id: 'pending' as const,
        label: 'Pending',
        color: 'var(--color-yellow-500)',
    },
    {
        id: 'approved' as const,
        label: 'Approved',
        color: 'var(--color-green-500)',
    },
    {
        id: 'failed' as const,
        label: 'Failed',
        color: 'var(--color-red-500)',
    },
    {
        id: 'refunded' as const,
        label: 'Refunded',
        color: 'var(--color-purple-500)',
    }
]

export type PaymentStatus = typeof STATUS[number]['id']

export default class Payment extends compose(BaseEntity, Timestamp) {
    public static STATUS = STATUS

    public id: number
    public order_id: number
    public gateway_id: string
    public status: PaymentStatus
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
