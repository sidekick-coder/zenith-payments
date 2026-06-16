import type OrderItem from './orderItem.entity.ts'
import { UserEntity as User, BaseEntityMixin as BaseEntity, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export const STATUS = [
    {
        id: 'pending' as const,
        label: 'Pending',
        color: 'var(--color-yellow-500)',
    },
    {
        id: 'completed' as const,
        label: 'Completed',
        color: 'var(--color-green-500)',
    },
    {
        id: 'failed' as const,
        label: 'Failed',
        color: 'var(--color-red-500)',
    }
]

export type OrderStatus = typeof STATUS[number]['id']

export default class Order extends compose(BaseEntity, Timestamp) {
    public static STATUS = STATUS

    public id: number
    public user_id: number
    public purpose: string
    public status: OrderStatus
    public amount: number
    public currency: string

    public user?: User
    public items?: OrderItem[]

    public get statusLabel() {
        const status = Order.STATUS.find(s => s.id === this.status)
        return status ? status.label : this.status
    }

    public get statusColor() {
        const status = Order.STATUS.find(s => s.id === this.status)

        return status ? status.color : 'var(--color-gray-500)'
    }
}
