import { t as e } from "./GatewayEntityTable-B6dX7I5k.js";
const { createBlock: t } = await globalThis.importAsync("vue"), { createTextVNode: n } = await globalThis.importAsync("vue"), { createVNode: r } = await globalThis.importAsync("vue"), { defineComponent: i } = await globalThis.importAsync("vue"), { normalizeClass: a } = await globalThis.importAsync("vue"), { openBlock: o } = await globalThis.importAsync("vue"), { ref: s } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { withCtx: u } = await globalThis.importAsync("vue"), { toast: d } = await globalThis.importAsync("vue-sonner"), { Card: f } = await globalThis.importAsync("#client/components/ui/card"), { CardAction: p } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: m } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: h } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: g } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: _ } = await globalThis.importAsync("#client/components/ui/card"), v = await globalThis.importAsync("#client/components/Button.vue"), y = v.default || v, { $fetch: b } = await globalThis.importAsync("#client/utils/fetcher.ts"), x = await globalThis.importAsync("#client/components/Icon.vue"), S = x.default || x;
//#endregion
//#region modules/mod/client/components/GatewayCustomers.vue
var C = /* @__PURE__ */ i({
	__name: "GatewayCustomers",
	props: { gateway: {} },
	setup(i) {
		let v = i, x = s(!1), C = s(!1), w = s();
		async function T() {
			x.value = !0;
			let [e] = await b.try(`/api/zpayments/gateways/${v.gateway.id}/customers/sync`, { method: "POST" });
			if (e) {
				x.value = !1;
				return;
			}
			d.success($t("Customers synced successfully.")), setTimeout(() => {
				x.value = !1;
			}, 1e3);
		}
		async function E() {
			w.value?.load();
		}
		return (s, d) => (o(), t(l(f), null, {
			default: u(() => [r(l(g), null, {
				default: u(() => [
					r(l(_), null, {
						default: u(() => [n(c(s.$t("Customers")), 1)]),
						_: 1
					}),
					r(l(h), null, {
						default: u(() => [n(c(s.$t("Manage customers associated with this gateway.")), 1)]),
						_: 1
					}),
					r(l(p), { class: "flex items-center gap-2" }, {
						default: u(() => [r(y, {
							variant: "outline",
							size: "icon",
							disabled: C.value,
							onClick: E
						}, {
							default: u(() => [r(S, {
								name: "RotateCcw",
								class: a({ "animate-spin": C.value })
							}, null, 8, ["class"])]),
							_: 1
						}, 8, ["disabled"]), r(y, {
							loading: x.value,
							onClick: T
						}, {
							default: u(() => [n(c(s.$t("Sync")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					})
				]),
				_: 1
			}), r(l(m), null, {
				default: u(() => [r(e, {
					ref_key: "tableRef",
					ref: w,
					loading: C.value,
					"onUpdate:loading": d[0] ||= (e) => C.value = e,
					"gateway-id": i.gateway?.id,
					"entity-type": "customer"
				}, null, 8, ["loading", "gateway-id"])]),
				_: 1
			})]),
			_: 1
		}));
	}
});
//#endregion
export { C as default };
