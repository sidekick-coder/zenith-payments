const { BaseEntity: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: o } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: n } = await globalThis.importAsync("#shared/utils/compose.ts"), c = [
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
class a extends n(i, e, o) {
  static STATUS = c;
  id;
  name;
  description;
  amount;
  status;
  get statusLabel() {
    const t = a.STATUS.find((s) => s.id === this.status);
    return t ? t.label : this.status;
  }
  get statusColor() {
    const t = a.STATUS.find((s) => s.id === this.status);
    return t ? t.color : "var(--color-gray-500)";
  }
}
export {
  c as STATUS,
  a as default
};
