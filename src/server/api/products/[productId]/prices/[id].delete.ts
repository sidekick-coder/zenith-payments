import productPriceRepository from "#zpayments/server/facades/productPriceRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const productId = validator.validate(ctx.params.productId, v => v.extras.url.number())
    const priceId = validator.validate(ctx.params.id, v => v.extras.url.number())

    const product = await productRepository.findByIdOrFail(productId)

    ctx.acl.authorize('update', 'Product', product)

    const price = await productPriceRepository.findByIdOrFail(priceId)

    await productPriceRepository.softDeleteById(price.id)

    return { success: true }
})
