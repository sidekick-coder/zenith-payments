import { t as e } from "./gatewayConfig.entity-CU54VVHj.js";
const { Fragment: t } = await globalThis.importAsync("vue"), { computed: n } = await globalThis.importAsync("vue"), { createBlock: r } = await globalThis.importAsync("vue"), { createCommentVNode: i } = await globalThis.importAsync("vue"), { createElementBlock: a } = await globalThis.importAsync("vue"), { createElementVNode: o } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { createVNode: c } = await globalThis.importAsync("vue"), { defineComponent: l } = await globalThis.importAsync("vue"), { onMounted: u } = await globalThis.importAsync("vue"), { openBlock: d } = await globalThis.importAsync("vue"), { renderList: f } = await globalThis.importAsync("vue"), { renderSlot: p } = await globalThis.importAsync("vue"), { toDisplayString: m } = await globalThis.importAsync("vue"), { unref: h } = await globalThis.importAsync("vue"), { useModel: g } = await globalThis.importAsync("vue"), { withCtx: _ } = await globalThis.importAsync("vue"), { Card: v } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: y } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: b } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: x } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: S } = await globalThis.importAsync("#client/components/ui/card"), C = await globalThis.importAsync("#client/components/Button.vue"), w = C.default || C, { useRoute: T } = await globalThis.importAsync("vue-router"), E = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), D = E.default || E, { $fetch: O } = await globalThis.importAsync("#client/utils");
//#region modules/mod/client/layouts/GatewayLayout.vue?vue&type=script&setup=true&lang.ts
var k = { class: "flex [&>*]:px-4 -mx-4" }, A = { class: "w-full md:w-6/12 lg:w-4/12 xl:w-3/12" }, j = { class: "w-full md:w-6/12 lg:w-8/12 xl:w-9/12" }, M = /* @__PURE__ */ l({
	__name: "GatewayLayout",
	props: {
		gateway: { type: Object },
		gatewayModifiers: {}
	},
	emits: ["update:gateway"],
	setup(l) {
		let C = T(), E = n(() => C.params.id), M = g(l, "gateway"), N = [
			{
				label: $t("Details"),
				to: `/admin/zpayments/gateways/${E.value}/details`
			},
			{
				label: $t("Subscriptions"),
				to: `/admin/zpayments/gateways/${E.value}/subscriptions`
			},
			{
				label: $t("Customers"),
				to: `/admin/zpayments/gateways/${E.value}/customers`
			},
			{
				label: $t("Configuration"),
				to: `/admin/zpayments/gateways/${E.value}/config`
			}
		];
		async function P() {
			let [t, n] = await O.try(`/api/zpayments/gateways/${E.value}`);
			if (t) {
				console.error("Failed to load gateway config", t);
				return;
			}
			M.value = e.from(n);
		}
		return u(P), (e, n) => (d(), r(D, null, {
			default: _(() => [o("div", k, [o("div", A, [M.value ? (d(), r(h(v), { key: 0 }, {
				default: _(() => [c(h(x), null, {
					default: _(() => [c(h(S), null, {
						default: _(() => [s(m(M.value.name), 1)]),
						_: 1
					}), c(h(b), null, {
						default: _(() => [s(m(M.value.gateway), 1)]),
						_: 1
					})]),
					_: 1
				}), c(h(y), { class: "flex flex-col" }, {
					default: _(() => [(d(), a(t, null, f(N, (e) => c(w, {
						key: e.label,
						to: e.to,
						variant: e.to === h(C).path ? "default" : "ghost",
						class: "w-full justify-start"
					}, {
						default: _(() => [s(m(e.label), 1)]),
						_: 2
					}, 1032, ["to", "variant"])), 64))]),
					_: 1
				})]),
				_: 1
			})) : i("", !0)]), o("div", j, [M.value ? p(e.$slots, "default", { key: 0 }) : i("", !0)])])]),
			_: 3
		}));
	}
});
//#endregion
export { M as default };
