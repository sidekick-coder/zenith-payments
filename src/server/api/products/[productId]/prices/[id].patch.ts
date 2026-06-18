import productPriceRepository from "#zpayments/server/facades/productPriceRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import { productPriceSchema } from "#zpayments/shared/schemas/productPriceSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const productId = validator.validate(ctx.params.productId, v => v.extras.url.number())
    const priceId = validator.validate(ctx.params.id, v => v.extras.url.number())
    const payload = validator.validate(ctx.body, productPriceSchema.update())

    const product = await productRepository.findByIdOrFail(productId)

    ctx.acl.authorize('update', 'Product', product)

    const price = await productPriceRepository.findByIdOrFail(priceId)

    await productPriceRepository.updateById(price.id, payload)

    return { success: true }
})
