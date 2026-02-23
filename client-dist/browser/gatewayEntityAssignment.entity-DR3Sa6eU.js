const { BaseEntity: s } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: e } = await globalThis.importAsync("#shared/utils/compose.ts");
class n extends e(s, t, i) {
  id;
  entity_id;
  assignable_id;
  assignable_type;
  gateway_entity;
}
export {
  n as default
};
