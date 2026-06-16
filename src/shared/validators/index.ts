import * as gateway from './gateway.validator.ts'
import * as billing from './billing.validator.ts'
import * as plan from './plan.validator.ts'
import * as subscription from './subscription.validator.ts'
import * as product from './product.validator.ts'
import * as productMeta from './productMeta.validator.ts'
import * as productPrice from './productPrice.validator.ts'
import * as order from './order.validator.ts'
import * as payment from './payment.validator.ts'

const schemas = {
    payment,
    order,
    gateway,
    billing,
    plan,
    subscription,
    product,
    productMeta,
    productPrice,
}

export default schemas
