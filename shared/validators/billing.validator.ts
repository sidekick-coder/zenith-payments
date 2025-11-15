import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    user_id: v.number(),
    amount: v.number(),
    status: v.union([
        v.literal('pending'),
        v.literal('completed'),
        v.literal('failed'),
        v.literal('refunded'),
    ]),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))