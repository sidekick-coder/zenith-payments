import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/productMeta.entity.ts
var productMeta_entity_exports = /* @__PURE__ */ __exportAll({ default: () => ProductMeta });
var ProductMeta = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	product_id;
	name;
	value;
};
//#endregion
export { productMeta_entity_exports as n, ProductMeta as t };
