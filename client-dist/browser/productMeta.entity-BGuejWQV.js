const { BaseEntity: s } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: e } = await globalThis.importAsync("#shared/utils/compose.ts");
class o extends e(s, t, i) {
  id;
  product_id;
  name;
  value;
}
export {
  o as default
};
