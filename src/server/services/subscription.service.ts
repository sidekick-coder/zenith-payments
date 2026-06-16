import emmitter from '#server/facades/emmitter.facade.ts'
import logger from '#server/facades/logger.facade.ts'
import Subscription from '#zpayments/server/entities/subscription.entity.ts'

interface HandlerCallback {
    (subscription: Subscription): Promise<void> | void
}
export default class SubscriptionService {
    public logger = logger.child({ label: 'subscription' })
    // public handlers = new Map<string, Handler>()

    public async activate(subscription: Subscription){
        await Subscription.updateById(subscription.id, {
            status: 'active'
        })
        
        const updated = await Subscription.findOrFail(subscription.id)

        emmitter.emit('zpayments:subscription:activated', updated)

        return updated
    }

    public async deactivate(subscription: Subscription){
        await Subscription.updateById(subscription.id, {
            status: 'inactive'
        })
        
        const updated = await Subscription.findOrFail(subscription.id)

        emmitter.emit('zpayments:subscription:deactivated', updated)

        return updated
    }

    public onActivated(callback: HandlerCallback) {
        emmitter.on('zpayments:subscription:activated', callback, {
            unique: true,
        })
    }

    public onDeactivated(callback: HandlerCallback) {
        emmitter.on('zpayments:subscription:deactivated', callback, {
            unique: true,
        })
    }

    public onRenewed(callback: HandlerCallback) {
        emmitter.on('zpayments:subscription:renewed', callback, {
            unique: true,
        })
    }
}