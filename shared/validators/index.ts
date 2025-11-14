import * as gateway from './gateway.validator.ts'
import root from '#shared/validators/index.ts'

const schemas = {
    ...root,
    gateway,
}

export default schemas