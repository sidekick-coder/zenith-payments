import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { t as Order } from "./order.entity-D0LrhL0v.js";
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { mergeModels } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const { Badge } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
//#region modules/mod/client/components/UserOrdersTable.vue?vue&type=script&setup=true&lang.ts
var UserOrdersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserOrdersTable",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({ userId: {
		type: Number,
		required: true
	} }, {
		"loading": {
			type: Boolean,
			default: false
		},
		"loadingModifiers": {}
	}),
	emits: ["update:loading"],
	setup(__props, { expose: __expose }) {
		const props = __props;
		const tableRef = ref();
		const loading = useModel(__props, "loading");
		const columns = defineColumns([
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
				field: (row) => format(new Date(row.created_at), "PPpp")
			},
			{ id: "actions" }
		]);
		function load() {
			return tableRef.value?.load();
		}
		__expose({ load });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(DataTable, mergeProps({
				ref_key: "tableRef",
				ref: tableRef,
				loading: loading.value,
				"onUpdate:loading": ($event) => loading.value = $event,
				fetch: `/api/zpayments/users/${props.userId}/orders`,
				columns: unref(columns),
				actions: [],
				serialize: (row) => unref(Order).from(row)
			}, _attrs), {
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
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/components/UserOrdersTable.vue
var UserOrdersTable_exports = /* @__PURE__ */ __exportAll({ default: () => UserOrdersTable_default });
var _sfc_setup = UserOrdersTable_vue_vue_type_script_setup_true_lang_default.setup;
UserOrdersTable_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/UserOrdersTable.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var UserOrdersTable_default = UserOrdersTable_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { UserOrdersTable_exports as n, UserOrdersTable_default as t };
