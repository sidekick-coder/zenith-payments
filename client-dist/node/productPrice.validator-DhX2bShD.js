import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
//#region modules/mod/shared/validators/productPrice.validator.ts
var productPrice_validator_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	schema: () => schema,
	update: () => update
});
var schema = validator.create((v) => v.object({
	gateway_id: v.nullish(v.string()),
	country: v.nullish(v.string()),
	amount: v.number(),
	currency: v.string()
}));
var create = schema;
var update = validator.create((v) => v.partial(schema));
//#endregion
export { productPrice_validator_exports as t };
