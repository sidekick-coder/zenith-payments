const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/gatewayEntityMeta.entity.ts
var GatewayEntityMeta = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	entity_id;
	name;
	value;
	gatewayEntity;
};
//#endregion
export { GatewayEntityMeta as default };
