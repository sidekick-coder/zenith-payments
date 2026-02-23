const a = await globalThis.importAsync("#shared/services/validator.service.ts"), o = a.default || a, t = o.create((e) => e.object({
  user_id: e.number(),
  purpose: e.string(),
  amount: e.number()
})), r = t, s = o.create((e) => e.partial(t)), c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: r,
  schema: t,
  update: s
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as b
};
