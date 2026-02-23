const { BaseEntity: t } = await globalThis.importAsync("#shared/mixins/index.ts"), { Timestamp: s } = await globalThis.importAsync("#shared/mixins/index.ts"), { SoftDelete: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: a } = await globalThis.importAsync("#shared/utils/compose.ts");
class o extends a(t, s, e) {
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
  o as default
};
