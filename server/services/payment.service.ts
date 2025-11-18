import BillingService from './billing.service.ts'
import GatewayService from './gateway.service.ts'
import SubscriptionService from './subscription.service.ts'

export default class PaymentService {
    public billings: BillingService
    public subscriptions: SubscriptionService
    public gateways: GatewayService

    constructor() {
        this.billings = new BillingService()
        this.subscriptions = new SubscriptionService()
        this.gateways = new GatewayService()
    }

}