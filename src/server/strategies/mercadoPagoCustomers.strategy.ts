import { MercadoPagoConfig, Payment, Customer as MPCustomer, User } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewaySubscription from '../gateways/gatewaySubscriptions.gateway.ts'
import Customer from '../entities/customer.entity.ts'
import logger from '#server/facades/logger.facade.ts'

export default class MercadoPagoCustomers extends GatewaySubscription {
    public id: string
    public client: MercadoPagoConfig
    public customer: MPCustomer
    public payment: Payment
    public logger = logger.child({ label: 'mercado-pago' })
    public debug = false
    
    constructor(data: Pick<MercadoPagoCustomers, 'id' | 'client'> & { debug?: boolean }) {
        super()
        this.id = data.id
        this.client = data.client
        this.customer = new MPCustomer(this.client)
        this.payment = new Payment(this.client)
        this.debug = data.debug ?? false
    }

    public async sync(): Promise<void> {
        const response = await this.payment.search()
        
        if (!response.results?.length) {
            return
        }

        for await (const item of response.results) {
            if (!item.payer || !item.payer?.id || !item.payer?.email) {
                continue
            }

            this.logger.info(`syncing ${item.id}`)

            const entity = await GatewayEntity.updateOrCreate({
                where: eb => eb.and({
                    gateway: this.id,
                    type: 'customer',
                    external_id: String(item.payer!.id),
                }),
                values: {
                    gateway: this.id,
                    external_id: String(item.payer!.id),
                    name: `Payer ${item.payer.id}`,
                    type: 'customer',
                    raw: JSON.stringify(item.payer),
                }
            })

            const customer = await Customer.findBy('email', item.payer?.email || '')

            if (customer) {
                await customer.$entities.attach(entity.id, {
                    assignable_type: 'user',
                })
            }
        }
    }
}
