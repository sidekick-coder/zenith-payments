import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const url = await globalThis.importAsync("#shared/validators/url.validator.ts");
const pagination = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
//#region modules/mod/shared/validators/payment.validator.ts
var payment_validator_exports = /* @__PURE__ */ __exportAll({
	include: () => include,
	index: () => index,
	order: () => order,
	userIndex: () => userIndex,
	where: () => where
});
var include = validator.create((v) => v.pipe(url.array(), v.array(v.picklist(["user"]))));
var where = validator.create((v) => v.object({
	user_id: v.optional(v.pipe(url.array(), v.transform((a) => a.map(Number)), v.array(v.number()))),
	status: v.optional(v.string())
}));
var order = pagination.order({
	defaultOrder: "created_at",
	defaultDirection: "desc",
	allowed: [
		"id",
		"amount",
		"status",
		"created_at",
		"updated_at"
	]
});
var index = validator.create((v) => v.intersect([
	pagination.base,
	order,
	where,
	validator.create((v) => v.object({
		include: v.optional(include),
		start_date: v.optional(url.datetime()),
		end_date: v.optional(url.datetime())
	}))
]));
var userIndex = validator.create((v) => v.intersect([
	pagination.base,
	order,
	v.omit(where, ["user_id"]),
	validator.create((v) => v.object({ include: v.optional(include) }))
]));
//#endregion
export { payment_validator_exports as t };
