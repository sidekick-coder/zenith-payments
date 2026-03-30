import { t as e } from "./chunk-DmhlhrBa.js";
import { t } from "./format-8zA-Gl6X.js";
import { t as n } from "./order.entity-MK6wmEzS.js";
const { createBlock: r } = await globalThis.importAsync("vue"), { createCommentVNode: i } = await globalThis.importAsync("vue"), { createElementBlock: a } = await globalThis.importAsync("vue"), { createElementVNode: o } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { createVNode: c } = await globalThis.importAsync("vue"), { defineComponent: l } = await globalThis.importAsync("vue"), { normalizeStyle: u } = await globalThis.importAsync("vue"), { openBlock: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), h = await globalThis.importAsync("#client/components/DataTable.vue"), g = h.default || h, { defineColumns: _ } = await globalThis.importAsync("#client/components/DataTable.vue"), { Badge: v } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
//#region modules/mod/client/components/UserPaymentsTable.vue?vue&type=script&setup=true&lang.ts
var y = { key: 0 }, b = { key: 1 }, x = { class: "text-sm text-gray-500" }, S = /* @__PURE__ */ l({
	__name: "UserPaymentsTable",
	props: { userId: {
		type: Number,
		required: !0
	} },
	setup(e) {
		let i = e, l = _([
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
				field: (e) => t(new Date(e.created_at), "PPpp")
			},
			{ id: "actions" }
		]);
		return (e, t) => (d(), r(g, {
			fetch: `/api/zpayments/users/${i.userId}/payments`,
			columns: p(l),
			actions: [],
			serialize: (e) => p(n).from(e),
			"fetch-query": { include: ["user"] }
		}, {
			"row-user": m(({ row: e }) => [e.user ? (d(), a("div", b, [o("div", null, f(e.user.name), 1), o("div", x, f(e.user.email), 1)])) : (d(), a("div", y, f(e.user_id), 1))]),
			"row-status": m(({ row: e }) => [c(p(v), {
				style: u({ "--color": e.statusColor }),
				class: "bg-[var(--color)] text-white"
			}, {
				default: m(() => [s(f(e.statusLabel), 1)]),
				_: 2
			}, 1032, ["style"])]),
			_: 1
		}, 8, [
			"fetch",
			"columns",
			"serialize"
		]));
	}
}), C = /* @__PURE__ */ e({ default: () => w }), w = S;
//#endregion
export { C as n, w as t };
