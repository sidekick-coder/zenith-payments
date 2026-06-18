import productPriceRepository from "#zpayments/server/facades/productPriceRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import { productPriceSchema } from "#zpayments/shared/schemas/productPriceSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const id = validator.validate(ctx.params.productId, v => v.extras.url.number())

    ctx.body.product_id = id

    const payload = validator.validate(ctx.body, productPriceSchema.create())

    const product = await productRepository.findByIdOrFail(id)

    ctx.acl.authorize('update', 'Product', product)

    return productPriceRepository.create(payload)
})
