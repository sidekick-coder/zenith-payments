import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
//#region modules/mod/shared/validators/subscription.validator.ts
var subscription_validator_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	schema: () => schema,
	update: () => update
});
var schema = validator.create((v) => v.object({
	user_id: v.number(),
	plan_id: v.number(),
	amount: v.optional(v.number())
}));
var create = schema;
var update = validator.create((v) => v.partial(v.omit(schema, ["user_id", "plan_id"])));
//#endregion
export { subscription_validator_exports as t };
