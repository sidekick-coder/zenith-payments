const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
class GatewayEntityMeta extends compose(BaseEntity, Timestamp, SoftDelete) {
  id;
  entity_id;
  name;
  value;
  gatewayEntity;
}
export {
  GatewayEntityMeta as default
};
