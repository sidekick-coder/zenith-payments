const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const url = await globalThis.importAsync("#shared/validators/url.validator.ts");
const pagination = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
const include = validator.create((v) => v.pipe(
  url.array(),
  v.array(v.picklist(["user"]))
));
const where = validator.create((v) => v.object({
  user_id: v.optional(v.pipe(url.array(), v.transform((a) => a.map(Number)), v.array(v.number()))),
  status: v.optional(v.string())
}));
const order = pagination.order({
  defaultOrder: "created_at",
  defaultDirection: "desc",
  allowed: [
    "id",
    "amount",
    "status",
    "created_at",
    "updated_at"
  ]
});
const index = validator.create((v) => v.intersect([
  pagination.base,
  order,
  where,
  validator.create((v2) => v2.object({
    include: v2.optional(include),
    start_date: v2.optional(url.datetime()),
    end_date: v2.optional(url.datetime())
  }))
]));
const userIndex = validator.create((v) => v.intersect([
  pagination.base,
  order,
  v.omit(where, ["user_id"]),
  validator.create((v2) => v2.object({ include: v2.optional(include) }))
]));
const payment = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  include,
  index,
  order,
  userIndex,
  where
}, Symbol.toStringTag, { value: "Module" }));
export {
  payment as p
};
