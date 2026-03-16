const __module__Module__ = await globalThis.importAsync("#client/entities/module.entity.ts");
const Module = __module__Module__.default || __module__Module__;
const __module__router__ = await globalThis.importAsync("#client/facades/router.facade.ts");
const router = __module__router__.default || __module__router__;
const __module__menu__ = await globalThis.importAsync("#client/facades/menu.facade.ts");
const menu = __module__menu__.default || __module__menu__;
const __module__authGuard__ = await globalThis.importAsync("#client/guards/auth.guard.ts");
const authGuard = __module__authGuard__.default || __module__authGuard__;
class ZenithPayments extends Module {
  async onRegister() {
    for (const [path, importFn] of Object.entries(/* @__PURE__ */ Object.assign({ "./components/GatewayConfig.vue": () => import("./GatewayConfig-CRvhzHWv.js"), "./components/GatewayCustomers.vue": () => import("./GatewayCustomers-CzKyfTeB.js"), "./components/GatewayEntityTable.vue": () => import("./GatewayEntityTable-HxIAD7eA.js"), "./components/GatewaySubscriptions.vue": () => import("./GatewaySubscriptions-Bv_WPZBJ.js"), "./components/PlanGatewayLinks.vue": () => import("./PlanGatewayLinks-CSKQUxNs.js"), "./components/ProductMetasTable.vue": () => import("./ProductMetasTable-hSgfPxKG.js"), "./components/ProductPaymentsTable.vue": () => import("./ProductPaymentsTable-BYiGJuye.js"), "./components/ProductPricesTable.vue": () => import("./ProductPricesTable-BhB_oC53.js"), "./components/UserOrdersCard.vue": () => import("./UserOrdersCard-ws9gbHVC.js"), "./components/UserOrdersPage.vue": () => import("./UserOrdersPage-CDeSxQ7Y.js"), "./components/UserOrdersTable.vue": () => import("./UserOrdersTable-Cj_ZwdT1.js"), "./components/UserPaymentsTable.vue": () => import("./UserPaymentsTable-D4U_9Mlk.js"), "./layouts/GatewayLayout.vue": () => import("./GatewayLayout-D01IWiqr.js") }))) {
      const id = path.replace("./", "#zpayments/");
      const ext = path.split(".").pop();
      globalThis.imports[id] = importFn;
      globalThis.imports[id.replace(`.${ext}`, "")] = importFn;
    }
    for (const [path, mod] of Object.entries(/* @__PURE__ */ Object.assign({ "../shared/data/countries.json": () => import("./countries-V3nDIGlS.js"), "../shared/data/currencies.json": () => import("./currencies-D4ptYxqb.js"), "../shared/entities/billing.entity.ts": () => import("./billing.entity-CDGie5BV.js"), "../shared/entities/gatewayConfig.entity.ts": () => import("./gatewayConfig.entity-Nc81nVpp.js"), "../shared/entities/gatewayEntity.entity.ts": () => import("./gatewayEntity.entity-C_H1fRiP.js"), "../shared/entities/gatewayEntityAssignment.entity.ts": () => import("./gatewayEntityAssignment.entity-B4WBF_1M.js"), "../shared/entities/gatewayEntityMeta.entity.ts": () => import("./gatewayEntityMeta.entity-C91piMQe.js"), "../shared/entities/order.entity.ts": () => import("./order.entity-CBgThORh.js"), "../shared/entities/orderItem.entity.ts": () => import("./orderItem.entity-7NRf7t4O.js"), "../shared/entities/payment.entity.ts": () => import("./payment.entity-KMHn9B1h.js"), "../shared/entities/plan.entity.ts": () => import("./plan.entity-DpxKFC12.js"), "../shared/entities/product.entity.ts": () => import("./product.entity-vzXes18d.js"), "../shared/entities/productMeta.entity.ts": () => import("./productMeta.entity-DUdD-13s.js"), "../shared/entities/productPrice.entity.ts": () => import("./productPrice.entity-BooxFwMI.js"), "../shared/entities/subscription.entity.ts": () => import("./subscription.entity-DwbJ6Sqk.js"), "../shared/validators/billing.validator.ts": () => import("./billing.validator-dVip2pCk.js").then((n) => n.b), "../shared/validators/gateway.validator.ts": () => import("./gateway.validator-Dg8ck2K0.js").then((n) => n.g), "../shared/validators/index.ts": () => import("./index-BjLGGSF7.js"), "../shared/validators/order.validator.ts": () => import("./order.validator-B-h6n_pn.js").then((n) => n.o), "../shared/validators/payment.validator.ts": () => import("./payment.validator-CuKE-v3m.js").then((n) => n.p), "../shared/validators/plan.validator.ts": () => import("./plan.validator-B5t9nelA.js").then((n) => n.p), "../shared/validators/product.validator.ts": () => import("./product.validator-a9YdQW9f.js").then((n) => n.p), "../shared/validators/productMeta.validator.ts": () => import("./productMeta.validator-C3OzGnUM.js").then((n) => n.p), "../shared/validators/productPrice.validator.ts": () => import("./productPrice.validator-BfJhoA13.js").then((n) => n.p), "../shared/validators/subscription.validator.ts": () => import("./subscription.validator-Cg3wF_WU.js").then((n) => n.s) }))) {
      const id = path.replace("../shared/", "#zpayments/shared/");
      globalThis.imports[id] = mod;
      globalThis.imports[id.replace(".ts", "")] = mod;
    }
  }
  async onLoad() {
    router.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-ZSgqCpOJ.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-CVUHWa5r.js"), "./pages/admin/gateways/index.vue": () => import("./index-Dye8Xjc0.js"), "./pages/admin/orders/index.vue": () => import("./index-D-UYB28x.js"), "./pages/admin/payments/index.vue": () => import("./index-CAtJP_qK.js"), "./pages/admin/products/[id].vue": () => import("./_id_-DRMEEB5Q.js"), "./pages/admin/products/index.vue": () => import("./index-l45qSI4R.js"), "./pages/admin/users/[id].vue": () => import("./_id_-BG5ITZd3.js"), "./pages/admin/users/index.vue": () => import("./index-DK4Me8q2.js") }), {
      strip: ["pages", "admin"],
      guards: [authGuard],
      prefix: "/admin/zpayments"
    });
    router.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-ZSgqCpOJ.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-CVUHWa5r.js"), "./pages/admin/gateways/index.vue": () => import("./index-Dye8Xjc0.js"), "./pages/admin/orders/index.vue": () => import("./index-D-UYB28x.js"), "./pages/admin/payments/index.vue": () => import("./index-CAtJP_qK.js"), "./pages/admin/products/[id].vue": () => import("./_id_-DRMEEB5Q.js"), "./pages/admin/products/index.vue": () => import("./index-l45qSI4R.js"), "./pages/admin/users/[id].vue": () => import("./_id_-BG5ITZd3.js"), "./pages/admin/users/index.vue": () => import("./index-DK4Me8q2.js"), "./pages/result.vue": () => import("./result-BSd6FhWL.js") }), {
      strip: ["pages"],
      exclude: ["/admin/**"],
      prefix: "/zpayments"
    });
    router.addRoute({
      path: "/admin/zpayments/gateways/:id",
      redirect: (to) => {
        return `/admin/zpayments/gateways/${to.params.id}/details`;
      }
    });
    menu.add({
      id: "zpayments-payments",
      layout: "admin",
      label: $t("Payments"),
      to: "/admin/zpayments/payments",
      icon: "credit-card",
      group: "ZPayments"
    });
    menu.add({
      id: "zpayments-orders",
      layout: "admin",
      label: $t("Orders"),
      to: "/admin/zpayments/orders",
      icon: "shopping-cart",
      group: "ZPayments"
    });
    menu.add({
      id: "zpayments-customers",
      layout: "admin",
      label: $t("Customers"),
      to: "/admin/zpayments/users",
      icon: "users",
      group: "ZPayments"
    });
    menu.add({
      id: "zpayments-products",
      layout: "admin",
      label: $t("Products"),
      to: "/admin/zpayments/products",
      icon: "box",
      group: "ZPayments"
    });
    menu.add({
      id: "zpayments-gateways",
      layout: "admin",
      label: $t("Gateways"),
      to: "/admin/zpayments/gateways",
      icon: "credit-card",
      group: "ZPayments"
    });
    menu.add({
      id: "zpayments-gateway-entities",
      layout: "admin",
      label: $t("Entities"),
      to: "/admin/zpayments/gateway-entities",
      icon: "database",
      group: "ZPayments"
    });
  }
}
export {
  ZenithPayments as default
};
