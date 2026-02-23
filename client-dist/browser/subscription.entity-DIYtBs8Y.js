const { BaseEntity: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: o } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: n } = await globalThis.importAsync("#shared/utils/compose.ts"), a = [
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
class l extends n(i, o, e) {
  static STATUS = a;
  id;
  amount;
  status;
  get statusLabel() {
    const t = a.find((s) => s.id === this.status);
    return t ? t.label : this.status;
  }
  get statusColor() {
    const t = a.find((s) => s.id === this.status);
    return t ? t.color : "var(--color-gray-500)";
  }
}
export {
  a as STATUS,
  l as default
};
