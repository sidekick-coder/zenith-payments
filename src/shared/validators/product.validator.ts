import type { InferOutput } from 'valibot'
import { validator } from '@sidekick-coder/zenith-kit/shared'

const url = validator.v.extras.url
const pagination = validator.v.extras.pagination 

export type ProductWhere = InferOutput<typeof where>

export const include = validator.create(v =>  v.pipe(
    url.array(),
    v.array(v.picklist(['prices']))
))

export const where = validator.create(v => v.object({
    search: v.nullish(v.string()),
    metas: v.optional(v.record(v.string(), v.any())),
}))


export const index = validator.create(v => v.intersect([
    pagination.base(),
    where,
    validator.create(v => v.object({ include: v.optional(include) }))
]))


export const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.nullish(v.string()),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))
