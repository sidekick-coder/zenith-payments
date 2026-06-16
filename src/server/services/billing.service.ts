import emmitter from '#server/facades/emmitter.facade.ts'
import logger from '#server/facades/logger.facade.ts'
import Billing from '#zpayments/server/entities/billing.entity.ts'

interface HandlerCallback {
    (billing: Billing): Promise<void> | void
}

export default class BillingService {
    public logger = logger.child({ label: 'billing' })

    public async approve(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'approved'
        })
        
        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:approved', updated)

        return updated
    }

    public async fail(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'failed'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:failed', updated)

        return updated
    }

    public async refund(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'refunded'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:refunded', updated)

        return updated
    }

    public async reopen(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'pending'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:reopened', updated)

        return updated
    }

    public onApproved(callback: HandlerCallback) {
        emmitter.on('zpayments:billing:approved', callback, {
            unique: true,
        })
    }

    public onFailed(callback: HandlerCallback) {
        emmitter.on('zpayments:billing:failed', callback, {
            unique: true,
        })
    }

    public onRefunded(callback: HandlerCallback) {
        emmitter.on('zpayments:billing:refunded', callback, {
            unique: true,
        })
    }

    public onReopened(callback: HandlerCallback) {
        emmitter.on('zpayments:billing:reopened', callback, {
            unique: true,
        })
    }
}