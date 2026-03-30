import { t as e } from "./chunk-DmhlhrBa.js";
import { t } from "./format-8zA-Gl6X.js";
import { t as n } from "./order.entity-MK6wmEzS.js";
const { createBlock: r } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { defineComponent: o } = await globalThis.importAsync("vue"), { mergeModels: s } = await globalThis.importAsync("vue"), { normalizeStyle: c } = await globalThis.importAsync("vue"), { openBlock: l } = await globalThis.importAsync("vue"), { ref: u } = await globalThis.importAsync("vue"), { toDisplayString: d } = await globalThis.importAsync("vue"), { unref: f } = await globalThis.importAsync("vue"), { useModel: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), h = await globalThis.importAsync("#client/components/DataTable.vue"), g = h.default || h, { defineColumns: _ } = await globalThis.importAsync("#client/components/DataTable.vue"), { Badge: v } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
//#region modules/mod/client/components/UserOrdersTable.vue?vue&type=script&setup=true&lang.ts
var y = /* @__PURE__ */ o({
	__name: "UserOrdersTable",
	props: /* @__PURE__ */ s({ userId: {
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
	setup(e, { expose: o }) {
		let s = e, h = u(), y = p(e, "loading"), b = _([
			{
				id: "id",
				label: $t("ID"),
				field: "id"
			},
			{
				id: "purpose",
				label: $t("Purpose"),
				field: "purpose"
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
				id: "currency",
				label: $t("Currency"),
				field: "currency"
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (e) => t(new Date(e.created_at), "PPpp")
			},
			{ id: "actions" }
		]);
		function x() {
			return h.value?.load();
		}
		return o({ load: x }), (e, t) => (l(), r(g, {
			ref_key: "tableRef",
			ref: h,
			loading: y.value,
			"onUpdate:loading": t[0] ||= (e) => y.value = e,
			fetch: `/api/zpayments/users/${s.userId}/orders`,
			columns: f(b),
			actions: [],
			serialize: (e) => f(n).from(e)
		}, {
			"row-status": m(({ row: e }) => [a(f(v), {
				style: c({ "--color": e.statusColor }),
				class: "bg-[var(--color)] text-white"
			}, {
				default: m(() => [i(d(e.statusLabel), 1)]),
				_: 2
			}, 1032, ["style"])]),
			_: 1
		}, 8, [
			"loading",
			"fetch",
			"columns",
			"serialize"
		]));
	}
}), b = /* @__PURE__ */ e({ default: () => x }), x = y;
//#endregion
export { b as n, x as t };
