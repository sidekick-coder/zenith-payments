import type { InferOutput } from 'valibot'
import { validator } from '@sidekick-coder/zenith-kit/shared'

const url = validator.v.extras.url
const pagination = validator.v.extras.pagination 


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

export const index = validator.create(v => v.intersect([
    pagination.base(),
    where,
    validator.create(v => v.object({ include: v.optional(include) }))
]))

export const userIndex = validator.create(v => v.intersect([
    pagination.base(),
    v.omit(where, ['user_id']),
    validator.create(v => v.object({ include: v.optional(include) }))
]))
