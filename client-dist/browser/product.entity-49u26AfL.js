import e from "./productPrice.entity-Bb_psyp9.js";
const { BaseEntity: r } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: o } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: c } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: a } = await globalThis.importAsync("#shared/utils/compose.ts");
class m extends a(r, o, c) {
  id;
  name;
  description;
  // selected price
  price;
  prices;
  static parse(i) {
    return i.prices && Array.isArray(i.prices) && (i.prices = i.prices.map((s) => e.from(s))), i;
  }
  get amountFormatted() {
    return this.price ? this.price.amountFormatted : null;
  }
  useGateway(i) {
    if (!this.prices || this.prices.length === 0)
      return;
    const s = this.prices.find((t) => t.gateway_id === i);
    s && (this.price = s);
  }
}
export {
  m as default
};
