import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    user_id: v.number(),
    plan_id: v.number(),
    amount: v.optional(v.number()),
}))

export const create = schema

export const update = validator.create(v => v.partial(v.omit(schema, ['user_id', 'plan_id'])))