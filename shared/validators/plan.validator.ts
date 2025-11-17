import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.nullish(v.string()),
    amount: v.number(),
    status: v.optional(v.picklist(['active', 'inactive', 'archived']))
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))