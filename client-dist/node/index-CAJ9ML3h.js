import { g as gateway } from "./gateway.validator-Dg8ck2K0.js";
import { b as billing } from "./billing.validator-dVip2pCk.js";
import { p as plan } from "./plan.validator-B5t9nelA.js";
import { s as subscription } from "./subscription.validator-Cg3wF_WU.js";
import { p as product } from "./product.validator-a9YdQW9f.js";
import { p as productMeta } from "./productMeta.validator-C3OzGnUM.js";
import { p as productPrice } from "./productPrice.validator-BfJhoA13.js";
import { o as order } from "./order.validator-B-h6n_pn.js";
import { p as payment } from "./payment.validator-DODX1-i2.js";
const __module__root__ = await globalThis.importAsync("#shared/validators/index.ts");
const root = __module__root__.default || __module__root__;
const schemas = {
  ...root,
  payment,
  order,
  gateway,
  billing,
  plan,
  subscription,
  product,
  productMeta,
  productPrice
};
export {
  schemas as default
};
