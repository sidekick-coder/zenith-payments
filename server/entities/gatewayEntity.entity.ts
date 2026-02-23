import type { Insertable } from 'kysely'
import { Model } from '#server/mixins/model.mixin.ts'
import Base from '#zpayments/shared/entities/gatewayEntity.entity.ts'
import { composeWith } from '#shared/utils/compose.ts'
import type { Database } from '#server/contracts/database.contract'

export default class GatewayEntity extends composeWith(
    Base,
    Model('zpayments__gateway_entities')
) {
    public static async findOrCreate(data: Insertable<Database['zpayments__gateway_entities']>): Promise<GatewayEntity> {
        let entity = await GatewayEntity.findOne({
            where: eb => eb.and({
                gateway: data.gateway,
                external_id: data.external_id
            })
        })

        if (entity) {
            await GatewayEntity.updateById(entity.id, {
                name: data.name,
                description: data.description,
                raw: data.raw,
            })
        }

        if (!entity) {
            entity = await GatewayEntity.create({
                gateway: data.gateway,
                external_id: data.external_id,
                name: data.name,
                description: data.description,
                type: data.type,
                raw: data.raw,
            })
        }

        return entity
    }
}
