const { BaseEntity: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: n } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: r } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/plan.entity.ts
var i = [{
	id: "active",
	label: $t("Active"),
	color: "var(--color-green-500)"
}, {
	id: "inactive",
	label: $t("Inactive"),
	color: "var(--color-gray-500)"
}], a = class a extends r(e, n, t) {
	static STATUS = i;
	id;
	name;
	description;
	amount;
	status;
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
