import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
//#region modules/mod/shared/validators/billing.validator.ts
var billing_validator_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	schema: () => schema,
	update: () => update
});
var schema = validator.create((v) => v.object({
	user_id: v.number(),
	purpose: v.string(),
	amount: v.number()
}));
var create = schema;
var update = validator.create((v) => v.partial(schema));
//#endregion
export { billing_validator_exports as t };
