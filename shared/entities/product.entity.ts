import { BaseEntity, SoftDelete, Timestamp } from '#shared/mixins/index.ts'
import { compose } from '#shared/utils/compose.ts'

export default class Product extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public name: string
    public description: string | null
    public amount: number
    public currency: string
}
