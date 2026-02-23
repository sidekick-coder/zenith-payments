const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
class GatewayEntity extends compose(BaseEntity, Timestamp, SoftDelete) {
  id;
  gateway;
  external_id;
  name;
  description;
  type;
  raw;
  metas;
}
export {
  GatewayEntity as default
};
