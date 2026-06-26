import orderRepository from "#zpayments/server/facades/orderRepository.ts";
import { orderSchema } from "#zpayments/shared/schemas/orderSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const id = validator.validate(ctx.params.id, v => v.extras.url.number())
    const payload = validator.validate(ctx.body, orderSchema.update)

    const order = await orderRepository.findByIdOrFail(id)

    ctx.acl.authorize('update', 'Order', order)

    return orderRepository.updateById(id, payload)
})
