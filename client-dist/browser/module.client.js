const e = await globalThis.importAsync("#client/entities/module.entity.ts"), t = e.default || e, n = await globalThis.importAsync("#client/facades/router.facade.ts"), r = n.default || n, i = await globalThis.importAsync("#client/facades/menu.facade.ts"), a = i.default || i, o = await globalThis.importAsync("#client/guards/auth.guard.ts"), s = o.default || o;
//#region modules/mod/client/module.client.ts
var c = class extends t {
	async onRegister() {
		for (let [e, t] of Object.entries(/* @__PURE__ */ Object.assign({
			"./components/GatewayConfig.vue": () => import("./GatewayConfig-D1POPdPN.js"),
			"./components/GatewayCustomers.vue": () => import("./GatewayCustomers-C-nprIGT.js"),
			"./components/GatewayEntityTable.vue": () => import("./GatewayEntityTable-B6dX7I5k.js").then((e) => e.n),
			"./components/GatewaySubscriptions.vue": () => import("./GatewaySubscriptions-D0EtDuu7.js"),
			"./components/PlanGatewayLinks.vue": () => import("./PlanGatewayLinks-Cbj-Lczf.js"),
			"./components/ProductMetasTable.vue": () => import("./ProductMetasTable-5neSwaMM.js"),
			"./components/ProductPaymentsTable.vue": () => import("./ProductPaymentsTable-CCDAihJx.js").then((e) => e.n),
			"./components/ProductPricesTable.vue": () => import("./ProductPricesTable-Cr7fhWuz.js"),
			"./components/UserOrdersCard.vue": () => import("./UserOrdersCard-qiHSRmLu.js").then((e) => e.n),
			"./components/UserOrdersPage.vue": () => import("./UserOrdersPage-BnGCsE3E.js"),
			"./components/UserOrdersTable.vue": () => import("./UserOrdersTable-DQxb9jfu.js").then((e) => e.n),
			"./components/UserPaymentsTable.vue": () => import("./UserPaymentsTable-Ck-4E8XA.js").then((e) => e.n),
			"./layouts/GatewayLayout.vue": () => import("./GatewayLayout-C4q7Mz6i.js")
		}))) {
			let n = e.replace("./", "#zpayments/"), r = e.split(".").pop();
			globalThis.imports[n] = t, globalThis.imports[n.replace(`.${r}`, "")] = t;
		}
		for (let [e, t] of Object.entries(/* @__PURE__ */ Object.assign({
			"../shared/data/countries.json": () => import("./countries-CBBqQFay.js").then((e) => e.n),
			"../shared/data/currencies.json": () => import("./currencies-D0_IzH7E.js").then((e) => e.n),
			"../shared/entities/billing.entity.ts": () => import("./billing.entity-MX_QtpWh.js"),
			"../shared/entities/gatewayConfig.entity.ts": () => import("./gatewayConfig.entity-CU54VVHj.js").then((e) => e.n),
			"../shared/entities/gatewayEntity.entity.ts": () => import("./gatewayEntity.entity-BLW5x_M3.js").then((e) => e.n),
			"../shared/entities/gatewayEntityAssignment.entity.ts": () => import("./gatewayEntityAssignment.entity-BAG4u9Tp.js"),
			"../shared/entities/gatewayEntityMeta.entity.ts": () => import("./gatewayEntityMeta.entity-D7wFRVRd.js"),
			"../shared/entities/order.entity.ts": () => import("./order.entity-MK6wmEzS.js").then((e) => e.n),
			"../shared/entities/orderItem.entity.ts": () => import("./orderItem.entity-DjULDDYM.js"),
			"../shared/entities/payment.entity.ts": () => import("./payment.entity-BbwelBtU.js").then((e) => e.n),
			"../shared/entities/plan.entity.ts": () => import("./plan.entity-C-kdRqJo.js"),
			"../shared/entities/product.entity.ts": () => import("./product.entity-DIQXq6CT.js"),
			"../shared/entities/productMeta.entity.ts": () => import("./productMeta.entity-DpsHMh7o.js").then((e) => e.n),
			"../shared/entities/productPrice.entity.ts": () => import("./productPrice.entity-Duw_iyHe.js").then((e) => e.n),
			"../shared/entities/subscription.entity.ts": () => import("./subscription.entity-DZvRLu0q.js"),
			"../shared/validators/billing.validator.ts": () => import("./billing.validator-Dl2bU7Sm.js").then((e) => e.t),
			"../shared/validators/gateway.validator.ts": () => import("./gateway.validator-CPCVXnEO.js").then((e) => e.t),
			"../shared/validators/index.ts": () => import("./validators-DYe0pUUO.js"),
			"../shared/validators/order.validator.ts": () => import("./order.validator-CgVRIMhK.js").then((e) => e.t),
			"../shared/validators/payment.validator.ts": () => import("./payment.validator-D-9QKFL_.js").then((e) => e.t),
			"../shared/validators/plan.validator.ts": () => import("./plan.validator-C20zmZQK.js").then((e) => e.t),
			"../shared/validators/product.validator.ts": () => import("./product.validator-cJxmEfx6.js").then((e) => e.t),
			"../shared/validators/productMeta.validator.ts": () => import("./productMeta.validator-CdTGFlfO.js").then((e) => e.t),
			"../shared/validators/productPrice.validator.ts": () => import("./productPrice.validator-d3_680Hu.js").then((e) => e.t),
			"../shared/validators/subscription.validator.ts": () => import("./subscription.validator-CsCyVvJI.js").then((e) => e.t)
		}))) {
			let n = e.replace("../shared/", "#zpayments/shared/");
			globalThis.imports[n] = t, globalThis.imports[n.replace(".ts", "")] = t;
		}
	}
	async onLoad() {
		r.auto(/* @__PURE__ */ Object.assign({
			"./pages/admin/gateway-entities/index.vue": () => import("./gateway-entities-BMl_Or3m.js"),
			"./pages/admin/gateways/[id].vue": () => import("./_id_-BTAb1SuO.js"),
			"./pages/admin/gateways/index.vue": () => import("./gateways-CYDsExMr.js"),
			"./pages/admin/orders/index.vue": () => import("./orders-DuCullKZ.js"),
			"./pages/admin/payments/index.vue": () => import("./payments-bblwhG_P.js"),
			"./pages/admin/products/[id].vue": () => import("./_id_-Z9U087ct.js"),
			"./pages/admin/products/index.vue": () => import("./products-CGVdssgs.js"),
			"./pages/admin/users/[id].vue": () => import("./_id_-z9WWf9mM.js"),
			"./pages/admin/users/index.vue": () => import("./users-BGmApbwu.js")
		}), {
			strip: ["pages", "admin"],
			guards: [s],
			prefix: "/admin/zpayments"
		}), r.auto(/* @__PURE__ */ Object.assign({
			"./pages/admin/gateway-entities/index.vue": () => import("./gateway-entities-BMl_Or3m.js"),
			"./pages/admin/gateways/[id].vue": () => import("./_id_-BTAb1SuO.js"),
			"./pages/admin/gateways/index.vue": () => import("./gateways-CYDsExMr.js"),
			"./pages/admin/orders/index.vue": () => import("./orders-DuCullKZ.js"),
			"./pages/admin/payments/index.vue": () => import("./payments-bblwhG_P.js"),
			"./pages/admin/products/[id].vue": () => import("./_id_-Z9U087ct.js"),
			"./pages/admin/products/index.vue": () => import("./products-CGVdssgs.js"),
			"./pages/admin/users/[id].vue": () => import("./_id_-z9WWf9mM.js"),
			"./pages/admin/users/index.vue": () => import("./users-BGmApbwu.js"),
			"./pages/result.vue": () => import("./result-BGbJ4KtH.js")
		}), {
			strip: ["pages"],
			exclude: ["/admin/**"],
			prefix: "/zpayments"
		}), r.addRoute({
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
};
//#endregion
export { c as default };
