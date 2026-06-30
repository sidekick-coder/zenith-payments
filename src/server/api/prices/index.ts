import productPriceRepository from "#zpayments/server/facades/productPriceRepository.ts";
import { loadProduct } from "#zpayments/server/loaders/loadProduct.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const payload = validator.validate(ctx.query, v => v.intersect([
        v.extras.pagination(),
        v.object({
            product_id: v.optional(v.number()),
            search: v.optional(v.string()),
            with: v.optional(v.extras.array(v.string())),
        })
    ]))

    ctx.acl.authorize('list', 'ProductPrice', payload)

    const pagination = await productPriceRepository.paginate(payload)

    if (payload.with?.includes('product')) {
        await loadProduct(pagination.items)
    }

    return pagination
})

