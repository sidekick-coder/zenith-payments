import * as gateway from './gateway.validator.ts'
import * as billing from './billing.validator.ts'
import * as plan from './plan.validator.ts'
import * as subscription from './subscription.validator.ts'
import * as product from './product.validator.ts'
import * as productMeta from './productMeta.validator.ts'
import * as productPrice from './productPrice.validator.ts'
import root from '#shared/validators/index.ts'

const schemas = {
    ...root,
    gateway,
    billing,
    plan,
    subscription,
    product,
    productMeta,
    productPrice,
}

export default schemas