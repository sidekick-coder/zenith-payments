const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const schema = validator.create((v) => v.object({
  user_id: v.number(),
  plan_id: v.number(),
  amount: v.optional(v.number())
}));
const create = schema;
const update = validator.create((v) => v.partial(v.omit(schema, ["user_id", "plan_id"])));
const subscription = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create,
  schema,
  update
}, Symbol.toStringTag, { value: "Module" }));
export {
  subscription as s
};
