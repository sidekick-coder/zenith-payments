const { useMenu: d } = await globalThis.importAsync("#client/composables/useMenu.ts"), i = await globalThis.importAsync("#client/entities/module.entity.ts"), p = i.default || i, r = await globalThis.importAsync("#client/facades/router.facade.ts"), s = r.default || r, o = await globalThis.importAsync("#client/guards/auth.guard.ts"), m = o.default || o;
class c extends p {
  async onRegister() {
    for (const [e, a] of Object.entries(/* @__PURE__ */ Object.assign({ "./components/GatewayConfig.vue": () => import("./GatewayConfig-CTgTUmQJ.js"), "./components/GatewayCustomers.vue": () => import("./GatewayCustomers-BAopvjmk.js"), "./components/GatewayEntityTable.vue": () => import("./GatewayEntityTable-BZ3-nDbO.js"), "./components/GatewaySubscriptions.vue": () => import("./GatewaySubscriptions-BNL3hLWE.js"), "./components/PlanGatewayLinks.vue": () => import("./PlanGatewayLinks-yOimmSNP.js"), "./components/ProductMetasTable.vue": () => import("./ProductMetasTable-u_-17wip.js"), "./components/ProductPaymentsTable.vue": () => import("./ProductPaymentsTable-BD51O23i.js"), "./components/ProductPricesTable.vue": () => import("./ProductPricesTable-CYUEpBeg.js"), "./components/UserOrdersCard.vue": () => import("./UserOrdersCard-HsecrrRx.js"), "./components/UserOrdersPage.vue": () => import("./UserOrdersPage-NSup5URu.js"), "./components/UserOrdersTable.vue": () => import("./UserOrdersTable-C3hbm4k-.js"), "./components/UserPaymentsTable.vue": () => import("./UserPaymentsTable-CsZUVj9Y.js"), "./layouts/GatewayLayout.vue": () => import("./GatewayLayout-D4LqV-KD.js") }))) {
      const t = e.replace("./", "#zpayments/"), n = e.split(".").pop();
      globalThis.imports[t] = a, globalThis.imports[t.replace(`.${n}`, "")] = a;
    }
    for (const [e, a] of Object.entries(/* @__PURE__ */ Object.assign({ "../shared/data/countries.json": () => import("./countries-C9bDipll.js"), "../shared/data/currencies.json": () => import("./currencies-CxlqxawI.js"), "../shared/entities/billing.entity.ts": () => import("./billing.entity-la0Fzlu3.js"), "../shared/entities/gatewayConfig.entity.ts": () => import("./gatewayConfig.entity-DUywytzM.js"), "../shared/entities/gatewayEntity.entity.ts": () => import("./gatewayEntity.entity-DWRIlNyc.js"), "../shared/entities/gatewayEntityAssignment.entity.ts": () => import("./gatewayEntityAssignment.entity-DR3Sa6eU.js"), "../shared/entities/gatewayEntityMeta.entity.ts": () => import("./gatewayEntityMeta.entity-oy7HQ1Bh.js"), "../shared/entities/order.entity.ts": () => import("./order.entity-X244Lp1t.js"), "../shared/entities/orderItem.entity.ts": () => import("./orderItem.entity-Dwbe-V_1.js"), "../shared/entities/payment.entity.ts": () => import("./payment.entity-DTIYwuVL.js"), "../shared/entities/plan.entity.ts": () => import("./plan.entity-bed8wErQ.js"), "../shared/entities/product.entity.ts": () => import("./product.entity-49u26AfL.js"), "../shared/entities/productMeta.entity.ts": () => import("./productMeta.entity-BGuejWQV.js"), "../shared/entities/productPrice.entity.ts": () => import("./productPrice.entity-Bb_psyp9.js"), "../shared/entities/subscription.entity.ts": () => import("./subscription.entity-DIYtBs8Y.js"), "../shared/validators/billing.validator.ts": () => import("./billing.validator-38hE51Is.js").then((t) => t.b), "../shared/validators/gateway.validator.ts": () => import("./gateway.validator-DNnw7-3F.js").then((t) => t.g), "../shared/validators/index.ts": () => import("./index-C5jCdUgN.js"), "../shared/validators/order.validator.ts": () => import("./order.validator-GNHngukB.js").then((t) => t.o), "../shared/validators/payment.validator.ts": () => import("./payment.validator-BI9GDMuI.js").then((t) => t.p), "../shared/validators/plan.validator.ts": () => import("./plan.validator-fL5xIT1j.js").then((t) => t.p), "../shared/validators/product.validator.ts": () => import("./product.validator--IxSQwpG.js").then((t) => t.p), "../shared/validators/productMeta.validator.ts": () => import("./productMeta.validator-CbaIOPJB.js").then((t) => t.p), "../shared/validators/productPrice.validator.ts": () => import("./productPrice.validator-Bt9NxB_i.js").then((t) => t.p), "../shared/validators/subscription.validator.ts": () => import("./subscription.validator-DoADR1cN.js").then((t) => t.s) }))) {
      const t = e.replace("../shared/", "#zpayments/shared/");
      globalThis.imports[t] = a, globalThis.imports[t.replace(".ts", "")] = a;
    }
  }
  async onLoad() {
    const e = d();
    s.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-B-7MmZOD.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-CLPlYp_1.js"), "./pages/admin/gateways/index.vue": () => import("./index-BQY11TRU.js"), "./pages/admin/orders/index.vue": () => import("./index-Cx9_0lhj.js"), "./pages/admin/payments/index.vue": () => import("./index--7M8jGp-.js"), "./pages/admin/products/[id].vue": () => import("./_id_-Bnh1t6g0.js"), "./pages/admin/products/index.vue": () => import("./index-BZDBxt0d.js"), "./pages/admin/users/[id].vue": () => import("./_id_-CP6ciPO8.js"), "./pages/admin/users/index.vue": () => import("./index-cMWPBI5e.js") }), {
      strip: ["pages", "admin"],
      guards: [m],
      prefix: "/admin/zpayments"
    }), s.auto(/* @__PURE__ */ Object.assign({ "./pages/admin/gateway-entities/index.vue": () => import("./index-B-7MmZOD.js"), "./pages/admin/gateways/[id].vue": () => import("./_id_-CLPlYp_1.js"), "./pages/admin/gateways/index.vue": () => import("./index-BQY11TRU.js"), "./pages/admin/orders/index.vue": () => import("./index-Cx9_0lhj.js"), "./pages/admin/payments/index.vue": () => import("./index--7M8jGp-.js"), "./pages/admin/products/[id].vue": () => import("./_id_-Bnh1t6g0.js"), "./pages/admin/products/index.vue": () => import("./index-BZDBxt0d.js"), "./pages/admin/users/[id].vue": () => import("./_id_-CP6ciPO8.js"), "./pages/admin/users/index.vue": () => import("./index-cMWPBI5e.js"), "./pages/result.vue": () => import("./result-DSHBKVKK.js") }), {
      strip: ["pages"],
      exclude: ["/admin/**"],
      prefix: "/zpayments"
    }), s.addRoute({
      path: "/admin/zpayments/gateways/:id",
      redirect: (a) => `/admin/zpayments/gateways/${a.params.id}/details`
    }), e.add({
      id: "zpayments-payments",
      label: $t("Payments"),
      to: "/admin/zpayments/payments",
      icon: "credit-card",
      group: "ZPayments"
    }), e.add({
      id: "zpayments-orders",
      label: $t("Orders"),
      to: "/admin/zpayments/orders",
      icon: "shopping-cart",
      group: "ZPayments"
    }), e.add({
      id: "zpayments-customers",
      label: $t("Customers"),
      to: "/admin/zpayments/users",
      icon: "users",
      group: "ZPayments"
    }), e.add({
      id: "zpayments-products",
      label: $t("Products"),
      to: "/admin/zpayments/products",
      icon: "box",
      group: "ZPayments"
    }), e.add({
      id: "zpayments-gateways",
      label: $t("Gateways"),
      to: "/admin/zpayments/gateways",
      icon: "credit-card",
      group: "ZPayments"
    }), e.add({
      id: "zpayments-gateway-entities",
      label: $t("Entities"),
      to: "/admin/zpayments/gateway-entities",
      icon: "database",
      group: "ZPayments"
    });
  }
}
export {
  c as default
};
