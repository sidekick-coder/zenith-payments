const { BaseEntity: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: r } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/gatewayEntityMeta.entity.ts
var i = class extends r(e, n, t) {
	id;
	entity_id;
	name;
	value;
	gatewayEntity;
};
//#endregion
export { i as default };
