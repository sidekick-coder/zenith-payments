import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { t as Payment } from "./payment.entity-C8MZ-nWH.js";
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
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
import "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
const { Card } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardAction } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const __module__Badge__ = await globalThis.importAsync("#client/components/ui/badge/Badge.vue");
const Badge = __module__Badge__.default || __module__Badge__;
//#region modules/mod/client/components/ProductPaymentsTable.vue?vue&type=script&setup=true&lang.ts
var ProductPaymentsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProductPaymentsTable",
	__ssrInlineRender: true,
	props: { productId: {
		type: String,
		required: true
	} },
	setup(__props, { expose: __expose }) {
		const loading = ref(false);
		const tableRef = ref();
		ref([]);
		const fields = defineFormFields({
			gateway_id: {
				component: "select",
				label: $t("Gateway"),
				fetch: "/api/zpayments/gateways",
				labelKey: "name",
				valueKey: "id"
			},
			user_id: {
				component: "autocomplete",
				label: $t("User"),
				fetch: "/api/users",
				labelKey: "name",
				valueKey: "id",
				subtitleKey: "email"
			}
		});
		const columns = defineColumns([
			{
				id: "id",
				label: $t("ID"),
				field: "id"
			},
			{
				id: "order_id",
				label: $t("Order"),
				field: (row) => `#${row.order_id}`
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
				field: (row) => $d(row.created_at)
			}
		]);
		function load() {
			tableRef.value?.load();
		}
		function onSubmit(response) {
			if (!response.checkout_url) {
				toast.error($t("Failed to get checkout URL"));
				return;
			}
			window.open(response.checkout_url, "_blank");
		}
		__expose({ load });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Card), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(CardAction), { class: "gap-x-2 flex" }, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
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
											_push(ssrRenderComponent(DialogForm, {
												fetch: `/api/zpayments/products/${__props.productId}/payments`,
												title: _ctx.$t("Add Payment"),
												description: _ctx.$t("Fill in the details below to add a new payment"),
												fields: unref(fields),
												onSubmit
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(Button, null, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(_ctx.$t("Add Payment"))}`);
															else return [createTextVNode(toDisplayString(_ctx.$t("Add Payment")), 1)];
														}),
														_: 1
													}, _parent, _scopeId));
													else return [createVNode(Button, null, {
														default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add Payment")), 1)]),
														_: 1
													})];
												}),
												_: 1
											}, _parent, _scopeId));
										} else return [createVNode(Button, {
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
										}, 8, ["disabled"]), createVNode(DialogForm, {
											fetch: `/api/zpayments/products/${__props.productId}/payments`,
											title: _ctx.$t("Add Payment"),
											description: _ctx.$t("Fill in the details below to add a new payment"),
											fields: unref(fields),
											onSubmit
										}, {
											default: withCtx(() => [createVNode(Button, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add Payment")), 1)]),
												_: 1
											})]),
											_: 1
										}, 8, [
											"fetch",
											"title",
											"description",
											"fields"
										])];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(CardAction), { class: "gap-x-2 flex" }, {
									default: withCtx(() => [createVNode(Button, {
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
									}, 8, ["disabled"]), createVNode(DialogForm, {
										fetch: `/api/zpayments/products/${__props.productId}/payments`,
										title: _ctx.$t("Add Payment"),
										description: _ctx.$t("Fill in the details below to add a new payment"),
										fields: unref(fields),
										onSubmit
									}, {
										default: withCtx(() => [createVNode(Button, null, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add Payment")), 1)]),
											_: 1
										})]),
										_: 1
									}, 8, [
										"fetch",
										"title",
										"description",
										"fields"
									])]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(DataTable, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									columns: unref(columns),
									serialize: (row) => unref(Payment).from(row),
									fetch: `/api/zpayments/products/${__props.productId}/payments`
								}, {
									"row-status": withCtx(({ row }, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(Badge, {
											style: { "--color": row.statusColor },
											class: "bg-[var(--color)] text-white"
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`${ssrInterpolate(row.statusLabel)}`);
												else return [createTextVNode(toDisplayString(row.statusLabel), 1)];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(Badge, {
											style: { "--color": row.statusColor },
											class: "bg-[var(--color)] text-white"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(row.statusLabel), 1)]),
											_: 2
										}, 1032, ["style"])];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(DataTable, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									columns: unref(columns),
									serialize: (row) => unref(Payment).from(row),
									fetch: `/api/zpayments/products/${__props.productId}/payments`
								}, {
									"row-status": withCtx(({ row }) => [createVNode(Badge, {
										style: { "--color": row.statusColor },
										class: "bg-[var(--color)] text-white"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(row.statusLabel), 1)]),
										_: 2
									}, 1032, ["style"])]),
									_: 1
								}, 8, [
									"loading",
									"onUpdate:loading",
									"columns",
									"serialize",
									"fetch"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader), null, {
						default: withCtx(() => [createVNode(unref(CardAction), { class: "gap-x-2 flex" }, {
							default: withCtx(() => [createVNode(Button, {
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
							}, 8, ["disabled"]), createVNode(DialogForm, {
								fetch: `/api/zpayments/products/${__props.productId}/payments`,
								title: _ctx.$t("Add Payment"),
								description: _ctx.$t("Fill in the details below to add a new payment"),
								fields: unref(fields),
								onSubmit
							}, {
								default: withCtx(() => [createVNode(Button, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Add Payment")), 1)]),
									_: 1
								})]),
								_: 1
							}, 8, [
								"fetch",
								"title",
								"description",
								"fields"
							])]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(CardContent), null, {
						default: withCtx(() => [createVNode(DataTable, {
							ref_key: "tableRef",
							ref: tableRef,
							loading: loading.value,
							"onUpdate:loading": ($event) => loading.value = $event,
							columns: unref(columns),
							serialize: (row) => unref(Payment).from(row),
							fetch: `/api/zpayments/products/${__props.productId}/payments`
						}, {
							"row-status": withCtx(({ row }) => [createVNode(Badge, {
								style: { "--color": row.statusColor },
								class: "bg-[var(--color)] text-white"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(row.statusLabel), 1)]),
								_: 2
							}, 1032, ["style"])]),
							_: 1
						}, 8, [
							"loading",
							"onUpdate:loading",
							"columns",
							"serialize",
							"fetch"
						])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/components/ProductPaymentsTable.vue
var ProductPaymentsTable_exports = /* @__PURE__ */ __exportAll({ default: () => ProductPaymentsTable_default });
var _sfc_setup = ProductPaymentsTable_vue_vue_type_script_setup_true_lang_default.setup;
ProductPaymentsTable_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/ProductPaymentsTable.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProductPaymentsTable_default = ProductPaymentsTable_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { ProductPaymentsTable_exports as n, ProductPaymentsTable_default as t };
