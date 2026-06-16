import { BaseEntityMixin as BaseEntity, SoftDeleteMixin as SoftDelete, TimestampMixin as Timestamp, compose } from '@sidekick-coder/zenith-kit/shared'

export default class ProductMeta extends compose(BaseEntity, Timestamp, SoftDelete) {
    public id: number
    public product_id: number
    public name: string
    public value: string | null
}
