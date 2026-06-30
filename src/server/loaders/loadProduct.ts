import { set, get } from 'lodash-es'
import { defineLoader } from '@sidekick-coder/zenith-kit/server'
import productRepository from '../facades/productRepository.ts'

interface LoadProductOptions {
    productIdKey?: string
    targetKey?: string
}

export async function loadProduct<T extends Record<string, any>>(payload: T | T[], options?: LoadProductOptions) {
    const foreignKey = options?.productIdKey || 'id'
    const targetKey = options?.targetKey || 'product'

    const entities = Array.isArray(payload) ? payload : [payload]
    const idList = new Set<number>()

    entities.forEach(entity => idList.add(get(entity, foreignKey)))

    const products = await productRepository.findMany({
        id: Array.from(idList.values()),
    })

    for (const entity of entities) {
        const entityProduct = products.find(p => p.id === get(entity, foreignKey))

        set(entity, targetKey, entityProduct || null)
    }
}

export function createProductLoader<T extends Record<string, any>>(options?: LoadProductOptions) {
    return defineLoader<T>({ load: (entities) => loadProduct(entities, options), })
}
