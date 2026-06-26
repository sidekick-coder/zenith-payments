import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type OrderSchema = ValidatorResult<ReturnType<typeof orderSchema>>

export function orderSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        user_id: v.number(),
        purpose: v.string(),
        status: v.string(),
        amount: v.number(),
        currency: v.string(),
        created_at: v.string(),
        updated_at: v.string(),
        deleted_at: v.nullish(v.string())
    }))
}

orderSchema.create = () => validator.create(v => v.pick(orderSchema(), ['user_id', 'purpose', 'status', 'amount', 'currency']))
orderSchema.update = () => validator.create(v => v.partial(orderSchema()))
