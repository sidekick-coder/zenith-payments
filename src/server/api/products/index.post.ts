import productRepository from "#zpayments/server/facades/productRepository.ts";
import { productSchema } from "#zpayments/shared/schemas/productSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler((ctx) => {
    const payload = validator.validate(ctx.body, productSchema.create)

    ctx.acl.authorize('create', 'Product', payload)

    return productRepository.create(payload)
})
