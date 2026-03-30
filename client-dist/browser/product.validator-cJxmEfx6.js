import { t as e } from "./chunk-DmhlhrBa.js";
const t = await globalThis.importAsync("#shared/services/validator.service.ts"), n = t.default || t, r = await globalThis.importAsync("#shared/validators/metadata.validator.ts"), i = await globalThis.importAsync("#shared/validators/url.validator.ts"), a = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
//#region modules/mod/shared/validators/product.validator.ts
var o = /* @__PURE__ */ e({
	create: () => f,
	include: () => s,
	index: () => u,
	order: () => l,
	schema: () => d,
	update: () => p,
	where: () => c
}), s = n.create((e) => e.pipe(i.array(), e.array(e.picklist(["prices"])))), c = n.create((e) => e.object({
	search: e.nullish(e.string()),
	metas: e.optional(e.record(e.string(), r.filter))
})), l = a.order({
	defaultOrder: "created_at",
	defaultDirection: "desc",
	allowed: ["created_at", "updated_at"]
}), u = n.create((e) => e.intersect([
	a.base,
	l,
	c,
	n.create((e) => e.object({ include: e.optional(s) }))
])), d = n.create((e) => e.object({
	name: e.string(),
	description: e.nullish(e.string())
})), f = d, p = n.create((e) => e.partial(d));
//#endregion
export { o as t };
