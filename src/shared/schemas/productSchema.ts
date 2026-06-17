import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type ProductSchema = ValidatorResult<ReturnType<typeof productSchema>>

export function productSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        name: v.string(),
        description: v.nullish(v.string()),
        created_at: v.string(),
        updated_at: v.string(),
        deleted_at: v.nullish(v.string())
    }))
}

productSchema.create = () => validator.create(v => v.pick(productSchema(), ['name', 'description']))
productSchema.update = () => validator.create(v => v.partial(productSchema()))
