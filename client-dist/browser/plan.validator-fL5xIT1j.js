const a = await globalThis.importAsync("#shared/services/validator.service.ts"), o = a.default || a, e = o.create((t) => t.object({
  name: t.string(),
  description: t.nullish(t.string()),
  amount: t.number(),
  status: t.optional(t.picklist(["active", "inactive", "archived"]))
})), i = e, r = o.create((t) => t.partial(e)), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: i,
  schema: e,
  update: r
}, Symbol.toStringTag, { value: "Module" }));
export {
  s as p
};
