const o = await globalThis.importAsync("#shared/services/validator.service.ts"), a = o.default || o, n = await globalThis.importAsync("#shared/validators/metadata.validator.ts"), d = await globalThis.importAsync("#shared/validators/url.validator.ts"), i = await globalThis.importAsync("#shared/validators/pagination.validator.ts"), s = a.create((t) => t.pipe(
  d.array(),
  t.array(t.picklist(["prices"]))
)), c = a.create((t) => t.object({
  search: t.nullish(t.string()),
  metas: t.optional(t.record(t.string(), n.filter))
})), l = i.order({
  defaultOrder: "created_at",
  defaultDirection: "desc",
  allowed: ["created_at", "updated_at"]
}), p = a.create((t) => t.intersect([
  i.base,
  l,
  c,
  a.create((r) => r.object({ include: r.optional(s) }))
])), e = a.create((t) => t.object({
  name: t.string(),
  description: t.nullish(t.string())
})), u = e, h = a.create((t) => t.partial(e)), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: u,
  include: s,
  index: p,
  order: l,
  schema: e,
  update: h,
  where: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  _ as p
};
