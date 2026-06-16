import validator from '#shared/services/validator.service.ts'

export const schema = validator.create(v => v.object({
    id: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    gateway: v.string(),
    config: v.optional(v.record(v.string(), v.any())),
}))

export const create = schema

export const update = validator.create(v => v.partial(schema))