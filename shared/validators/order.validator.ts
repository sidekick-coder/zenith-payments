import type { InferOutput } from 'valibot'
import validator from '#shared/services/validator.service.ts'
import * as url from '#shared/validators/url.validator.ts'
import * as pagination from '#shared/validators/pagination.validator.ts'

export type OrderQuery = InferOutput<typeof query>
export type OrderIndex = InferOutput<typeof index>
export type OrderInclude = InferOutput<typeof include>

export const include = validator.create(v =>  v.pipe(
    url.array(),
    v.array(v.picklist(['user']))
))

export const query = validator.create(v => v.object({
    user_id: v.optional(v.number()),
    purpose: v.optional(v.string()),
    status: v.optional(v.string()),
}))

export const index = validator.create(v => v.intersect([
    pagination.schema,
    query,
    validator.create(v => v.object({
        include: v.optional(include)
    }))
]))