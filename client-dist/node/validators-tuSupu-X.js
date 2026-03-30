import { t as gateway_validator_exports } from "./gateway.validator-D4IK0r1P.js";
import { t as billing_validator_exports } from "./billing.validator-DS9CNRQE.js";
import { t as plan_validator_exports } from "./plan.validator-Co2aFKeU.js";
import { t as subscription_validator_exports } from "./subscription.validator-DalGQijs.js";
import { t as product_validator_exports } from "./product.validator-ChUPANb_.js";
import { t as productMeta_validator_exports } from "./productMeta.validator-DW9d8l1r.js";
import { t as productPrice_validator_exports } from "./productPrice.validator-DhX2bShD.js";
import { t as order_validator_exports } from "./order.validator-RgCOY20S.js";
import { t as payment_validator_exports } from "./payment.validator-CW297zSl.js";
const __module__root__ = await globalThis.importAsync("#shared/validators/index.ts");
//#region modules/mod/shared/validators/index.ts
var schemas = {
	...__module__root__.default || __module__root__,
	payment: payment_validator_exports,
	order: order_validator_exports,
	gateway: gateway_validator_exports,
	billing: billing_validator_exports,
	plan: plan_validator_exports,
	subscription: subscription_validator_exports,
	product: product_validator_exports,
	productMeta: productMeta_validator_exports,
	productPrice: productPrice_validator_exports
};
//#endregion
export { schemas as t };
