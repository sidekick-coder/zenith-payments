const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
const STATUS = [
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
];
class Order extends compose(BaseEntity, Timestamp) {
  static STATUS = STATUS;
  id;
  user_id;
  purpose;
  status;
  amount;
  currency;
  user;
  items;
  get statusLabel() {
    const status = Order.STATUS.find((s) => s.id === this.status);
    return status ? status.label : this.status;
  }
  get statusColor() {
    const status = Order.STATUS.find((s) => s.id === this.status);
    return status ? status.color : "var(--color-gray-500)";
  }
}
export {
  STATUS,
  Order as default
};
