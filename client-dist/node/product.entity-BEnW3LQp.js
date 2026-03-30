import { t as ProductPrice } from "./productPrice.entity-DzaQyUUM.js";
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/product.entity.ts
var Product = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	id;
	name;
	description;
	price;
	prices;
	static parse(data) {
		if (data.prices && Array.isArray(data.prices)) data.prices = data.prices.map((p) => ProductPrice.from(p));
		return data;
	}
	get amountFormatted() {
		if (!this.price) return null;
		return this.price.amountFormatted;
	}
	useGateway(gateway_id) {
		if (!this.prices || this.prices.length === 0) return;
		const price = this.prices.find((p) => p.gateway_id === gateway_id);
		if (price) this.price = price;
	}
};
//#endregion
export { Product as default };
