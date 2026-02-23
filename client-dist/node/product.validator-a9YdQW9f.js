const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const metadata = await globalThis.importAsync("#shared/validators/metadata.validator.ts");
const url = await globalThis.importAsync("#shared/validators/url.validator.ts");
const pagination = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
const include = validator.create((v) => v.pipe(
  url.array(),
  v.array(v.picklist(["prices"]))
));
const where = validator.create((v) => v.object({
  search: v.nullish(v.string()),
  metas: v.optional(v.record(v.string(), metadata.filter))
}));
const order = pagination.order({
  defaultOrder: "created_at",
  defaultDirection: "desc",
  allowed: ["created_at", "updated_at"]
});
const index = validator.create((v) => v.intersect([
  pagination.base,
  order,
  where,
  validator.create((v2) => v2.object({ include: v2.optional(include) }))
]));
const schema = validator.create((v) => v.object({
  name: v.string(),
  description: v.nullish(v.string())
}));
const create = schema;
const update = validator.create((v) => v.partial(schema));
const product = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create,
  include,
  index,
  order,
  schema,
  update,
  where
}, Symbol.toStringTag, { value: "Module" }));
export {
  product as p
};
