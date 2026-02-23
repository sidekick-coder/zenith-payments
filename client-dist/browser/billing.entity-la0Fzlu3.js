const { BaseEntity: o } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: a } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: l } = await globalThis.importAsync("#shared/utils/compose.ts"), r = [
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
class e extends l(o, a, i) {
  static STATUS = r;
  id;
  user_id;
  purpose;
  amount;
  status;
  user;
  get statusLabel() {
    const t = e.STATUS.find((s) => s.id === this.status);
    return t ? t.label : this.status;
  }
  get statusColor() {
    const t = e.STATUS.find((s) => s.id === this.status);
    return t ? t.color : "var(--color-gray-500)";
  }
}
export {
  r as STATUS,
  e as default
};
