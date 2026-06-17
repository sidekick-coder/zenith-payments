import productRepository from "#zpayments/server/facades/productRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler((ctx) => {
    const payload = validator.validate(ctx.query, v => v.extras.pagination())

    ctx.acl.authorize('list', 'Product', payload)

    return productRepository.paginate(payload)
})
