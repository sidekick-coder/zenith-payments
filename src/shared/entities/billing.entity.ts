import { UserEntity as User, BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export const STATUS = [
    {
        id: 'pending',
        label: 'Pending',
        color: 'var(--color-yellow-500)',
    },
    {
        id: 'approved',
        label: 'Approved',
        color: 'var(--color-green-500)',
    },
    {
        id: 'failed',
        label: 'Failed',
        color: 'var(--color-red-500)',
    },
    {
        id: 'refunded',
        label: 'Refunded',
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
