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

        for (const [id, data] of Object.entries<any>(gatewaysConfig)) {
            const constructor = this.contructors.get(data.gateway)

            if (!constructor) {
                this.logger.warn(`No constructor found for gateway ${id}`)
                continue
            }

            const gc = GatewayConfig.from({
                config: {},
                ...data,
                id,
            })

            const instance = new constructor(gc)

            gateways.push(instance)
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

    public async create(data: Pick<GatewayConfig, 'id' | 'name' | 'gateway' | 'config'>){
        const gatewaysConfig = config.get('zpayments.gateways', {})

        if (gatewaysConfig[data.id]) {
            throw new Error('Gateway with this ID already exists')
        }

        const newGateway = {
            ...data,
            config: data.config || {},
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        gatewaysConfig[data.id] = newGateway

        config.set('zpayments.gateways', gatewaysConfig)

        return data
    }

    public async update(id: string, data: Partial<GatewayConfig>){
        const configs = config.get('zpayments.gateways', {})
        const original = configs[id]

        if (!original) {
            throw new Error('Gateway not found')
        }

        const newData = {
            name: data.name || original.name,
            description: data.description || original.description,
            gateway: data.gateway || original.gateway,
            config: data.config || original.config || {},
            updatedAt: new Date().toISOString()
        }

        configs[id] = newData

        config.set('zpayments.gateways', configs)

        return GatewayConfig.from({
            id,
            ...newData
        })
    }

    public async delete(id: string){
        const gatewaysConfig = config.get('zpayments.gateways', {})

        if (!gatewaysConfig[id]) {
            throw new Error('Gateway not found')
        }

        delete gatewaysConfig[id]

        config.set('zpayments.gateways', gatewaysConfig)
    }
}