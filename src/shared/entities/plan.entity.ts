
import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export const STATUS = [
    {
        id: 'active',
        label: $t('Active'),
        color: 'var(--color-green-500)',
    },
    {
        id: 'inactive',
        label: $t('Inactive'),
        color: 'var(--color-gray-500)',
    },
]

export default class Plan extends compose(BaseEntity, Timestamp, SoftDelete) {
    public static STATUS = STATUS

    public id: number
    public name: string
    public description: string | null
    public amount: number
    public status: 'active' | 'inactive' | 'archived'

    public get statusLabel() {
        const status = Plan.STATUS.find(s => s.id === this.status)
        return status ? status.label : this.status
    }

    public get statusColor() {
        const status = Plan.STATUS.find(s => s.id === this.status)

        return status ? status.color : 'var(--color-gray-500)'
    }
}