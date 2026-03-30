import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/payment.entity.ts
var payment_entity_exports = /* @__PURE__ */ __exportAll({
	STATUS: () => STATUS,
	default: () => Payment
});
var STATUS = [
	{
		id: "pending",
		label: $t("Pending"),
		color: "var(--color-yellow-500)"
	},
	{
		id: "approved",
		label: $t("Approved"),
		color: "var(--color-green-500)"
	},
	{
		id: "failed",
		label: $t("Failed"),
		color: "var(--color-red-500)"
	},
	{
		id: "refunded",
		label: $t("Refunded"),
		color: "var(--color-purple-500)"
	}
];
var Payment = class Payment extends compose(BaseEntity, Timestamp) {
	static STATUS = STATUS;
	id;
	order_id;
	gateway_id;
	status;
	amount;
	get statusLabel() {
		const status = Payment.STATUS.find((s) => s.id === this.status);
		return status ? status.label : this.status;
	}
	get statusColor() {
		const status = Payment.STATUS.find((s) => s.id === this.status);
		return status ? status.color : "var(--color-gray-500)";
	}
};
//#endregion
export { payment_entity_exports as n, Payment as t };
