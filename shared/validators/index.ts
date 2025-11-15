import * as gateway from './gateway.validator.ts'
import * as billing from './billing.validator.ts'
import root from '#shared/validators/index.ts'

const schemas = {
    ...root,
    gateway,
    billing,
}

export default schemas