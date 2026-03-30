const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/gatewayEntityAssignment.entity.ts
var GatewayEntityAssignment = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	entity_id;
	assignable_id;
	assignable_type;
	gateway_entity;
};
//#endregion
export { GatewayEntityAssignment as default };
