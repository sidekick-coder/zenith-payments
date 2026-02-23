const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
const STATUS = [
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
];
class Billing extends compose(BaseEntity, Timestamp, SoftDelete) {
  static STATUS = STATUS;
  id;
  user_id;
  purpose;
  amount;
  status;
  user;
  get statusLabel() {
    const status = Billing.STATUS.find((s) => s.id === this.status);
    return status ? status.label : this.status;
  }
  get statusColor() {
    const status = Billing.STATUS.find((s) => s.id === this.status);
    return status ? status.color : "var(--color-gray-500)";
  }
}
export {
  STATUS,
  Billing as default
};
