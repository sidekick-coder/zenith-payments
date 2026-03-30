import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/productPrice.entity.ts
var productPrice_entity_exports = /* @__PURE__ */ __exportAll({ default: () => ProductPrice });
var ProductPrice = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	product_id;
	gateway_id;
	country;
	amount;
	currency;
	get amountFormatted() {
		if (this.amount === void 0 || this.currency === void 0) return null;
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: this.currency
		}).format(this.amount / 100);
	}
};
//#endregion
export { productPrice_entity_exports as n, ProductPrice as t };
