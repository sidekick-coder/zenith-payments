import type { InferOutput } from 'valibot'
import validator from '#shared/services/validator.service.ts'
import * as metadata from '#shared/validators/metadata.validator.ts'
import * as url from '#shared/validators/url.validator.ts'
import * as pagination from '#shared/validators/pagination.validator.ts'

export type ProductWhere = InferOutput<typeof where>

export const include = validator.create(v =>  v.pipe(
    url.array(),
    v.array(v.picklist(['prices']))
))

export const where = validator.create(v => v.object({
    search: v.nullish(v.string()),
    metas: v.optional(v.record(v.string(), metadata.filter)),
}))

export const order = pagination.order({
    defaultOrder: 'created_at',
    defaultDirection: 'desc',
    allowed: ['created_at', 'updated_at'] as const
})

export const index = validator.create(v => v.intersect([
    pagination.base,
    order,
    where,
    validator.create(v => v.object({ include: v.optional(include) }))
]))


export const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.nullish(v.string()),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))
