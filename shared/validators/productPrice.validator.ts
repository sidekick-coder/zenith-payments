import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    amount: v.number(),
    currency: v.string(),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))
