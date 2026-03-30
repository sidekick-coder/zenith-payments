import { t as Order } from "./order.entity-D0LrhL0v.js";
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const { Badge } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
//#region modules/mod/client/pages/admin/orders/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const columns = defineColumns([
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
				field: (row) => format(new Date(row.created_at), "PPpp")
			},
			{ id: "actions" }
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(PageCrud, {
						fetch: "/api/zpayments/orders",
						title: _ctx.$t("Orders"),
						description: _ctx.$t("View order records here."),
						columns: unref(columns),
						actions: [],
						serialize: (row) => unref(Order).from(row),
						"fetch-query": { include: ["user"] }
					}, {
						"row-user": withCtx(({ row }, _push, _parent, _scopeId) => {
							if (_push) if (!row.user) _push(`<div${_scopeId}>${ssrInterpolate(row.user_id)}</div>`);
							else _push(`<div${_scopeId}><div${_scopeId}>${ssrInterpolate(row.user.name)}</div><div class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(row.user.email)}</div></div>`);
							else return [!row.user ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.user_id), 1)) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("div", null, toDisplayString(row.user.name), 1), createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(row.user.email), 1)]))];
						}),
						"row-status": withCtx(({ row }, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(unref(Badge), {
								style: { "--color": row.statusColor },
								class: "bg-[var(--color)] text-white"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(row.statusLabel)}`);
									else return [createTextVNode(toDisplayString(row.statusLabel), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(unref(Badge), {
								style: { "--color": row.statusColor },
								class: "bg-[var(--color)] text-white"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(row.statusLabel), 1)]),
								_: 2
							}, 1032, ["style"])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(PageCrud, {
						fetch: "/api/zpayments/orders",
						title: _ctx.$t("Orders"),
						description: _ctx.$t("View order records here."),
						columns: unref(columns),
						actions: [],
						serialize: (row) => unref(Order).from(row),
						"fetch-query": { include: ["user"] }
					}, {
						"row-user": withCtx(({ row }) => [!row.user ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.user_id), 1)) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("div", null, toDisplayString(row.user.name), 1), createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(row.user.email), 1)]))]),
						"row-status": withCtx(({ row }) => [createVNode(unref(Badge), {
							style: { "--color": row.statusColor },
							class: "bg-[var(--color)] text-white"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(row.statusLabel), 1)]),
							_: 2
						}, 1032, ["style"])]),
						_: 1
					}, 8, [
						"title",
						"description",
						"columns",
						"serialize"
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/orders/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/orders/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var orders_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { orders_default as default };
