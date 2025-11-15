import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    user_id: v.number(),
    amount: v.number(),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))