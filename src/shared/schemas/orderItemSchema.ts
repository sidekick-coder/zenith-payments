
import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type OrderItemSchema = ValidatorResult<ReturnType<typeof orderItemSchema>>


export function orderItemSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        order_id: v.number(),
        item_type: v.string(),
        item_id: v.string(),
        quantity: v.number(),
        unit_amount: v.number(),
    }))
}
