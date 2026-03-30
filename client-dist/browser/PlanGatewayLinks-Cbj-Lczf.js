import { i as e, l as t, o as n, r } from "./dist-CuicyNAX.js";
const { createBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { openBlock: l } = await globalThis.importAsync("vue"), { ref: u } = await globalThis.importAsync("vue"), { toDisplayString: d } = await globalThis.importAsync("vue"), { unref: f } = await globalThis.importAsync("vue"), { withCtx: p } = await globalThis.importAsync("vue"), m = await globalThis.importAsync("#client/components/Button.vue"), h = m.default || m;
(await globalThis.importAsync("#client/components/Icon.vue")).default;
const g = await globalThis.importAsync("#client/components/DataTable.vue"), _ = g.default || g, { defineColumns: v } = await globalThis.importAsync("#client/components/DataTable.vue"), y = await globalThis.importAsync("#client/components/ui/card/Card.vue"), b = y.default || y, x = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), S = x.default || x, C = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), w = C.default || C, T = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), E = T.default || T, D = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), O = D.default || D, k = await globalThis.importAsync("#client/components/DialogForm.vue"), A = k.default || k, { defineFormFields: j } = await globalThis.importAsync("#client/components/DialogForm.vue"), M = await globalThis.importAsync("#client/components/ClientOnly.vue"), N = M.default || M;
//#region modules/mod/client/components/PlanGatewayLinks.vue?vue&type=script&setup=true&lang.ts
var P = { class: "flex items-center justify-between" }, F = /* @__PURE__ */ c({
	__name: "PlanGatewayLinks",
	props: { planId: {} },
	emits: ["refresh"],
	setup(c, { emit: m }) {
		let g = m, y = u(), x = u(!1), C = v([
			{
				id: "gateway",
				label: $t("Gateway"),
				field: "gateway"
			},
			{
				id: "name",
				label: $t("Name"),
				field: "name"
			},
			{
				id: "external_id",
				label: $t("External ID"),
				field: "external_id"
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (e) => new Date(e.created_at).toLocaleString()
			}
		]), T = j({
			gateway: {
				component: "autocomplete",
				label: $t("Gateway"),
				fetch: "/api/zpayments/gateways",
				labelKey: "name",
				valueKey: "id"
			},
			external_id: {
				component: "text-field",
				label: $t("External ID")
			}
		}), D = e({
			gateway: n(t(), r(1, $t("Gateway is required"))),
			external_id: n(t(), r(1, $t("External ID is required")))
		});
		function k() {
			y.value?.load(), g("refresh");
		}
		return (e, t) => (l(), i(b, null, {
			default: p(() => [s(S, null, {
				default: p(() => [a("div", P, [a("div", null, [s(w, null, {
					default: p(() => [o(d(e.$t("Linked Gateways")), 1)]),
					_: 1
				}), s(E, null, {
					default: p(() => [o(d(e.$t("Payment gateways linked to this plan")), 1)]),
					_: 1
				})]), s(N, null, {
					default: p(() => [s(A, {
						fetch: `/api/zpayments/plans/${c.planId}/links`,
						title: e.$t("Add new"),
						description: e.$t("Fill in the details below to link a gateway"),
						schema: f(D),
						fields: f(T),
						onSubmit: k
					}, {
						default: p(() => [s(h, null, {
							default: p(() => [o(d(e.$t("Add new")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"fetch",
						"title",
						"description",
						"schema",
						"fields"
					])]),
					_: 1
				})])]),
				_: 1
			}), s(O, null, {
				default: p(() => [s(_, {
					ref_key: "tableRef",
					ref: y,
					loading: x.value,
					"onUpdate:loading": t[0] ||= (e) => x.value = e,
					columns: f(C),
					fetch: `/api/zpayments/plans/${c.planId}/links`
				}, null, 8, [
					"loading",
					"columns",
					"fetch"
				])]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
export { F as default };
