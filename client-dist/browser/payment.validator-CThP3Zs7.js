const d = await globalThis.importAsync("#shared/services/validator.service.ts"), a = d.default || d, r = await globalThis.importAsync("#shared/validators/url.validator.ts"), o = await globalThis.importAsync("#shared/validators/pagination.validator.ts"), i = a.create((t) => t.pipe(
  r.array(),
  t.array(t.picklist(["user"]))
)), s = a.create((t) => t.object({
  user_id: t.optional(t.pipe(r.array(), t.transform((e) => e.map(Number)), t.array(t.number()))),
  status: t.optional(t.string())
})), n = o.order({
  defaultOrder: "created_at",
  defaultDirection: "desc",
  allowed: [
    "id",
    "amount",
    "status",
    "created_at",
    "updated_at"
  ]
}), c = a.create((t) => t.intersect([
  o.base,
  n,
  s,
  a.create((e) => e.object({
    include: e.optional(i),
    start_date: e.optional(r.datetime()),
    end_date: e.optional(r.datetime())
  }))
])), l = a.create((t) => t.intersect([
  o.base,
  n,
  t.omit(s, ["user_id"]),
  a.create((e) => e.object({ include: e.optional(i) }))
])), p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  include: i,
  index: c,
  order: n,
  userIndex: l,
  where: s
}, Symbol.toStringTag, { value: "Module" }));
export {
  p
};
