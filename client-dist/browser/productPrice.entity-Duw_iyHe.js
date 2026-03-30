import { t as e } from "./chunk-DmhlhrBa.js";
const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: r } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: i } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/productPrice.entity.ts
var a = /* @__PURE__ */ e({ default: () => o }), o = class extends i(t, r, n) {
	id;
	product_id;
	gateway_id;
	country;
	amount;
	currency;
	get amountFormatted() {
		return this.amount === void 0 || this.currency === void 0 ? null : new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: this.currency
		}).format(this.amount / 100);
	}
};
//#endregion
export { a as n, o as t };
