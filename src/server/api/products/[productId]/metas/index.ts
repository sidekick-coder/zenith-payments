import productMetaRepository from "#zpayments/server/facades/productMetaRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { unflatten, validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const id = validator.validate(ctx.params.productId, v => v.extras.url.number())

    const product = await productRepository.findByIdOrFail(id)

    ctx.acl.authorize('read', 'Product', product)

    const metas = await productMetaRepository.findMany({ product_id: product.id })

    const record = Object.fromEntries(metas.map(meta => [meta.name, meta.value]))

    return unflatten(record)
})
