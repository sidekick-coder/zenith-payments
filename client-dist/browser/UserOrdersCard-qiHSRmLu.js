import { t as e } from "./chunk-DmhlhrBa.js";
import { t } from "./UserOrdersTable-DQxb9jfu.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { createVNode: i } = await globalThis.importAsync("vue"), { defineComponent: a } = await globalThis.importAsync("vue"), { mergeModels: o } = await globalThis.importAsync("vue"), { normalizeClass: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { ref: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { unref: d } = await globalThis.importAsync("vue"), { useModel: f } = await globalThis.importAsync("vue"), { withCtx: p } = await globalThis.importAsync("vue"), m = await globalThis.importAsync("#client/components/Button.vue"), h = m.default || m, g = await globalThis.importAsync("#client/components/Icon.vue"), _ = g.default || g, { Card: v } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: y } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: b } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: x } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: S } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: C } = await globalThis.importAsync("#client/components/ui/card/index.ts");
//#region modules/mod/client/components/UserOrdersCard.vue?vue&type=script&setup=true&lang.ts
var w = /* @__PURE__ */ a({
	__name: "UserOrdersCard",
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
	setup(e) {
		let a = e, o = l(), m = f(e, "loading");
		function g() {
			return o.value?.load();
		}
		return (e, l) => (c(), n(d(v), null, {
			default: p(() => [i(d(S), null, {
				default: p(() => [
					i(d(C), null, {
						default: p(() => [r(u(e.$t("Orders")), 1)]),
						_: 1
					}),
					i(d(x), null, {
						default: p(() => [r(u(e.$t("List of orders")), 1)]),
						_: 1
					}),
					i(d(y), null, {
						default: p(() => [i(h, {
							variant: "outline",
							size: "icon",
							disabled: m.value,
							onClick: g
						}, {
							default: p(() => [i(_, {
								name: "RotateCcw",
								class: s({ "animate-spin": m.value })
							}, null, 8, ["class"])]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					})
				]),
				_: 1
			}), i(d(b), null, {
				default: p(() => [i(t, {
					ref_key: "tableRef",
					ref: o,
					loading: m.value,
					"onUpdate:loading": l[0] ||= (e) => m.value = e,
					"user-id": a.userId
				}, null, 8, ["loading", "user-id"])]),
				_: 1
			})]),
			_: 1
		}));
	}
}), T = /* @__PURE__ */ e({ default: () => E }), E = w;
//#endregion
export { T as n, E as t };
