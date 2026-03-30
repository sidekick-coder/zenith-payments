import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/gatewayEntity.entity.ts
var gatewayEntity_entity_exports = /* @__PURE__ */ __exportAll({ default: () => GatewayEntity });
var GatewayEntity = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	gateway;
	external_id;
	name;
	description;
	type;
	raw;
	metas;
};
//#endregion
export { gatewayEntity_entity_exports as n, GatewayEntity as t };
