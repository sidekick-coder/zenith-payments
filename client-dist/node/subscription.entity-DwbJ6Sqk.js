const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
const STATUS = [
  {
    id: "active",
    label: $t("Active"),
    color: "var(--color-green-500)"
  },
  {
    id: "inactive",
    label: $t("Inactive"),
    color: "var(--color-gray-500)"
  }
];
class Subscription extends compose(BaseEntity, Timestamp, SoftDelete) {
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
}
export {
  STATUS,
  Subscription as default
};
