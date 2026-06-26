import orderRepository from "#zpayments/server/facades/orderRepository.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const id = validator.validate(ctx.params.id, v => v.extras.url.number())

    const order = await orderRepository.findByIdOrFail(id)

    ctx.acl.authorize('read', 'Order', order)

    return order
})
