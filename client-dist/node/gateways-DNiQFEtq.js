import { t as schemas } from "./validators-tuSupu-X.js";
import { t as GatewayConfig } from "./gatewayConfig.entity-C1BWyIfg.js";
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
const __module__ClientOnly__ = await globalThis.importAsync("#client/components/ClientOnly.vue");
const ClientOnly = __module__ClientOnly__.default || __module__ClientOnly__;
const __module__AlertButton__ = await globalThis.importAsync("#client/components/AlertButton.vue");
const AlertButton = __module__AlertButton__.default || __module__AlertButton__;
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
//#region modules/mod/client/pages/admin/gateways/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const loading = ref(false);
		const tableRef = ref();
		const deletingItems = ref([]);
		const columns = defineColumns([
			{
				id: "id",
				label: "ID",
				field: "id",
				width: 200
			},
			{
				id: "name",
				label: $t("Name"),
				field: "name"
			},
			{
				id: "description",
				label: $t("Description"),
				field: "description"
			},
			{ id: "actions" }
		]);
		const fields = defineFormFields({
			id: {
				component: "text-field",
				label: "ID"
			},
			gateway: {
				component: "select",
				label: $t("Gateway"),
				options: GatewayConfig.GATEWAY_OPTIONS,
				labelKey: "label",
				valueKey: "id"
			},
			name: {
				component: "text-field",
				label: $t("Name")
			},
			description: {
				component: "text-field",
				label: $t("Description")
			}
		});
		function load() {
			tableRef.value?.load();
		}
		function reset() {
			tableRef.value?.reset();
		}
		async function destroy(id) {
			deletingItems.value.push(id);
			const [error] = await $fetch.try(`/api/zpayments/gateways/${id}`, { method: "DELETE" });
			if (error) {
				deletingItems.value = [];
				return;
			}
			setTimeout(() => {
				toast.success($t("Deleted successfully."));
				reset();
			}, 1e3);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex"${_scopeId}><h1 class="text-2xl font-bold mb-4 text-foreground flex-1"${_scopeId}>${ssrInterpolate(_ctx.$t("Gateways"))}</h1><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(Button, {
							variant: "outline",
							size: "icon",
							disabled: loading.value,
							onClick: load
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(Icon, {
									name: "RotateCcw",
									class: { "animate-spin": loading.value }
								}, null, _parent, _scopeId));
								else return [createVNode(Icon, {
									name: "RotateCcw",
									class: { "animate-spin": loading.value }
								}, null, 8, ["class"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(ClientOnly, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(DialogForm, {
									fetch: `/api/zpayments/gateways`,
									title: _ctx.$t("Add new"),
									description: _ctx.$t("Fill in the details below to add a new gateway"),
									schema: unref(schemas).gateway.create,
									fields: unref(fields),
									onSubmit: load
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(Button, null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${ssrInterpolate(_ctx.$t("Add new"))}`);
												else return [createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)];
											}),
											_: 1
										}, _parent, _scopeId));
										else return [createVNode(Button, null, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)]),
											_: 1
										})];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(DialogForm, {
									fetch: `/api/zpayments/gateways`,
									title: _ctx.$t("Add new"),
									description: _ctx.$t("Fill in the details below to add a new gateway"),
									schema: unref(schemas).gateway.create,
									fields: unref(fields),
									onSubmit: load
								}, {
									default: withCtx(() => [createVNode(Button, null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)]),
										_: 1
									})]),
									_: 1
								}, 8, [
									"title",
									"description",
									"schema",
									"fields"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(DataTable, {
							ref_key: "tableRef",
							ref: tableRef,
							loading: loading.value,
							"onUpdate:loading": ($event) => loading.value = $event,
							columns: unref(columns),
							serialize: (row) => unref(GatewayConfig).from(row),
							fetch: "/api/zpayments/gateways"
						}, {
							"row-actions": withCtx(({ row }, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="flex items-center gap-2 justify-end"${_scopeId}>`);
									_push(ssrRenderComponent(Button, {
										size: "icon",
										variant: "ghost",
										to: `/admin/zpayments/gateways/${row.id}`
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Icon, { name: "Edit" }, null, _parent, _scopeId));
											else return [createVNode(Icon, { name: "Edit" })];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(ssrRenderComponent(AlertButton, {
										variant: "ghost",
										size: "sm",
										loading: deletingItems.value.includes(row.id),
										onConfirm: ($event) => destroy(row.id)
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Icon, { name: "trash" }, null, _parent, _scopeId));
											else return [createVNode(Icon, { name: "trash" })];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`</div>`);
								} else return [createVNode("div", { class: "flex items-center gap-2 justify-end" }, [createVNode(Button, {
									size: "icon",
									variant: "ghost",
									to: `/admin/zpayments/gateways/${row.id}`
								}, {
									default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
									_: 1
								}, 8, ["to"]), createVNode(AlertButton, {
									variant: "ghost",
									size: "sm",
									loading: deletingItems.value.includes(row.id),
									onConfirm: ($event) => destroy(row.id)
								}, {
									default: withCtx(() => [createVNode(Icon, { name: "trash" })]),
									_: 1
								}, 8, ["loading", "onConfirm"])])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode("div", { class: "flex" }, [createVNode("h1", { class: "text-2xl font-bold mb-4 text-foreground flex-1" }, toDisplayString(_ctx.$t("Gateways")), 1), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(Button, {
						variant: "outline",
						size: "icon",
						disabled: loading.value,
						onClick: load
					}, {
						default: withCtx(() => [createVNode(Icon, {
							name: "RotateCcw",
							class: { "animate-spin": loading.value }
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["disabled"]), createVNode(ClientOnly, null, {
						default: withCtx(() => [createVNode(DialogForm, {
							fetch: `/api/zpayments/gateways`,
							title: _ctx.$t("Add new"),
							description: _ctx.$t("Fill in the details below to add a new gateway"),
							schema: unref(schemas).gateway.create,
							fields: unref(fields),
							onSubmit: load
						}, {
							default: withCtx(() => [createVNode(Button, null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, [
							"title",
							"description",
							"schema",
							"fields"
						])]),
						_: 1
					})])]), createVNode(DataTable, {
						ref_key: "tableRef",
						ref: tableRef,
						loading: loading.value,
						"onUpdate:loading": ($event) => loading.value = $event,
						columns: unref(columns),
						serialize: (row) => unref(GatewayConfig).from(row),
						fetch: "/api/zpayments/gateways"
					}, {
						"row-actions": withCtx(({ row }) => [createVNode("div", { class: "flex items-center gap-2 justify-end" }, [createVNode(Button, {
							size: "icon",
							variant: "ghost",
							to: `/admin/zpayments/gateways/${row.id}`
						}, {
							default: withCtx(() => [createVNode(Icon, { name: "Edit" })]),
							_: 1
						}, 8, ["to"]), createVNode(AlertButton, {
							variant: "ghost",
							size: "sm",
							loading: deletingItems.value.includes(row.id),
							onConfirm: ($event) => destroy(row.id)
						}, {
							default: withCtx(() => [createVNode(Icon, { name: "trash" })]),
							_: 1
						}, 8, ["loading", "onConfirm"])])]),
						_: 1
					}, 8, [
						"loading",
						"onUpdate:loading",
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
//#region modules/mod/client/pages/admin/gateways/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/gateways/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var gateways_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { gateways_default as default };
