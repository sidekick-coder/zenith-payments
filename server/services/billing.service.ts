import BaseException from '#server/exceptions/base.ts'
import emmitter from '#server/facades/emmitter.facade.ts'
import logger from '#server/facades/logger.facade.ts'
import Billing from '#zpayments/server/entities/billing.entity.ts'

interface HandlerCallback {
    (billing: Billing): Promise<void> | void
}

type Handler = Record<string, HandlerCallback>

export default class BillingService {
    public logger = logger.child({ label: 'billing' })
    public handlers = new Map<string, Handler>()

    public async approve(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'approved'
        })
        
        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:approved', updated)

        const handler = this.handlers.get(billing.purpose)

        if (!handler?.approved) {
            this.logger.info(`No approved handler for purpose "${billing.purpose}"`)
            return
        }
        
        await handler.approved(updated)
    }

    public async fail(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'failed'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:failed', updated)

        const handler = this.handlers.get(billing.purpose)

        if (!handler?.failed) {
            this.logger.info(`No failed handler for purpose "${billing.purpose}"`)
            return
        }
        
        await handler.failed(updated)
    }

    public async refund(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'refunded'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:refunded', updated)

        const handler = this.handlers.get(billing.purpose)

        if (!handler?.refunded) {
            this.logger.info(`No refunded handler for purpose "${billing.purpose}"`)
            return
        }
        
        await handler.refunded(updated)
    }

    public async reopen(billing: Billing){
        await Billing.updateById(billing.id, {
            status: 'pending'
        })

        const updated = await Billing.findOrFail(billing.id)

        emmitter.emit('zpayments:billing:reopened', updated)

        const handler = this.handlers.get(billing.purpose)

        if (!handler) {
            this.logger.info(`No handler for purpose "${billing.purpose}"`)
            return
        }
        
        if (!handler.reopened) {
            this.logger.info(`No reopen handler for purpose "${billing.purpose}"`)
            return
        }
        
        await handler.reopened(updated)
    }

    public handle(purpose: string, status: 'approved' | 'failed' | 'refunded' | 'reopened', callback: HandlerCallback) {
        let handler = this.handlers.get(purpose)

        if (!handler) {
            handler = {}
        }

        if (handler[status] && handler[status] === callback) {
            return
        }
        
        if (handler[status] && handler[status] !== callback) {
            throw new BaseException(`Handler for purpose "${purpose}" and status "${status}" is already registered.`)
        }

        handler[status] = callback

        this.handlers.set(purpose, handler)
    }

    public onApproved(purpose: string, callback: HandlerCallback) {
        this.handle(purpose, 'approved', callback)
    }

    public onFail(purpose: string, callback: HandlerCallback) {
        this.handle(purpose, 'failed', callback)
    }

    public onRefund(purpose: string, callback: HandlerCallback) {
        this.handle(purpose, 'refunded', callback)
    }

    public onReopen(purpose: string, callback: HandlerCallback) {
        this.handle(purpose, 'reopened', callback)
    }
}