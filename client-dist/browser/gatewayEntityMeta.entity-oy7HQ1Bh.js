const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: s } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: i } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: a } = await globalThis.importAsync("#shared/utils/compose.ts");
class n extends a(t, s, i) {
  id;
  entity_id;
  name;
  value;
  gatewayEntity;
}
export {
  n as default
};
