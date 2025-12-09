import { MercadoPagoConfig, PreApproval, Customer, User } from 'mercadopago'
import GatewayEntity from '../entities/gatewayEntity.entity.ts'
import GatewaySubscription from '../gateways/gatewaySubscriptions.gateway.ts'
import Subscription from '../entities/subscription.entity.ts'
import logger from '#server/facades/logger.facade.ts'

export default class MercadoPagoCustomers extends GatewaySubscription {
    public id: string
    public client: MercadoPagoConfig
    public customer: Customer
    public logger = logger.child({ label: 'mercado-pago' })
    public debug = false
    
    constructor(data: Pick<MercadoPagoCustomers, 'id' | 'client'> & { debug?: boolean }) {
        super()
        this.id = data.id
        this.client = data.client
        this.customer = new Customer(this.client)
        this.debug = data.debug ?? false
    }

    public async sync(): Promise<void> {
        const { api_response: _, ...response } = await this.customer.get({
            customerId: '1957720282'
        })

        console.log(response)

        // if (!response.results?.length) {
        //     return
        // }

        // for await (const item of response.results) {
        //     this.logger.info(`syncing ${item.id}`, { item })

        //     const entity = await GatewayEntity.updateOrCreate({
        //         where: eb => eb.and({
        //             gateway: this.id,
        //             type: 'subscription',
        //             external_id: String(item.id),
        //         }),
        //         values: {
        //             gateway: this.id,
        //             external_id: String(item.id),
        //             name: `Subscription ${item.id}`,
        //             type: 'subscription',
        //             raw: JSON.stringify(item),
        //         }
        //     })

        //     let subscription = await Subscription.findByGatewayEntityId(entity.id)

        //     if (!subscription) {
        //         subscription = await Subscription.create({
        //             user_id: null,
        //             plan_id: null,
        //             amount: item.auto_recurring?.transaction_amount || 0,
        //             status: 'unknown',
        //         })

        //         await subscription.assignEntity(entity.id)
        //     }

        //     await Subscription.updateById(subscription.id, {
        //         amount: item.auto_recurring?.transaction_amount || subscription.amount,
        //         status: item.status === 'authorized' ? 'active' : 'inactive',
        //     })
        // }
    }
}
