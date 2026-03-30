import { t as e } from "./chunk-DmhlhrBa.js";
const t = await globalThis.importAsync("#shared/services/validator.service.ts"), n = t.default || t;
//#region modules/mod/shared/validators/gateway.validator.ts
var r = /* @__PURE__ */ e({
	create: () => a,
	schema: () => i,
	update: () => o
}), i = n.create((e) => e.object({
	id: e.string(),
	name: e.string(),
	description: e.optional(e.string()),
	gateway: e.string(),
	config: e.optional(e.record(e.string(), e.any()))
})), a = i, o = n.create((e) => e.partial(i));
//#endregion
export { r as t };
