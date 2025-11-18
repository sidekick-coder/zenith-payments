import type Gateway from '../gateways/gateway.gateway.ts'
import MercadoPago from '../strategies/mercado-pago.strategy.ts'
import config from '#server/facades/config.facade.ts'
import logger from '#server/facades/logger.facade.ts'
import GatewayConfig from '#zpayments/shared/entities/gatewayConfig.entity.ts'

export default class GatewayService {
    public logger = logger.child({ label: 'gateway' })
    public contructors = new Map<string, new (data: GatewayConfig) => Gateway>()

    constructor() {
        this.contructors.set('mercadopago', MercadoPago)
    }

    public async list(){
        const gatewaysConfig = config.get('zpayments.gateways', {})
    
        const gateways = [] as Gateway[]

        for (const [id, gateway] of Object.entries<any>(gatewaysConfig)) {
            const constructor = this.contructors.get(id)

            if (!constructor) {
                this.logger.warn(`No constructor found for gateway ${id}`)
                continue
            }

            const data = GatewayConfig.from({
                id,
                ...gateway
            })

            const instance = new constructor(data)

            gateways.push(GatewayConfig.from(instance))
        }

        return gateways
    }

    public async find(id: string){
        const all = await this.list()

        const gateway = all.find(g => g.id === id)

        if (!gateway) {
            throw new Error('Gateway not found')
        }

        return gateway
    }
}