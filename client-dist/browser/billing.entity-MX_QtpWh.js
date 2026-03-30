const { BaseEntity: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: r } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/billing.entity.ts
var i = [
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
		color: "var(--color-blue-500)"
	}
], a = class a extends r(e, n, t) {
	static STATUS = i;
	id;
	user_id;
	purpose;
	amount;
	status;
	user;
	get statusLabel() {
		let e = a.STATUS.find((e) => e.id === this.status);
		return e ? e.label : this.status;
	}
	get statusColor() {
		let e = a.STATUS.find((e) => e.id === this.status);
		return e ? e.color : "var(--color-gray-500)";
	}
};
//#endregion
export { i as STATUS, a as default };
