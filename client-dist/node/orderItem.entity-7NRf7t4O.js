const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
class OrderItem extends compose(BaseEntity) {
  id;
  order_id;
  item_type;
  item_id;
  quantity;
  unit_amount;
  currency;
}
export {
  OrderItem as default
};
