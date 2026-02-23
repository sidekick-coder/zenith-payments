const a = await globalThis.importAsync("#shared/services/validator.service.ts"), o = a.default || a, e = o.create((t) => t.object({
  id: t.string(),
  name: t.string(),
  description: t.optional(t.string()),
  gateway: t.string(),
  config: t.optional(t.record(t.string(), t.any()))
})), r = e, i = o.create((t) => t.partial(e)), n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: r,
  schema: e,
  update: i
}, Symbol.toStringTag, { value: "Module" }));
export {
  n as g
};
