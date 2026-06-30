import { validator } from "@sidekick-coder/zenith-kit/shared";
import type { ValidatorResult } from "@sidekick-coder/zenith-kit/shared";

export type OrderSchema = ValidatorResult<ReturnType<typeof orderSchema>>
export type OrderCreateSchema = ValidatorResult<ReturnType<typeof orderCreateSchema>>

export const ORDER_STATUS = [
    {
        id: 'draft' as const,
        label: $t('Draft'),
    },
    {
        id: 'pending' as const,
        label: $t('Pending'),
    },
    {
        id: 'completed' as const,
        label: $t('Completed'),
    },
    {
        id: 'failed' as const,
        label: $t('Failed'),
    },
    {
        id: 'cancelled' as const,
        label: $t('Cancelled'),
    },
]

export function orderSchema() {
    return validator.create(v => v.object({
        id: v.number(),
        user_id: v.number(),
        purpose: v.string(),
        status: v.picklist(ORDER_STATUS.map(s => s.id)),
        amount: v.number(),
        currency: v.string(),
        created_at: v.string(),
        updated_at: v.string(),
        deleted_at: v.nullish(v.string())
    }))
}

const orderCreateSchema = () => {
  return validator.create(v => v.object({
    user_id: v.number(),
    items: v.array(v.looseObject({
        price_id: v.number(),
        unit_amount: v.number(),
        quantity: v.number(),
        currency: v.string()
    })),
}))
}

orderSchema.create = orderCreateSchema

