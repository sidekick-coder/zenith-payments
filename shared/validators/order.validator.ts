import type { InferOutput } from 'valibot'
import validator from '#shared/services/validator.service.ts'
import * as url from '#shared/validators/url.validator.ts'
import * as pagination from '#shared/validators/pagination.validator.ts'

export type OrderWhere = InferOutput<typeof where>
export type OrderIndex = InferOutput<typeof index>
export type OrderInclude = InferOutput<typeof include>

export const include = validator.create(v =>  v.pipe(
    url.array(),
    v.array(v.picklist(['user']))
))

export const where = validator.create(v => v.object({
    user_id: v.optional(v.pipe(url.array(), v.transform(a => a.map(Number)), v.array(v.number()))),
    purpose: v.optional(v.string()),
    status: v.optional(v.string()),
}))

export const order = pagination.order({
    defaultOrder: 'created_at',
    defaultDirection: 'desc',
    allowed: [
        'id',
        'user_id',
        'amount',
        'status',
        'created_at', 
        'updated_at'
    ] as const
})

export const index = validator.create(v => v.intersect([
    pagination.base,
    order,
    where,
    validator.create(v => v.object({ include: v.optional(include) }))
]))

export const userIndex = validator.create(v => v.intersect([
    pagination.base,
    order,
    v.omit(where, ['user_id']),
    validator.create(v => v.object({ include: v.optional(include) }))
]))