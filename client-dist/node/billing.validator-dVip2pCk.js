const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const schema = validator.create((v) => v.object({
  user_id: v.number(),
  purpose: v.string(),
  amount: v.number()
}));
const create = schema;
const update = validator.create((v) => v.partial(schema));
const billing = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create,
  schema,
  update
}, Symbol.toStringTag, { value: "Module" }));
export {
  billing as b
};
