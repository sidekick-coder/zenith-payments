const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/subscription.entity.ts
var STATUS = [{
	id: "active",
	label: $t("Active"),
	color: "var(--color-green-500)"
}, {
	id: "inactive",
	label: $t("Inactive"),
	color: "var(--color-gray-500)"
}];
var Subscription = class extends compose(BaseEntity, Timestamp, SoftDelete) {
	static STATUS = STATUS;
	id;
	amount;
	status;
	get statusLabel() {
		const status = STATUS.find((s) => s.id === this.status);
		return status ? status.label : this.status;
	}
	get statusColor() {
		const status = STATUS.find((s) => s.id === this.status);
		return status ? status.color : "var(--color-gray-500)";
	}
};
//#endregion
export { STATUS, Subscription as default };
