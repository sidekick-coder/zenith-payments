import Billing from '#zpayments/server/entities/billing.entity.ts'

export default class BillingService {
    public async approve(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'approved'
        })        
    }

    public async fail(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'failed'
        })
    }

    public async refund(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'refunded'
        })
    }

    public async reopen(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'pending'
        })
    }

}