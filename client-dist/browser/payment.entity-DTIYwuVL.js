const { BaseEntity: a } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: i } = await globalThis.importAsync("#shared/utils/compose.ts"), l = [
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
class o extends i(a, e) {
  static STATUS = l;
  id;
  order_id;
  gateway_id;
  status;
  amount;
  get statusLabel() {
    const t = o.STATUS.find((s) => s.id === this.status);
    return t ? t.label : this.status;
  }
  get statusColor() {
    const t = o.STATUS.find((s) => s.id === this.status);
    return t ? t.color : "var(--color-gray-500)";
  }
}
export {
  l as STATUS,
  o as default
};
