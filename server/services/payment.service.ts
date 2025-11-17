import BillingService from './billing.service.ts'
import SubscriptionService from './subscription.service.ts'

export default class PaymentService {
    public billing: BillingService
    public subscription: SubscriptionService

    constructor() {
        this.billing = new BillingService()
        this.subscription = new SubscriptionService()
    }

}