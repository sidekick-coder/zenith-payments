import { t as e } from "./UserOrdersTable-DQxb9jfu.js";
const { createElementBlock: t } = await globalThis.importAsync("vue"), { createElementVNode: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { createVNode: i } = await globalThis.importAsync("vue"), { defineComponent: a } = await globalThis.importAsync("vue"), { mergeModels: o } = await globalThis.importAsync("vue"), { normalizeClass: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { ref: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { useModel: d } = await globalThis.importAsync("vue"), { withCtx: f } = await globalThis.importAsync("vue"), p = await globalThis.importAsync("#client/components/Button.vue"), m = p.default || p, h = await globalThis.importAsync("#client/components/Icon.vue"), g = h.default || h, { Card: _ } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: v } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: y } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: b } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: x } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: S } = await globalThis.importAsync("#client/components/ui/card/index.ts"), C = await globalThis.importAsync("#client/components/PageTitle.vue"), w = C.default || C, T = await globalThis.importAsync("#client/components/PageSubtitle.vue"), E = T.default || T;
//#region modules/mod/client/components/UserOrdersPage.vue?vue&type=script&setup=true&lang.ts
var D = { class: "flex flex-col gap-6" }, O = { class: "flex items-center" }, k = { class: "flex-1" }, A = /* @__PURE__ */ a({
	__name: "UserOrdersPage",
	props: /* @__PURE__ */ o({ userId: {
		type: Number,
		required: !0
	} }, {
		loading: {
			type: Boolean,
			default: !1
		},
		loadingModifiers: {}
	}),
	emits: ["update:loading"],
	setup(a) {
		let o = a, p = l(), h = d(a, "loading");
		function _() {
			return p.value?.load();
		}
		return (a, l) => (c(), t("div", D, [n("div", O, [n("div", k, [i(w, null, {
			default: f(() => [r(u(a.$t("Orders")), 1)]),
			_: 1
		}), i(E, null, {
			default: f(() => [r(u(a.$t("List of orders")), 1)]),
			_: 1
		})]), n("div", null, [i(m, {
			variant: "outline",
			size: "icon",
			disabled: h.value,
			onClick: _
		}, {
			default: f(() => [i(g, {
				name: "RotateCcw",
				class: s({ "animate-spin": h.value })
			}, null, 8, ["class"])]),
			_: 1
		}, 8, ["disabled"])])]), i(e, {
			ref_key: "tableRef",
			ref: p,
			loading: h.value,
			"onUpdate:loading": l[0] ||= (e) => h.value = e,
			"user-id": o.userId
		}, null, 8, ["loading", "user-id"])]));
	}
});
//#endregion
export { A as default };
