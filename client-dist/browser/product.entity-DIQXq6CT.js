import { t as e } from "./productPrice.entity-Duw_iyHe.js";
const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: r } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: i } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/product.entity.ts
var a = class extends i(t, r, n) {
	id;
	name;
	description;
	price;
	prices;
	static parse(t) {
		return t.prices && Array.isArray(t.prices) && (t.prices = t.prices.map((t) => e.from(t))), t;
	}
	get amountFormatted() {
		return this.price ? this.price.amountFormatted : null;
	}
	useGateway(e) {
		if (!this.prices || this.prices.length === 0) return;
		let t = this.prices.find((t) => t.gateway_id === e);
		t && (this.price = t);
	}
};
//#endregion
export { a as default };
