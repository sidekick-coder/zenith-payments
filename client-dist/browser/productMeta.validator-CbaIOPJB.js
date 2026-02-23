const a = await globalThis.importAsync("#shared/services/validator.service.ts"), o = a.default || a, t = o.create((e) => e.object({
  name: e.string(),
  value: e.nullish(e.string())
})), r = t, s = o.create((e) => e.partial(t)), c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: r,
  schema: t,
  update: s
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as p
};
