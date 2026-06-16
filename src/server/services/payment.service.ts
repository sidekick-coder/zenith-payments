import Order from '../entities/order.entity.ts'
import Payment from '../entities/payment.entity.ts'
import OrderItem from '../entities/orderItem.entity.ts'
import Product from '../entities/product.entity.ts'
import type Gateway from '../gateways/gateway.gateway.ts'
import BillingService from './billing.service.ts'
import GatewayService from './gateway.service.ts'
import SubscriptionService from './subscription.service.ts'
import emmitter from '#server/facades/emmitter.facade.ts'
import { UserEntity as User } from '@sidekick-coder/zenith-kit/shared'
import { userRepository } from '@sidekick-coder/zenith-kit/server'

interface PaymentEventPayload {
    payment: Payment;
    order: Order;
    user: User
    gateway: Gateway;
    product?: Product
}

export interface PaymentEvents {
    'payment-approved': PaymentEventPayload
    'payment-failed': PaymentEventPayload
    'payment-refunded': PaymentEventPayload
}

export default class PaymentService {
    public billings: BillingService
    public subscriptions: SubscriptionService
    public gateways: GatewayService

    constructor() {
        this.billings = new BillingService()
        this.subscriptions = new SubscriptionService()
        this.gateways = new GatewayService()
    }

    public on<K extends keyof PaymentEvents>(event: K, listener: (data: PaymentEvents[K]) => void) {
        emmitter.on(`zpayments:${event}`, listener)
    }

    public async process(paymentId: number) {
        const payment = await Payment.findOrFail(paymentId)
        const order = await Order.findOrFail(payment.order_id)
        const user = await userRepository.findByIdOrFail(order.user_id)
        const orderItems = await OrderItem.list({
            query: q => q.selectAll().where('order_id', '=', order.id)
        })

        const gateway = await this.gateways.find(payment.gateway_id)

        let status: Payment['status'] | null = null

        if (order.purpose === 'product' && gateway.products) {
            status = await gateway.products.getStatus({ payment })
        }

        if (!status) {
            throw new Error('Unable to get payment status from gateway')
        }

        if (status === payment.status) {
            return {
                payment,
                order,
                gateway
            }
        }
     
        const data: any = {
            payment,
            order,
            gateway,
            user
        }

        if (order.purpose === 'product') {
            const item = orderItems[0]

            if (!item) {
                throw new Error('No order items found')
            }

            data.product = await Product.findOrFail(Number(item.item_id))

        }

        await Payment.updateById(payment.id, {
            status,
        })
        
        if (status === 'approved') {
            await Order.updateById(order.id, { status: 'completed' })

            order.status = 'completed'

            emmitter.emit('zpayments:payment-approved', data)
        }

        if (status === 'failed') {
            await Order.updateById(order.id, { status: 'failed' })
            
            order.status = 'failed'

            emmitter.emit('zpayments:payment-failed', data)
        }

        if (status === 'refunded') {
            emmitter.emit('zpayments:payment-refunded', data)
        }

        payment.status = status

        return {
            payment,
            order,
            gateway
        }
    }

}
