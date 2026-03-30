import { t as e } from "./validators-D3Fh_uJo.js";
import { t } from "./productPrice.entity-Duw_iyHe.js";
import { t as n } from "./countries-CBBqQFay.js";
import { t as r } from "./currencies-D0_IzH7E.js";
const { createBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { normalizeClass: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), h = await globalThis.importAsync("#client/components/Button.vue"), g = h.default || h, _ = await globalThis.importAsync("#client/components/Icon.vue"), v = _.default || _, y = await globalThis.importAsync("#client/components/DataTable.vue"), b = y.default || y, { defineColumns: x } = await globalThis.importAsync("#client/components/DataTable.vue"), S = await globalThis.importAsync("#client/components/DialogForm.vue"), C = S.default || S, { defineFormFields: w } = await globalThis.importAsync("#client/components/DialogForm.vue"), T = await globalThis.importAsync("#client/components/AlertButton.vue"), E = T.default || T, { Card: D } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: O } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: k } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: A } = await globalThis.importAsync("#client/components/ui/card/index.ts");
//#region modules/mod/client/components/ProductPricesTable.vue?vue&type=script&setup=true&lang.ts
var j = { class: "flex items-center gap-2 justify-end" }, M = /* @__PURE__ */ c({
	__name: "ProductPricesTable",
	props: { productId: {
		type: String,
		required: !0
	} },
	setup(c, { expose: h }) {
		let _ = d(!1), y = d(), S = d([]), T = w({
			gateway_id: {
				component: "select",
				label: $t("Gateway ID"),
				fetch: "/api/zpayments/gateways",
				labelKey: "name",
				valueKey: "id"
			},
			country: {
				component: "autocomplete",
				label: $t("Country"),
				options: n,
				labelKey: "name",
				valueKey: "code",
				clearable: !0
			},
			currency: {
				component: "autocomplete",
				label: $t("Currency"),
				labelKey: "label",
				valueKey: "code",
				options: r,
				clearable: !0
			},
			amount: {
				component: "text-field",
				label: $t("Price"),
				type: "number"
			}
		}), M = x([
			{
				id: "id",
				label: "ID",
				field: "id",
				width: 50
			},
			{
				id: "gateway_id",
				label: $t("Gateway"),
				field: "gateway_id"
			},
			{
				id: "country",
				label: $t("Country"),
				field: "country",
				width: 100
			},
			{
				id: "amount",
				label: $t("Price"),
				field: "amountFormatted"
			},
			{
				id: "actions",
				width: 200
			}
		]);
		function N() {
			y.value?.load();
		}
		return h({ load: N }), (n, r) => (u(), i(p(D), null, {
			default: m(() => [s(p(A), null, {
				default: m(() => [s(p(O), { class: "gap-x-2 flex" }, {
					default: m(() => [s(g, {
						variant: "outline",
						size: "icon",
						disabled: _.value,
						onClick: N
					}, {
						default: m(() => [s(v, {
							name: "RotateCcw",
							class: l({ "animate-spin": _.value })
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["disabled"]), s(C, {
						fetch: `/api/zpayments/products/${c.productId}/prices`,
						title: n.$t("Add Price"),
						description: n.$t("Fill in the details below to add a new price"),
						schema: p(e).productPrice.create,
						fields: p(T),
						onSubmit: N
					}, {
						default: m(() => [s(g, null, {
							default: m(() => [o(f(n.$t("Add Price")), 1)]),
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
				})]),
				_: 1
			}), s(p(k), null, {
				default: m(() => [s(b, {
					ref_key: "tableRef",
					ref: y,
					loading: _.value,
					"onUpdate:loading": r[0] ||= (e) => _.value = e,
					columns: p(M),
					serialize: (e) => p(t).from(e),
					fetch: `/api/zpayments/products/${c.productId}/prices`
				}, {
					"row-actions": m(({ row: t }) => [a("div", j, [s(C, {
						fetch: `/api/zpayments/products/${c.productId}/prices/${t.id}`,
						title: n.$t("Edit Price"),
						description: n.$t("Fill in the details below to edit the price"),
						schema: p(e).productPrice.update,
						values: t,
						fields: p(T),
						method: "PUT",
						onSubmit: N
					}, {
						default: m(() => [s(g, {
							size: "icon",
							variant: "ghost"
						}, {
							default: m(() => [s(v, { name: "Edit" })]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"fetch",
						"title",
						"description",
						"schema",
						"values",
						"fields"
					]), s(E, {
						variant: "ghost",
						title: n.$t("Delete Price"),
						description: n.$t("Are you sure you want to delete this price?"),
						loading: S.value.includes(t.id),
						fetch: `/api/zpayments/products/${c.productId}/prices/${t.id}`,
						onFetched: N
					}, {
						default: m(() => [s(v, { name: "Trash" })]),
						_: 1
					}, 8, [
						"title",
						"description",
						"loading",
						"fetch"
					])])]),
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
});
//#endregion
export { M as t };
