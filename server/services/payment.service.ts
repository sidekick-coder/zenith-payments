import BillingService from './billing.service.ts'

export default class PaymentService {
    public billing: BillingService

    constructor() {
        this.billing = new BillingService()
    }

}