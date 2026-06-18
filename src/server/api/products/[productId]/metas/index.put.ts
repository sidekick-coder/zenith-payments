import productMetaRepository from "#zpayments/server/facades/productMetaRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { flatten, validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const id = validator.validate(ctx.params.productId, v => v.extras.url.number())
    const payload = validator.validate(ctx.body, v => v.record(v.string(), v.string()))

    const product = await productRepository.findByIdOrFail(id)

    ctx.acl.authorize('update', 'Product', product)

    await productMetaRepository.deleteMany({ product_id: product.id })

    const metasFlatten = flatten(payload)

    const metas = Object.entries(metasFlatten).map(([name, value]) => ({
        product_id: product.id,
        name,
        value
    }))

    await productMetaRepository.createMany(metas)

    return payload
})
