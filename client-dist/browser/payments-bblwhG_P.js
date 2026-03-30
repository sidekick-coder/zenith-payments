import { t as e } from "./payment.entity-BbwelBtU.js";
const { createBlock: t } = await globalThis.importAsync("vue"), { createElementVNode: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { createVNode: i } = await globalThis.importAsync("vue"), { defineComponent: a } = await globalThis.importAsync("vue"), { normalizeStyle: o } = await globalThis.importAsync("vue"), { openBlock: s } = await globalThis.importAsync("vue"), { ref: c } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { unref: u } = await globalThis.importAsync("vue"), { withCtx: d } = await globalThis.importAsync("vue"), f = await globalThis.importAsync("#client/components/Button.vue"), p = f.default || f, { defineColumns: m } = await globalThis.importAsync("#client/components/DataTable.vue"), { Card: h } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: g } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { Badge: _ } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), v = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), y = v.default || v, b = await globalThis.importAsync("#client/components/PageCrud.vue"), x = b.default || b, S = await globalThis.importAsync("#client/components/Select.vue"), C = S.default || S, w = await globalThis.importAsync("#client/components/DatePicker.vue"), T = w.default || w;
//#region modules/mod/client/pages/admin/payments/index.vue?vue&type=script&setup=true&lang.ts
var E = { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, D = { class: "flex flex-col gap-2" }, O = { class: "text-sm font-medium" }, k = { class: "flex flex-col gap-2" }, A = { class: "text-sm font-medium" }, j = { class: "flex items-end" }, M = /* @__PURE__ */ a({
	__name: "index",
	setup(a) {
		let f = m([
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
				field: (e) => $dt(e.created_at)
			},
			{ id: "actions" }
		]), v = c({
			status: "",
			start_date: null,
			end_date: null
		});
		function b() {
			v.value.status = "", v.value.start_date = null, v.value.end_date = null;
		}
		return (a, c) => (s(), t(y, null, {
			default: d(() => [i(x, {
				"fetch-query": v.value,
				"onUpdate:fetchQuery": c[3] ||= (e) => v.value = e,
				title: a.$t("Payments"),
				description: a.$t("View payment records here."),
				columns: u(f),
				serialize: (t) => u(e).from(t),
				fetch: "/api/zpayments/payments",
				actions: []
			}, {
				"header-append": d(() => [i(u(h), { class: "mb-4" }, {
					default: d(() => [i(u(g), { class: "pt-6" }, {
						default: d(() => [n("div", E, [
							i(C, {
								modelValue: v.value.status,
								"onUpdate:modelValue": c[0] ||= (e) => v.value.status = e,
								label: a.$t("Status"),
								placeholder: a.$t("All"),
								options: u(e).STATUS,
								"label-key": "label",
								"value-key": "id",
								clearable: ""
							}, null, 8, [
								"modelValue",
								"label",
								"placeholder",
								"options"
							]),
							n("div", D, [n("label", O, l(a.$t("Start Date")), 1), i(T, {
								modelValue: v.value.start_date,
								"onUpdate:modelValue": c[1] ||= (e) => v.value.start_date = e,
								mode: "datetime",
								clearable: ""
							}, null, 8, ["modelValue"])]),
							n("div", k, [n("label", A, l(a.$t("End Date")), 1), i(T, {
								modelValue: v.value.end_date,
								"onUpdate:modelValue": c[2] ||= (e) => v.value.end_date = e,
								mode: "datetime",
								clearable: ""
							}, null, 8, ["modelValue"])]),
							n("div", j, [i(p, {
								variant: "outline",
								onClick: b
							}, {
								default: d(() => [r(l(a.$t("Clear Filters")), 1)]),
								_: 1
							})])
						])]),
						_: 1
					})]),
					_: 1
				})]),
				"row-status": d(({ row: e }) => [i(u(_), {
					style: o({ "--color": e.statusColor }),
					class: "bg-[var(--color)] text-white"
				}, {
					default: d(() => [r(l(e.statusLabel), 1)]),
					_: 2
				}, 1032, ["style"])]),
				"prepend-actions": d(({ row: e }) => [i(p, {
					size: "sm",
					tag: "a",
					href: `/api/zpayments/payments/${e.id}/process`,
					target: "_blank"
				}, {
					default: d(() => [r(l(a.$t("Process")), 1)]),
					_: 1
				}, 8, ["href"])]),
				_: 1
			}, 8, [
				"fetch-query",
				"title",
				"description",
				"columns",
				"serialize"
			])]),
			_: 1
		}));
	}
});
//#endregion
export { M as default };
