import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    name: v.string(),
    description: v.nullish(v.string()),
    amount: v.number(),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))
