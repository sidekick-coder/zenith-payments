const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: s } = await globalThis.importAsync("#shared/utils/compose.ts");
class i extends s(t) {
  id;
  order_id;
  item_type;
  item_id;
  quantity;
  unit_amount;
  currency;
}
export {
  i as default
};
