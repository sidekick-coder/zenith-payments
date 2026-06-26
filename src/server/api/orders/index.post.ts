import orderRepository from "#zpayments/server/facades/orderRepository.ts";
import { orderSchema } from "#zpayments/shared/schemas/orderSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler((ctx) => {
    const payload = validator.validate(ctx.body, orderSchema.create)

    ctx.acl.authorize('create', 'Order', payload)

    return orderRepository.create(payload)
})
