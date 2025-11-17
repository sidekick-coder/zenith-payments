import BaseException from '#server/exceptions/base.ts'
import emmitter from '#server/facades/emmitter.facade.ts'
import logger from '#server/facades/logger.facade.ts'
import Subscription from '#zpayments/server/entities/subscription.entity.ts'

interface HandlerCallback {
    (subscription: Subscription): Promise<void> | void
}

type Handler = Record<string, HandlerCallback>

export default class SubscriptionService {
    public logger = logger.child({ label: 'subscription' })
    // public handlers = new Map<string, Handler>()

    // public async activate(subscription: Subscription){
    //     await Subscription.updateById(subscription.id, {
    //         status: 'active'
    //     })
        
    //     const updated = await Subscription.findOrFail(subscription.id)

    //     emmitter.emit('zpayments:subscription:activated', updated)

    //     const handler = this.handlers.get(subscription.purpose)

    //     if (!handler?.activated) {
    //         this.logger.info(`No activated handler for purpose "${subscription.purpose}"`)
    //         return
    //     }
        
    //     await handler.activated(updated)
    // }   

    // public handle(purpose: string, status: 'approved' | 'failed' | 'refunded' | 'reopened', callback: HandlerCallback) {
    //     let handler = this.handlers.get(purpose)

    //     if (!handler) {
    //         handler = {}
    //     }

    //     if (handler[status] && handler[status] === callback) {
    //         return
    //     }
        
    //     if (handler[status] && handler[status] !== callback) {
    //         throw new BaseException(`Handler for purpose "${purpose}" and status "${status}" is already registered.`)
    //     }

    //     handler[status] = callback

    //     this.handlers.set(purpose, handler)
    // }

    // public onApproved(purpose: string, callback: HandlerCallback) {
    //     this.handle(purpose, 'approved', callback)
    // }

    // public onFail(purpose: string, callback: HandlerCallback) {
    //     this.handle(purpose, 'failed', callback)
    // }

    // public onRefund(purpose: string, callback: HandlerCallback) {
    //     this.handle(purpose, 'refunded', callback)
    // }

    // public onReopen(purpose: string, callback: HandlerCallback) {
    //     this.handle(purpose, 'reopened', callback)
    // }
}