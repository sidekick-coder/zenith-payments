const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { Timestamp } = await globalThis.importAsync("#shared/mixins/index.ts");
const { SoftDelete } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
class GatewayEntityAssignment extends compose(BaseEntity, Timestamp, SoftDelete) {
  id;
  entity_id;
  assignable_id;
  assignable_type;
  gateway_entity;
}
export {
  GatewayEntityAssignment as default
};
