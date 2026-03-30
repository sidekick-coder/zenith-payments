import { t as e } from "./chunk-DmhlhrBa.js";
const t = await globalThis.importAsync("#shared/services/validator.service.ts"), n = t.default || t;
//#region modules/mod/shared/validators/productPrice.validator.ts
var r = /* @__PURE__ */ e({
	create: () => a,
	schema: () => i,
	update: () => o
}), i = n.create((e) => e.object({
	gateway_id: e.nullish(e.string()),
	country: e.nullish(e.string()),
	amount: e.number(),
	currency: e.string()
})), a = i, o = n.create((e) => e.partial(i));
//#endregion
export { r as t };
