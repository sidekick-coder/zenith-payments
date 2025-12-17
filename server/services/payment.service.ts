import Order from '../entities/order.entity.ts'
import Payment from '../entities/payment.entity.ts'
import BillingService from './billing.service.ts'
import GatewayService from './gateway.service.ts'
import SubscriptionService from './subscription.service.ts'
import emmitter from '#server/facades/emmitter.facade.ts'

export default class PaymentService {
    public billings: BillingService
    public subscriptions: SubscriptionService
    public gateways: GatewayService

    constructor() {
        this.billings = new BillingService()
        this.subscriptions = new SubscriptionService()
        this.gateways = new GatewayService()
    }


    public async process(paymentId: number) {
        const payment = await Payment.findOrFail(paymentId)
        const order = await Order.findOrFail(payment.order_id)
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

        await Payment.updateById(payment.id, {
            status,
        })
        
        if (status === 'approved') {
            await Order.updateById(order.id, { status: 'completed' })

            order.status = 'completed'

            emmitter.emit('zpayments:payment:approved', { 
                payment,
                order 
            })
        }

        if (status === 'failed') {
            await Order.updateById(order.id, { status: 'failed' })
            
            order.status = 'failed'

            emmitter.emit('zpayments:payment:failed', { 
                payment,
                order 
            })
        }

        if (status === 'refunded') {
            emmitter.emit('zpayments:payment:refunded', { 
                payment,
                order 
            })
        }

        payment.status = status

        return {
            payment,
            order,
            gateway
        }
    }

}