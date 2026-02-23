const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const schema = validator.create((v) => v.object({
  id: v.string(),
  name: v.string(),
  description: v.optional(v.string()),
  gateway: v.string(),
  config: v.optional(v.record(v.string(), v.any()))
}));
const create = schema;
const update = validator.create((v) => v.partial(schema));
const gateway = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create,
  schema,
  update
}, Symbol.toStringTag, { value: "Module" }));
export {
  gateway as g
};
