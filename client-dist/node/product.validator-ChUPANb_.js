import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const __module__validator__ = await globalThis.importAsync("#shared/services/validator.service.ts");
const validator = __module__validator__.default || __module__validator__;
const metadata = await globalThis.importAsync("#shared/validators/metadata.validator.ts");
const url = await globalThis.importAsync("#shared/validators/url.validator.ts");
const pagination = await globalThis.importAsync("#shared/validators/pagination.validator.ts");
//#region modules/mod/shared/validators/product.validator.ts
var product_validator_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	include: () => include,
	index: () => index,
	order: () => order,
	schema: () => schema,
	update: () => update,
	where: () => where
});
var include = validator.create((v) => v.pipe(url.array(), v.array(v.picklist(["prices"]))));
var where = validator.create((v) => v.object({
	search: v.nullish(v.string()),
	metas: v.optional(v.record(v.string(), metadata.filter))
}));
var order = pagination.order({
	defaultOrder: "created_at",
	defaultDirection: "desc",
	allowed: ["created_at", "updated_at"]
});
var index = validator.create((v) => v.intersect([
	pagination.base,
	order,
	where,
	validator.create((v) => v.object({ include: v.optional(include) }))
]));
var schema = validator.create((v) => v.object({
	name: v.string(),
	description: v.nullish(v.string())
}));
var create = schema;
var update = validator.create((v) => v.partial(schema));
//#endregion
export { product_validator_exports as t };
