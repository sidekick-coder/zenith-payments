import type Plan from './plan.entity.ts'

export default class GatewayPlan {
    public link(plan: Plan): void {
        const error = new Error('Method not implemented.')

        Object.assign(error, { plan })

        throw error
    }
}
