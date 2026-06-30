import orderItemRepository from "#zpayments/server/facades/orderItemRepository.ts";
import orderRepository from "#zpayments/server/facades/orderRepository.ts";
import productPriceRepository from "#zpayments/server/facades/productPriceRepository.ts";
import productRepository from "#zpayments/server/facades/productRepository.ts";
import type { OrderItemSchema } from "#zpayments/shared/schemas/orderItemSchema.ts";
import { defineHandler } from "@sidekick-coder/zenith-kit/server";
import { BaseException, validator } from "@sidekick-coder/zenith-kit/shared";

export default defineHandler(async (ctx) => {
    const payload = validator.validate(ctx.body, v => v.object({
        user_id: v.number(),
        items: v.array(v.object({
            price_id: v.number(),
            quantity: v.number(),
        })),
    }))

    ctx.acl.authorize('create', 'Order', payload)

    const items: Omit<OrderItemSchema, 'id' | 'order_id'>[] = []

    const prices = await productPriceRepository.findMany({
        id: payload.items.map(i => i.price_id),
    })

    const sameCurrency = new Set(prices.map(p => p.currency))

    if (sameCurrency.size > 1) {
        throw new BaseException('All products must have the same currency', 400)
    }

    for (const item of payload.items) {
        const price = prices.find(p => p.id === item.price_id)

        if (!price) {
            throw new BaseException(`Price with ID ${item.price_id} not found`, 404)
        }

        items.push({
            item_type: 'product',
            item_id: String(price.product_id),
            quantity: item.quantity,
            unit_amount: price.amount,
        })
    }

    if (items.length !== payload.items.length) {
        throw new BaseException('Some products prices were not found', 404)
    }

    const amount = items.reduce((sum, item) => sum + (item.unit_amount * item.quantity), 0)
    const currency = prices[0].currency

    const order = await orderRepository.create({
        user_id: payload.user_id,
        amount: amount,
        currency: currency,
        status: 'pending',
    })

    const orderItems = await orderItemRepository.createMany(items.map(item => ({
        ...item,
        order_id: order.id,
    })))

    return {
        order,
        orderItems,
    }
})
