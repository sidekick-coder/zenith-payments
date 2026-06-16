import type { InferOutput } from 'valibot'
import { validator } from '@sidekick-coder/zenith-kit/shared'

export type PaymentWhere = InferOutput<typeof where>
export type PaymentIndex = InferOutput<typeof index>
export type PaymentInclude = InferOutput<typeof include>

const pagination = validator.v.extras.pagination
const url = validator.v.extras.url

export const include = validator.create(v =>  v.pipe(
    v.extras.url.array(),
    v.array(v.picklist(['user']))
))

export const where = validator.create(v => v.object({
    user_id: v.optional(v.pipe(v.extras.url.array(), v.transform(a => a.map(Number)), v.array(v.number()))),
    status: v.optional(v.string()),
}))


export const index = validator.create(v => v.intersect([
    pagination.base(),
    where,
    validator.create(v => v.object({
        include: v.optional(include),
        start_date: v.optional(url.datetime()),
        end_date: v.optional(url.datetime())
    }))
]))

export const userIndex = validator.create(v => v.intersect([
    pagination.base(),
    v.omit(where, ['user_id']),
    validator.create(v => v.object({ include: v.optional(include) }))
]))
