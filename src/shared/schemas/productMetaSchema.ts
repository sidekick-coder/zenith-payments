import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type ProductMetaSchema = ValidatorResult<ReturnType<typeof productMetaSchema>>

export interface Meta {
    name: string
    value: string
}

export function productMetaSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        product_id: v.number(),
        name: v.string(),
        value: v.string(),
        created_at: v.string(),
        updated_at: v.string(),
        deleted_at: v.nullish(v.string())
    }))
}
