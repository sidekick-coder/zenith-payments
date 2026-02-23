const r = await globalThis.importAsync("#shared/services/validator.service.ts"), a = r.default || r, e = a.create((t) => t.object({
  gateway_id: t.nullish(t.string()),
  country: t.nullish(t.string()),
  amount: t.number(),
  currency: t.string()
})), o = e, c = a.create((t) => t.partial(e)), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: o,
  schema: e,
  update: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  s as p
};
