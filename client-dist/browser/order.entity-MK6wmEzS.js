import { t as e } from "./chunk-DmhlhrBa.js";
const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: r } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/order.entity.ts
var i = /* @__PURE__ */ e({
	STATUS: () => a,
	default: () => o
}), a = [
	{
		id: "pending",
		label: $t("Pending"),
		color: "var(--color-yellow-500)"
	},
	{
		id: "completed",
		label: $t("Completed"),
		color: "var(--color-green-500)"
	},
	{
		id: "failed",
		label: $t("Failed"),
		color: "var(--color-red-500)"
	}
], o = class e extends r(t, n) {
	static STATUS = a;
	id;
	user_id;
	purpose;
	status;
	amount;
	currency;
	user;
	items;
	get statusLabel() {
		let t = e.STATUS.find((e) => e.id === this.status);
		return t ? t.label : this.status;
	}
	get statusColor() {
		let t = e.STATUS.find((e) => e.id === this.status);
		return t ? t.color : "var(--color-gray-500)";
	}
};
//#endregion
export { i as n, o as t };
