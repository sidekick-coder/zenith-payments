const o = await globalThis.importAsync("#client/entities/module.entity.ts"), m = o.default || o, r = await globalThis.importAsync("#client/facades/router.facade.ts"), i = r.default || r, n = await globalThis.importAsync("#client/facades/menu.facade.ts"), a = n.default || n, d = await globalThis.importAsync("#client/guards/auth.guard.ts"), u = d.default || d;
class y extends m {
  async onRegister() {
    for (const [e, s] of Object.entries(/* @__PURE__ */ Object.assign({ "./components/GatewayConfig.vue": () => import("./GatewayConfig-C_LP4r90.js"), "./components/GatewayCustomers.vue": () => import("./GatewayCustomers-C7GU7PDc.js"), "./components/GatewayEntityTable.vue": () => import("./GatewayEntityTable-BZ3-nDbO.js"), "./components/GatewaySubscriptions.vue": () => import("./GatewaySubscriptions-BN-3319F.js"), "./components/PlanGatewayLinks.vue": () => import("./PlanGatewayLinks-yOimmSNP.js"), "./components/ProductMetasTable.vue": () => import("./ProductMetasTable-Bgbd8ppy.js"), "./components/ProductPaymentsTable.vue": () => import("./ProductPaymentsTable-BD51O23i.js"), "./components/ProductPricesTable.vue": () => import("./ProductPricesTable-BFmMmiqU.js"), "./components/UserOrdersCard.vue": () => import("./UserOrdersCard-HsecrrRx.js"), "./components/UserOrdersPage.vue": () => import("./UserOrdersPage-NSup5URu.js"), "./components/UserOrdersTable.vue": () => import("./UserOrdersTable-C3hbm4k-.js"), "./components/UserPaymentsTable.vue": () => import("./UserPaymentsTable-CsZUVj9Y.js"), "./layouts/GatewayLayout.vue": () => import("./GatewayLayout-DtURQ47z.js") }))) {
      const t = e.replace("./", "#zpayments/"), p = e.split(".").pop();
      globalThis.imports[t] = s, globalThis.imports[t.replace(`.${p}`, "")] = s;
    }
    for (const [e, s] of Object.entries(/* @__PURE__ */ Object.assign({ "../shared/data/countries.json": () => import("./countries-C9bDipll.js"), "../shared/data/currencies.json": () => import("./currencies-CxlqxawI.js"), "../shared/entities/billing.entity.ts": () => import("./billing.entity-la0Fzlu3.js"), "../shared/entities/gatewayConfig.entity.ts": () => import("./gatewayConfig.entity-DUywytzM.js"), "../shared/entities/gatewayEntity.entity.ts": () => import("./gatewayEntity.entity-DWRIlNyc.js"), "../shared/entities/gatewayEntityAssignment.entity.ts": () => import("./gatewayEntityAssignment.entity-DR3Sa6eU.js"), "../shared/entities/gatewayEntityMeta.entity.ts": () => import("./gatewayEntityMeta.entity-oy7HQ1Bh.js"), "../shared/entities/order.entity.ts": () => import("./order.entity-X244Lp1t.js"), "../shared/entities/orderItem.entity.ts": () => import("./orderItem.entity-Dwbe-V_1.js"), "../shared/entities/payment.entity.ts": () => import("./payment.entity-DTIYwuVL.js"), "../shared/entities/plan.entity.ts": () => import("./plan.entity-bed8wErQ.js"), "../shared/entities/product.entity.ts": () => import("./product.entity-49u26AfL.js"), "../shared/entities/productMeta.entity.ts": () => import("./productMeta.entity-BGuejWQV.js"), "../shared/entities/productPrice.entity.ts": () => import("./productPrice.entity-Bb_psyp9.js"), "../shared/entities/subscription.entity.ts": () => import("./subscription.entity-DIYtBs8Y.js"), "../shared/validators/billing.validator.ts": () => import("./billing.validator-38hE51Is.js").then((t) => t.b), "../shared/validators/gateway.validator.ts": () => import("./gateway.validator-DNnw7-3F.js").then((t) => t.g), "../shared/validators/index.ts": () => import("./index-D8jq18Zg.js"), "../shared/validators/order.validator.ts": () => import("./order.validator-GNHngukB.js").then((t) => t.o), "../shared/validators/payment.validator.ts": () => import("./payment.validator-CThP3Zs7.js").then((t) => t.p), "../shared/validators/plan.validator.ts": () => import("./plan.validator-fL5xIT1j.js").then((t) => t.p), "../shared/validators/product.validator.ts": () => import("./product.validator--IxSQwpG.js").then((t) => t.p), "../shared/validators/productMeta.validator.ts": () => import("./productMeta.validator-CbaIOPJB.js").then((t) => t.p), "../shared/validators/productPrice.validator.ts": () => import("./productPrice.validator-Bt9NxB_i.js").then((t) => t.p), "../shared/validators/subscription.validator.ts": () => import("./subscription.validator-DoADR1cN.js").then((t) => t.s) }))) {
      const t = e.replace("../shared/", "#zpayments/shared/");
      globalThis.imports[t] = s, globalThis.imports[t.replace(".ts", "")] = s;
    }
  }
  async onLoad() {
    i.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-g-htTBzW.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-BoDbLuzC.js"), "./pages/admin/gateways/index.vue": () => import("./index-BqtLjrqp.js"), "./pages/admin/orders/index.vue": () => import("./index-O5e_pkti.js"), "./pages/admin/payments/index.vue": () => import("./index-2S6eC7fo.js"), "./pages/admin/products/[id].vue": () => import("./_id_-BD7hMOEO.js"), "./pages/admin/products/index.vue": () => import("./index-Bk-uSyBe.js"), "./pages/admin/users/[id].vue": () => import("./_id_-D6PmOVqc.js"), "./pages/admin/users/index.vue": () => import("./index-BeKEeu1F.js") }), {
      strip: ["pages", "admin"],
      guards: [u],
      prefix: "/admin/zpayments"
    }), i.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-g-htTBzW.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-BoDbLuzC.js"), "./pages/admin/gateways/index.vue": () => import("./index-BqtLjrqp.js"), "./pages/admin/orders/index.vue": () => import("./index-O5e_pkti.js"), "./pages/admin/payments/index.vue": () => import("./index-2S6eC7fo.js"), "./pages/admin/products/[id].vue": () => import("./_id_-BD7hMOEO.js"), "./pages/admin/products/index.vue": () => import("./index-Bk-uSyBe.js"), "./pages/admin/users/[id].vue": () => import("./_id_-D6PmOVqc.js"), "./pages/admin/users/index.vue": () => import("./index-BeKEeu1F.js"), "./pages/result.vue": () => import("./result-DSHBKVKK.js") }), {
      strip: ["pages"],
      exclude: ["/admin/**"],
      prefix: "/zpayments"
    }), i.addRoute({
      path: "/admin/zpayments/gateways/:id",
      redirect: (e) => `/admin/zpayments/gateways/${e.params.id}/details`
    }), a.add({
      id: "zpayments-payments",
      layout: "admin",
      label: $t("Payments"),
      to: "/admin/zpayments/payments",
      icon: "credit-card",
      group: "ZPayments"
    }), a.add({
      id: "zpayments-orders",
      layout: "admin",
      label: $t("Orders"),
      to: "/admin/zpayments/orders",
      icon: "shopping-cart",
      group: "ZPayments"
    }), a.add({
      id: "zpayments-customers",
      layout: "admin",
      label: $t("Customers"),
      to: "/admin/zpayments/users",
      icon: "users",
      group: "ZPayments"
    }), a.add({
      id: "zpayments-products",
      layout: "admin",
      label: $t("Products"),
      to: "/admin/zpayments/products",
      icon: "box",
      group: "ZPayments"
    }), a.add({
      id: "zpayments-gateways",
      layout: "admin",
      label: $t("Gateways"),
      to: "/admin/zpayments/gateways",
      icon: "credit-card",
      group: "ZPayments"
    }), a.add({
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
  y as default
};
