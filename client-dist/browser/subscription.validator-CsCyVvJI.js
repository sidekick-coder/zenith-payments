import { t as e } from "./chunk-DmhlhrBa.js";
const t = await globalThis.importAsync("#shared/services/validator.service.ts"), n = t.default || t;
//#region modules/mod/shared/validators/subscription.validator.ts
var r = /* @__PURE__ */ e({
	create: () => a,
	schema: () => i,
	update: () => o
}), i = n.create((e) => e.object({
	user_id: e.number(),
	plan_id: e.number(),
	amount: e.optional(e.number())
})), a = i, o = n.create((e) => e.partial(e.omit(i, ["user_id", "plan_id"])));
//#endregion
export { r as t };
