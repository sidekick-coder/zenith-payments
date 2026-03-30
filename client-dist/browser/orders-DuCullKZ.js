import { t as e } from "./format-8zA-Gl6X.js";
import { t } from "./order.entity-MK6wmEzS.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createCommentVNode: r } = await globalThis.importAsync("vue"), { createElementBlock: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { normalizeStyle: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { toDisplayString: d } = await globalThis.importAsync("vue"), { unref: f } = await globalThis.importAsync("vue"), { withCtx: p } = await globalThis.importAsync("vue"), { defineColumns: m } = await globalThis.importAsync("#client/components/DataTable.vue"), { Badge: h } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), g = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), _ = g.default || g, v = await globalThis.importAsync("#client/components/PageCrud.vue"), y = v.default || v;
//#region modules/mod/client/pages/admin/orders/index.vue?vue&type=script&setup=true&lang.ts
var b = { key: 0 }, x = { key: 1 }, S = { class: "text-sm text-gray-500" }, C = /* @__PURE__ */ c({
	__name: "index",
	setup(r) {
		let c = m([
			{
				id: "id",
				label: $t("ID"),
				field: "id"
			},
			{
				id: "user",
				label: $t("User")
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
				field: (t) => e(new Date(t.created_at), "PPpp")
			},
			{ id: "actions" }
		]);
		return (e, r) => (u(), n(_, null, {
			default: p(() => [s(y, {
				fetch: "/api/zpayments/orders",
				title: e.$t("Orders"),
				description: e.$t("View order records here."),
				columns: f(c),
				actions: [],
				serialize: (e) => f(t).from(e),
				"fetch-query": { include: ["user"] }
			}, {
				"row-user": p(({ row: e }) => [e.user ? (u(), i("div", x, [a("div", null, d(e.user.name), 1), a("div", S, d(e.user.email), 1)])) : (u(), i("div", b, d(e.user_id), 1))]),
				"row-status": p(({ row: e }) => [s(f(h), {
					style: l({ "--color": e.statusColor }),
					class: "bg-[var(--color)] text-white"
				}, {
					default: p(() => [o(d(e.statusLabel), 1)]),
					_: 2
				}, 1032, ["style"])]),
				_: 1
			}, 8, [
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
export { C as default };
