import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { t as GatewayEntity } from "./gatewayEntity.entity-Bed37LiQ.js";
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
import { format } from "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__ObjectInspect__ = await globalThis.importAsync("#client/components/ObjectInspect.vue");
const ObjectInspect = __module__ObjectInspect__.default || __module__ObjectInspect__;
//#region modules/mod/client/components/GatewayEntityTable.vue?vue&type=script&setup=true&lang.ts
var GatewayEntityTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GatewayEntityTable",
	__ssrInlineRender: true,
	props: {
		gatewayId: {
			type: String,
			default: void 0
		},
		entityType: {
			type: String,
			default: void 0
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const loading = ref(false);
		const tableRef = ref();
		const query = ref({
			gateway_id: props.gatewayId,
			type: props.entityType
		});
		const columns = defineColumns([
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
				id: "type",
				label: $t("Type"),
				field: "type"
			},
			{
				id: "external_id",
				label: $t("External ID"),
				field: "external_id"
			},
			{
				id: "data",
				label: $t("Data")
			},
			{
				id: "updated_at",
				label: $t("Updated At"),
				field: (row) => format(new Date(row.updated_at), "PP p"),
				width: 150
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (row) => format(new Date(row.created_at), "PP p"),
				width: 150
			},
			{
				id: "actions",
				width: 150
			}
		]);
		function load() {
			tableRef.value?.load();
		}
		__expose({ load });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(DataTable, mergeProps({
				ref_key: "tableRef",
				ref: tableRef,
				loading: loading.value,
				"onUpdate:loading": ($event) => loading.value = $event,
				columns: unref(columns),
				serialize: (row) => unref(GatewayEntity).from(row),
				"fetch-query": query.value,
				fetch: "/api/zpayments/gateway-entities"
			}, _attrs), {
				"row-actions": withCtx(({ row }, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ObjectInspect, {
						"model-value": row.raw,
						"content-class": "sm:max-w-[1200px]"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(Button, { variant: "outline" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(_ctx.$t("Data"))}`);
									else return [createTextVNode(toDisplayString(_ctx.$t("Data")), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(Button, { variant: "outline" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Data")), 1)]),
								_: 1
							})];
						}),
						_: 2
					}, _parent, _scopeId));
					else return [createVNode(ObjectInspect, {
						"model-value": row.raw,
						"content-class": "sm:max-w-[1200px]"
					}, {
						default: withCtx(() => [createVNode(Button, { variant: "outline" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Data")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value"])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/components/GatewayEntityTable.vue
var GatewayEntityTable_exports = /* @__PURE__ */ __exportAll({ default: () => GatewayEntityTable_default });
var _sfc_setup = GatewayEntityTable_vue_vue_type_script_setup_true_lang_default.setup;
GatewayEntityTable_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewayEntityTable.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GatewayEntityTable_default = GatewayEntityTable_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { GatewayEntityTable_exports as n, GatewayEntityTable_default as t };
