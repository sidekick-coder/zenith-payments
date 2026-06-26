import orderRepository from "#zpayments/server/facades/orderRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler((ctx) => {
    const payload = validator.validate(ctx.query, v => v.extras.pagination())

    ctx.acl.authorize('list', 'Order', payload)

    return orderRepository.paginate(payload)
})
