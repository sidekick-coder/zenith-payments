const __module__Module__ = await globalThis.importAsync("#client/entities/module.entity.ts");
const Module = __module__Module__.default || __module__Module__;
const __module__router__ = await globalThis.importAsync("#client/facades/router.facade.ts");
const router = __module__router__.default || __module__router__;
const __module__menu__ = await globalThis.importAsync("#client/facades/menu.facade.ts");
const menu = __module__menu__.default || __module__menu__;
const __module__authGuard__ = await globalThis.importAsync("#client/guards/auth.guard.ts");
const authGuard = __module__authGuard__.default || __module__authGuard__;
//#region modules/mod/client/module.client.ts
var ZenithPayments = class extends Module {
	async onRegister() {
		for (const [path, importFn] of Object.entries(/* @__PURE__ */ Object.assign({
			"./components/GatewayConfig.vue": () => import("./GatewayConfig-BkvC5CIn.js"),
			"./components/GatewayCustomers.vue": () => import("./GatewayCustomers-Cte1Hl-X.js"),
			"./components/GatewayEntityTable.vue": () => import("./GatewayEntityTable-mZJESWTI.js").then((n) => n.n),
			"./components/GatewaySubscriptions.vue": () => import("./GatewaySubscriptions-CW0yHIVx.js"),
			"./components/PlanGatewayLinks.vue": () => import("./PlanGatewayLinks-Dk34j1rA.js"),
			"./components/ProductMetasTable.vue": () => import("./ProductMetasTable-CEAMj1F0.js"),
			"./components/ProductPaymentsTable.vue": () => import("./ProductPaymentsTable-Cox0r_Ua.js").then((n) => n.n),
			"./components/ProductPricesTable.vue": () => import("./ProductPricesTable-ojhpxGME.js"),
			"./components/UserOrdersCard.vue": () => import("./UserOrdersCard-Y8XPqYeG.js").then((n) => n.n),
			"./components/UserOrdersPage.vue": () => import("./UserOrdersPage-B3VWvP0I.js"),
			"./components/UserOrdersTable.vue": () => import("./UserOrdersTable-BBWVtFM_.js").then((n) => n.n),
			"./components/UserPaymentsTable.vue": () => import("./UserPaymentsTable-B_hAt7L-.js").then((n) => n.n),
			"./layouts/GatewayLayout.vue": () => import("./GatewayLayout-hv2QJ6Xs.js")
		}))) {
			const id = path.replace("./", "#zpayments/");
			const ext = path.split(".").pop();
			globalThis.imports[id] = importFn;
			globalThis.imports[id.replace(`.${ext}`, "")] = importFn;
		}
		for (const [path, mod] of Object.entries(/* @__PURE__ */ Object.assign({
			"../shared/data/countries.json": () => import("./countries-CNSCXSzK.js").then((n) => n.n),
			"../shared/data/currencies.json": () => import("./currencies-DlM8DgYB.js").then((n) => n.n),
			"../shared/entities/billing.entity.ts": () => import("./billing.entity-DlGjYbZX.js"),
			"../shared/entities/gatewayConfig.entity.ts": () => import("./gatewayConfig.entity-C1BWyIfg.js").then((n) => n.n),
			"../shared/entities/gatewayEntity.entity.ts": () => import("./gatewayEntity.entity-Bed37LiQ.js").then((n) => n.n),
			"../shared/entities/gatewayEntityAssignment.entity.ts": () => import("./gatewayEntityAssignment.entity-u15o-mJt.js"),
			"../shared/entities/gatewayEntityMeta.entity.ts": () => import("./gatewayEntityMeta.entity-V6rVgRIZ.js"),
			"../shared/entities/order.entity.ts": () => import("./order.entity-D0LrhL0v.js").then((n) => n.n),
			"../shared/entities/orderItem.entity.ts": () => import("./orderItem.entity-W-MbvyHP.js"),
			"../shared/entities/payment.entity.ts": () => import("./payment.entity-C8MZ-nWH.js").then((n) => n.n),
			"../shared/entities/plan.entity.ts": () => import("./plan.entity-mguYIJTZ.js"),
			"../shared/entities/product.entity.ts": () => import("./product.entity-BEnW3LQp.js"),
			"../shared/entities/productMeta.entity.ts": () => import("./productMeta.entity-BVJeCqkl.js").then((n) => n.n),
			"../shared/entities/productPrice.entity.ts": () => import("./productPrice.entity-DzaQyUUM.js").then((n) => n.n),
			"../shared/entities/subscription.entity.ts": () => import("./subscription.entity--zEjZTsB.js"),
			"../shared/validators/billing.validator.ts": () => import("./billing.validator-DS9CNRQE.js").then((n) => n.t),
			"../shared/validators/gateway.validator.ts": () => import("./gateway.validator-D4IK0r1P.js").then((n) => n.t),
			"../shared/validators/index.ts": () => import("./validators-_rfSbN0z.js"),
			"../shared/validators/order.validator.ts": () => import("./order.validator-RgCOY20S.js").then((n) => n.t),
			"../shared/validators/payment.validator.ts": () => import("./payment.validator-CW297zSl.js").then((n) => n.t),
			"../shared/validators/plan.validator.ts": () => import("./plan.validator-Co2aFKeU.js").then((n) => n.t),
			"../shared/validators/product.validator.ts": () => import("./product.validator-ChUPANb_.js").then((n) => n.t),
			"../shared/validators/productMeta.validator.ts": () => import("./productMeta.validator-DW9d8l1r.js").then((n) => n.t),
			"../shared/validators/productPrice.validator.ts": () => import("./productPrice.validator-DhX2bShD.js").then((n) => n.t),
			"../shared/validators/subscription.validator.ts": () => import("./subscription.validator-DalGQijs.js").then((n) => n.t)
		}))) {
			const id = path.replace("../shared/", "#zpayments/shared/");
			globalThis.imports[id] = mod;
			globalThis.imports[id.replace(".ts", "")] = mod;
		}
	}
	async onLoad() {
		router.auto(/* @__PURE__ */ Object.assign({
			"./pages/admin/gateway-entities/index.vue": () => import("./gateway-entities-8RtoHfda.js"),
			"./pages/admin/gateways/[id].vue": () => import("./_id_-DGyfenYb.js"),
			"./pages/admin/gateways/index.vue": () => import("./gateways-DNiQFEtq.js"),
			"./pages/admin/orders/index.vue": () => import("./orders--HrxaXsW.js"),
			"./pages/admin/payments/index.vue": () => import("./payments-DezRTMHV.js"),
			"./pages/admin/products/[id].vue": () => import("./_id_-BA9gtuq2.js"),
			"./pages/admin/products/index.vue": () => import("./products-CM_goZys.js"),
			"./pages/admin/users/[id].vue": () => import("./_id_-ytPvlk3_.js"),
			"./pages/admin/users/index.vue": () => import("./users-J_4GrMkL.js")
		}), {
			strip: ["pages", "admin"],
			guards: [authGuard],
			prefix: "/admin/zpayments"
		});
		router.auto(/* @__PURE__ */ Object.assign({
			"./pages/admin/gateway-entities/index.vue": () => import("./gateway-entities-8RtoHfda.js"),
			"./pages/admin/gateways/[id].vue": () => import("./_id_-DGyfenYb.js"),
			"./pages/admin/gateways/index.vue": () => import("./gateways-DNiQFEtq.js"),
			"./pages/admin/orders/index.vue": () => import("./orders--HrxaXsW.js"),
			"./pages/admin/payments/index.vue": () => import("./payments-DezRTMHV.js"),
			"./pages/admin/products/[id].vue": () => import("./_id_-BA9gtuq2.js"),
			"./pages/admin/products/index.vue": () => import("./products-CM_goZys.js"),
			"./pages/admin/users/[id].vue": () => import("./_id_-ytPvlk3_.js"),
			"./pages/admin/users/index.vue": () => import("./users-J_4GrMkL.js"),
			"./pages/result.vue": () => import("./result-CvPC90gC.js")
		}), {
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
};
//#endregion
export { ZenithPayments as default };
