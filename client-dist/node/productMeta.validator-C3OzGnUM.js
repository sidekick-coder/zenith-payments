const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const schema = validator.create((v) => v.object({
  name: v.string(),
  value: v.nullish(v.string())
}));
const create = schema;
const update = validator.create((v) => v.partial(schema));
const productMeta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create,
  schema,
  update
}, Symbol.toStringTag, { value: "Module" }));
export {
  productMeta as p
};
