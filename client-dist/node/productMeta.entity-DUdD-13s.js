const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
class ProductMeta extends compose(BaseEntity, Timestamp, SoftDelete) {
  id;
  product_id;
  name;
  value;
}
export {
  ProductMeta as default
};
