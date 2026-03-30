import { t as e } from "./chunk-DmhlhrBa.js";
const t = await globalThis.importAsync("#shared/services/validator.service.ts"), n = t.default || t, r = await globalThis.importAsync("#shared/validators/url.validator.ts"), i = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
//#region modules/mod/shared/validators/order.validator.ts
var a = /* @__PURE__ */ e({
	include: () => o,
	index: () => l,
	order: () => c,
	userIndex: () => u,
	where: () => s
}), o = n.create((e) => e.pipe(r.array(), e.array(e.picklist(["user"])))), s = n.create((e) => e.object({
	user_id: e.optional(e.pipe(r.array(), e.transform((e) => e.map(Number)), e.array(e.number()))),
	purpose: e.optional(e.string()),
	status: e.optional(e.string())
})), c = i.order({
	defaultOrder: "created_at",
	defaultDirection: "desc",
	allowed: [
		"id",
		"user_id",
		"amount",
		"status",
		"created_at",
		"updated_at"
	]
}), l = n.create((e) => e.intersect([
	i.base,
	c,
	s,
	n.create((e) => e.object({ include: e.optional(o) }))
])), u = n.create((e) => e.intersect([
	i.base,
	c,
	e.omit(s, ["user_id"]),
	n.create((e) => e.object({ include: e.optional(o) }))
]));
//#endregion
export { a as t };
