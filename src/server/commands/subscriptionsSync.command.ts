
import { CliCommand } from '@sidekick-coder/zenith-kit/server'
import payment from '../facades/zpayment.ts'

const command = new CliCommand('zpayments:subscriptions-sync')
const select = command.inquirer.select

command
    .option('-g, --gateway-id <gatewayId>', 'Gateway ID to execute')
    .description('Sync subscriptions from payment gateway')
    .helpGroup('zpayments')
    .action(async (options: { gatewayId?: string }) => {
        let gatewayId = options.gatewayId

        if (!gatewayId) {
            const gateways = await payment.gateways.list()
            const choices = gateways.map(g => ({
                name: `${g.name} (${g.gateway})`,
                value: g.id,
            }))

            gatewayId = await select({
                message: 'Select a gateway to sync subscriptions:',
                choices,
            })
        }

        if (!gatewayId) {
            throw new Error('Gateway ID is required')
        }

        const gateway = await payment.gateways.find(gatewayId)

        if (!gateway) {
            throw new Error('Gateway not found')
        }

        if (!gateway.subscriptions) {
            throw new Error('Subscriptions not supported for this gateway')
        }

        await gateway.subscriptions.sync()
    })
