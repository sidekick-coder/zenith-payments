import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type ProductPriceSchema = ValidatorResult<ReturnType<typeof productPriceSchema>>

export function productPriceSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        product_id: v.number(),
        gateway_id: v.nullish(v.string()),
        country: v.nullish(v.string()),
        currency: v.string(),
        amount: v.number(),
        created_at: v.string(),
        updated_at: v.string(),
        deleted_at: v.nullish(v.string()),

        product: v.nullish(v.any())
    }))
}

productPriceSchema.create = () => validator.create(v => v.pick(productPriceSchema(), ['product_id', 'gateway_id', 'country', 'currency', 'amount']))

productPriceSchema.update = () => validator.create(v => v.partial(productPriceSchema.create()))
