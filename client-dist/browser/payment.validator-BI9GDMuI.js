const n = await globalThis.importAsync("#shared/services/validator.service.ts"), a = n.default || n, c = await globalThis.importAsync("#shared/validators/url.validator.ts"), r = await globalThis.importAsync("#shared/validators/pagination.validator.ts"), o = a.create((t) => t.pipe(
  c.array(),
  t.array(t.picklist(["user"]))
)), i = a.create((t) => t.object({
  user_id: t.optional(t.pipe(c.array(), t.transform((e) => e.map(Number)), t.array(t.number()))),
  status: t.optional(t.string())
})), s = r.order({
  defaultOrder: "created_at",
  defaultDirection: "desc",
  allowed: [
    "id",
    "amount",
    "status",
    "created_at",
    "updated_at"
  ]
}), l = a.create((t) => t.intersect([
  r.base,
  s,
  i,
  a.create((e) => e.object({ include: e.optional(o) }))
])), d = a.create((t) => t.intersect([
  r.base,
  s,
  t.omit(i, ["user_id"]),
  a.create((e) => e.object({ include: e.optional(o) }))
])), u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  include: o,
  index: l,
  order: s,
  userIndex: d,
  where: i
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as p
};
