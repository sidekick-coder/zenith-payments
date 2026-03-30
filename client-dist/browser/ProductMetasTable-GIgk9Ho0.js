import { t as e } from "./format-8zA-Gl6X.js";
import { t } from "./productMeta.entity-DpsHMh7o.js";
import { t as n } from "./validators-D3Fh_uJo.js";
const { computed: r } = await globalThis.importAsync("vue"), { createBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { normalizeClass: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), { toast: h } = await globalThis.importAsync("vue-sonner"), g = await globalThis.importAsync("#client/components/Button.vue"), _ = g.default || g, { $fetch: v } = await globalThis.importAsync("#client/utils/fetcher.ts"), y = await globalThis.importAsync("#client/components/Icon.vue"), b = y.default || y, x = await globalThis.importAsync("#client/components/DataTable.vue"), S = x.default || x, { defineColumns: C } = await globalThis.importAsync("#client/components/DataTable.vue"), w = await globalThis.importAsync("#client/components/DialogForm.vue"), T = w.default || w, { defineFormFields: E } = await globalThis.importAsync("#client/components/DialogForm.vue"), D = await globalThis.importAsync("#client/components/AlertButton.vue"), O = D.default || D, { Card: k } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: A } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: j } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: M } = await globalThis.importAsync("#client/components/ui/card/index.ts");
//#region modules/mod/client/components/ProductMetasTable.vue?vue&type=script&setup=true&lang.ts
var N = { class: "flex items-center gap-2 justify-end" }, P = /* @__PURE__ */ c({
	__name: "ProductMetasTable",
	props: { productId: {
		type: String,
		required: !0
	} },
	setup(r, { expose: c }) {
		let h = r, g = d(!1), v = d(), y = d([]), x = E({
			name: {
				component: "text-field",
				label: $t("Name")
			},
			value: {
				component: "textarea",
				label: $t("Value")
			}
		}), w = C([
			{
				id: "id",
				label: "ID",
				field: "id",
				width: 50
			},
			{
				id: "name",
				label: $t("Name"),
				field: "name"
			},
			{
				id: "value",
				label: $t("Value"),
				field: "value"
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (t) => e(new Date(t.created_at), "PP p"),
				width: 150
			},
			{
				id: "actions",
				width: 200
			}
		]);
		function D() {
			v.value?.load();
		}
		return c({ load: D }), (e, c) => (u(), i(p(k), null, {
			default: m(() => [s(p(M), null, {
				default: m(() => [s(p(A), { class: "gap-x-2 flex" }, {
					default: m(() => [s(_, {
						variant: "outline",
						size: "icon",
						disabled: g.value,
						onClick: D
					}, {
						default: m(() => [s(b, {
							name: "RotateCcw",
							class: l({ "animate-spin": g.value })
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["disabled"]), s(T, {
						fetch: `/api/zpayments/products/${r.productId}/metas`,
						title: e.$t("Add Meta"),
						description: e.$t("Fill in the details below to add a new meta"),
						schema: p(n).productMeta.create,
						fields: p(x),
						onSubmit: D
					}, {
						default: m(() => [s(_, null, {
							default: m(() => [o(f(e.$t("Add Meta")), 1)]),
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
			}), s(p(j), null, {
				default: m(() => [s(S, {
					ref_key: "tableRef",
					ref: v,
					loading: g.value,
					"onUpdate:loading": c[0] ||= (e) => g.value = e,
					columns: p(w),
					serialize: (e) => p(t).from(e),
					fetch: `/api/zpayments/products/${r.productId}/metas`
				}, {
					"row-actions": m(({ row: t }) => [a("div", N, [s(T, {
						fetch: `/api/zpayments/products/${r.productId}/metas/${t.id}`,
						title: e.$t("Edit Meta"),
						description: e.$t("Fill in the details below to edit the meta"),
						schema: p(n).productMeta.update,
						fields: p(x),
						values: t,
						method: "PUT",
						onSubmit: D
					}, {
						default: m(() => [s(_, {
							size: "icon",
							variant: "ghost"
						}, {
							default: m(() => [s(b, { name: "Edit" })]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"fetch",
						"title",
						"description",
						"schema",
						"fields",
						"values"
					]), s(O, {
						variant: "ghost",
						title: e.$t("Delete Meta"),
						description: e.$t("Are you sure you want to delete this meta?"),
						loading: y.value.includes(t.id),
						fetch: `/api/zpayments/products/${h.productId}/metas/${t.id}`,
						onFetched: D
					}, {
						default: m(() => [s(b, { name: "Trash" })]),
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
export { P as t };
