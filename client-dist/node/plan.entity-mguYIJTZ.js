const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/plan.entity.ts
var STATUS = [{
	id: "active",
	label: $t("Active"),
	color: "var(--color-green-500)"
}, {
	id: "inactive",
	label: $t("Inactive"),
	color: "var(--color-gray-500)"
}];
var Plan = class Plan extends compose(BaseEntity, Timestamp, SoftDelete) {
	static STATUS = STATUS;
	id;
	name;
	description;
	amount;
	status;
	get statusLabel() {
		const status = Plan.STATUS.find((s) => s.id === this.status);
		return status ? status.label : this.status;
	}
	get statusColor() {
		const status = Plan.STATUS.find((s) => s.id === this.status);
		return status ? status.color : "var(--color-gray-500)";
	}
};
//#endregion
export { STATUS, Plan as default };
