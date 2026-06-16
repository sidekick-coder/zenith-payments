import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/payment.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
// import HasManythroughService from '#server/services/hasManythrough.service.ts'
import type { ExpressionBuilder } from '@sidekick-coder/zenith-kit/server'
import type { PaymentWhere } from '#zpayments/shared/validators/payment.validator.ts'

export default class Payment extends composeWith(
    Base,
    Model('zpayments__payments'),
) {
    // public get $entities(){
    //     return new HasManythroughService({
    //         sourceId: String(this.id),
    //
    //         targetTable: 'zpayments__gateway_entities',
    //         targetPrimaryKey: 'id',
    //
    //         pivotTable: 'zpayments__gateway_entity_assignments',
    //         pivotTargetKey: 'entity_id',
    //         pivotSourceKey: 'assignable_id',
    //
    //         attachPayload: {
    //             assignable_type: 'payment'
    //         }
    //     })
    // }

    public static where(eb: ExpressionBuilder<'zpayments__payments'>, payload: PaymentWhere) { 
        const and = []
            
        if (payload.user_id) {
            and.push(eb('order_id', 'in', eb2 => eb2.selectFrom('zpayments__orders')
                .where('user_id', 'in', payload.user_id!)
                .select('id')
            ))
        }
    
        return eb.and(and)
    }
}
