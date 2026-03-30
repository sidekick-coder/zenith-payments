import { t as e } from "./chunk-DmhlhrBa.js";
import { t } from "./payment.entity-BbwelBtU.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { createVNode: i } = await globalThis.importAsync("vue"), { defineComponent: a } = await globalThis.importAsync("vue"), { normalizeClass: o } = await globalThis.importAsync("vue"), { normalizeStyle: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { ref: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { unref: d } = await globalThis.importAsync("vue"), { withCtx: f } = await globalThis.importAsync("vue"), { toast: p } = await globalThis.importAsync("vue-sonner"), m = await globalThis.importAsync("#client/components/Button.vue"), h = m.default || m, g = await globalThis.importAsync("#client/components/Icon.vue"), _ = g.default || g, v = await globalThis.importAsync("#client/components/DataTable.vue"), y = v.default || v, { defineColumns: b } = await globalThis.importAsync("#client/components/DataTable.vue"), x = await globalThis.importAsync("#client/components/DialogForm.vue"), S = x.default || x, { defineFormFields: C } = await globalThis.importAsync("#client/components/DialogForm.vue"), { Card: w } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: T } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: E } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: D } = await globalThis.importAsync("#client/components/ui/card/index.ts"), O = await globalThis.importAsync("#client/components/ui/badge/Badge.vue"), k = O.default || O;
//#region modules/mod/client/components/ProductPaymentsTable.vue?vue&type=script&setup=true&lang.ts
var A = /* @__PURE__ */ a({
	__name: "ProductPaymentsTable",
	props: { productId: {
		type: String,
		required: !0
	} },
	setup(e, { expose: a }) {
		let m = l(!1), g = l();
		l([]);
		let v = C({
			gateway_id: {
				component: "select",
				label: $t("Gateway"),
				fetch: "/api/zpayments/gateways",
				labelKey: "name",
				valueKey: "id"
			},
			user_id: {
				component: "autocomplete",
				label: $t("User"),
				fetch: "/api/users",
				labelKey: "name",
				valueKey: "id",
				subtitleKey: "email"
			}
		}), x = b([
			{
				id: "id",
				label: $t("ID"),
				field: "id"
			},
			{
				id: "order_id",
				label: $t("Order"),
				field: (e) => `#${e.order_id}`
			},
			{
				id: "gateway_id",
				label: $t("Gateway ID"),
				field: "gateway_id"
			},
			{
				id: "status",
				label: $t("Status"),
				field: "status"
			},
			{
				id: "amount",
				label: $t("Amount"),
				field: "amount"
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (e) => $d(e.created_at)
			}
		]);
		function O() {
			g.value?.load();
		}
		function A(e) {
			if (!e.checkout_url) {
				p.error($t("Failed to get checkout URL"));
				return;
			}
			window.open(e.checkout_url, "_blank");
		}
		return a({ load: O }), (a, l) => (c(), n(d(w), null, {
			default: f(() => [i(d(D), null, {
				default: f(() => [i(d(T), { class: "gap-x-2 flex" }, {
					default: f(() => [i(h, {
						variant: "outline",
						size: "icon",
						disabled: m.value,
						onClick: O
					}, {
						default: f(() => [i(_, {
							name: "RotateCcw",
							class: o({ "animate-spin": m.value })
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["disabled"]), i(S, {
						fetch: `/api/zpayments/products/${e.productId}/payments`,
						title: a.$t("Add Payment"),
						description: a.$t("Fill in the details below to add a new payment"),
						fields: d(v),
						onSubmit: A
					}, {
						default: f(() => [i(h, null, {
							default: f(() => [r(u(a.$t("Add Payment")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"fetch",
						"title",
						"description",
						"fields"
					])]),
					_: 1
				})]),
				_: 1
			}), i(d(E), null, {
				default: f(() => [i(y, {
					ref_key: "tableRef",
					ref: g,
					loading: m.value,
					"onUpdate:loading": l[0] ||= (e) => m.value = e,
					columns: d(x),
					serialize: (e) => d(t).from(e),
					fetch: `/api/zpayments/products/${e.productId}/payments`
				}, {
					"row-status": f(({ row: e }) => [i(k, {
						style: s({ "--color": e.statusColor }),
						class: "bg-[var(--color)] text-white"
					}, {
						default: f(() => [r(u(e.statusLabel), 1)]),
						_: 2
					}, 1032, ["style"])]),
					_: 1
				}, 8, [
					"loading",
					"columns",
					"serialize",
					"fetch"
				])]),
				_: 1
			})]),
			_: 1
		}));
	}
}), j = /* @__PURE__ */ e({ default: () => M }), M = A;
//#endregion
export { j as n, M as t };
