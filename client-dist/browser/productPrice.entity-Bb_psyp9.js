const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: s } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: i } = await globalThis.importAsync("#shared/utils/compose.ts");
class o extends i(t, s, e) {
  id;
  product_id;
  gateway_id;
  country;
  amount;
  currency;
  get amountFormatted() {
    return this.amount === void 0 || this.currency === void 0 ? null : new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.currency
    }).format(this.amount / 100);
  }
}
export {
  o as default
};
