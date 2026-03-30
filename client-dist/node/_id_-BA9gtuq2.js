import { t as ProductMetasTable_default } from "./ProductMetasTable-g_5TohKv.js";
import { t as ProductPaymentsTable_default } from "./ProductPaymentsTable-Cox0r_Ua.js";
import { t as ProductPricesTable_default } from "./ProductPricesTable-Ba4cGo-I.js";
const { computed } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { withModifiers } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
import * as v from "valibot";
const __module__Card__ = await globalThis.importAsync("#client/components/ui/card/Card.vue");
const Card = __module__Card__.default || __module__Card__;
const __module__CardHeader__ = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue");
const CardHeader = __module__CardHeader__.default || __module__CardHeader__;
const __module__CardTitle__ = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue");
const CardTitle = __module__CardTitle__.default || __module__CardTitle__;
const __module__CardDescription__ = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue");
const CardDescription = __module__CardDescription__.default || __module__CardDescription__;
const __module__CardContent__ = await globalThis.importAsync("#client/components/ui/card/CardContent.vue");
const CardContent = __module__CardContent__.default || __module__CardContent__;
const { useRoute } = await globalThis.importAsync("vue-router");
const { useRouter } = await globalThis.importAsync("vue-router");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
import { toTypedSchema } from "@vee-validate/valibot";
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const __module__CardFooter__ = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue");
const CardFooter = __module__CardFooter__.default || __module__CardFooter__;
const __module__Tabs$1__ = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue");
const Tabs$1 = __module__Tabs$1__.default || __module__Tabs$1__;
const __module__FormTextarea__ = await globalThis.importAsync("#client/components/FormTextarea.vue");
const FormTextarea = __module__FormTextarea__.default || __module__FormTextarea__;
const __module__TextField__ = await globalThis.importAsync("#client/components/TextField.vue");
const TextField = __module__TextField__.default || __module__TextField__;
//#region modules/mod/client/pages/admin/products/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const id = computed(() => route.params.id);
		const product = ref(null);
		const saving = ref(false);
		const { handleSubmit, setValues } = useForm({ validationSchema: toTypedSchema(v.object({
			name: v.pipe(v.string(), v.minLength(2, $t("Name is required"))),
			description: v.optional(v.string())
		})) });
		async function loadProduct() {
			const [error, response] = await $fetch.try(`/api/zpayments/products/${id.value}`, { method: "GET" });
			if (error) {
				console.error("Failed to load product:", id.value);
				console.error(error);
				return;
			}
			product.value = response;
			setValues({
				name: response.name,
				description: response.description || ""
			});
		}
		onMounted(loadProduct);
		const tab = computed({
			get: () => route.query.tab || "prices",
			set: (value) => {
				router.replace({
					path: route.path,
					query: { tab: value }
				});
			}
		});
		const formatDate = (date) => {
			if (!date) return $t("N/A");
			return new Intl.DateTimeFormat("pt-BR", {
				dateStyle: "short",
				timeStyle: "short"
			}).format(new Date(date));
		};
		const onSubmit = handleSubmit(async (formValues) => {
			saving.value = true;
			const [error] = await $fetch.try(`/api/zpayments/products/${id.value}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formValues)
			});
			if (error) {
				console.error("Failed to save product:", error);
				toast.error($t("Failed to update."));
				saving.value = false;
				return;
			}
			toast.success($t("Updated successfully."));
			saving.value = false;
			await loadProduct();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex min-h-full w-full [&amp;&gt;*]:px-4 -mx-2"${_scopeId}><div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col"${_scopeId}>`);
						if (product.value) {
							_push(`<form${_scopeId}>`);
							_push(ssrRenderComponent(Card, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(CardHeader, null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(CardTitle, null, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(_ctx.$t("Product Details"))}`);
															else return [createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)];
														}),
														_: 1
													}, _parent, _scopeId));
													_push(ssrRenderComponent(CardDescription, null, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(_ctx.$t("Edit product information"))}`);
															else return [createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)];
														}),
														_: 1
													}, _parent, _scopeId));
												} else return [createVNode(CardTitle, null, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)]),
													_: 1
												}), createVNode(CardDescription, null, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(CardContent, { class: "space-y-6" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(FormTextField, {
														name: "name",
														label: _ctx.$t("Name")
													}, null, _parent, _scopeId));
													_push(ssrRenderComponent(FormTextarea, {
														name: "description",
														label: _ctx.$t("Description")
													}, null, _parent, _scopeId));
													_push(ssrRenderComponent(TextField, {
														label: _ctx.$t("Created At"),
														"model-value": formatDate(product.value.created_at),
														readonly: ""
													}, null, _parent, _scopeId));
													_push(ssrRenderComponent(TextField, {
														label: _ctx.$t("Updated At"),
														"model-value": formatDate(product.value.updated_at),
														readonly: ""
													}, null, _parent, _scopeId));
												} else return [
													createVNode(FormTextField, {
														name: "name",
														label: _ctx.$t("Name")
													}, null, 8, ["label"]),
													createVNode(FormTextarea, {
														name: "description",
														label: _ctx.$t("Description")
													}, null, 8, ["label"]),
													createVNode(TextField, {
														label: _ctx.$t("Created At"),
														"model-value": formatDate(product.value.created_at),
														readonly: ""
													}, null, 8, ["label", "model-value"]),
													createVNode(TextField, {
														label: _ctx.$t("Updated At"),
														"model-value": formatDate(product.value.updated_at),
														readonly: ""
													}, null, 8, ["label", "model-value"])
												];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(CardFooter, { class: "flex justify-end" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(Button, {
													type: "submit",
													loading: saving.value
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Update"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Update")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(Button, {
													type: "submit",
													loading: saving.value
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Update")), 1)]),
													_: 1
												}, 8, ["loading"])];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [
										createVNode(CardHeader, null, {
											default: withCtx(() => [createVNode(CardTitle, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)]),
												_: 1
											}), createVNode(CardDescription, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(CardContent, { class: "space-y-6" }, {
											default: withCtx(() => [
												createVNode(FormTextField, {
													name: "name",
													label: _ctx.$t("Name")
												}, null, 8, ["label"]),
												createVNode(FormTextarea, {
													name: "description",
													label: _ctx.$t("Description")
												}, null, 8, ["label"]),
												createVNode(TextField, {
													label: _ctx.$t("Created At"),
													"model-value": formatDate(product.value.created_at),
													readonly: ""
												}, null, 8, ["label", "model-value"]),
												createVNode(TextField, {
													label: _ctx.$t("Updated At"),
													"model-value": formatDate(product.value.updated_at),
													readonly: ""
												}, null, 8, ["label", "model-value"])
											]),
											_: 1
										}),
										createVNode(CardFooter, { class: "flex justify-end" }, {
											default: withCtx(() => [createVNode(Button, {
												type: "submit",
												loading: saving.value
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Update")), 1)]),
												_: 1
											}, 8, ["loading"])]),
											_: 1
										})
									];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</form>`);
						} else _push(`<!---->`);
						_push(`</div><div class="flex-1 flex flex-col"${_scopeId}>`);
						_push(ssrRenderComponent(Tabs$1, {
							modelValue: tab.value,
							"onUpdate:modelValue": ($event) => tab.value = $event,
							"default-value": "prices"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(TabsList), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(TabsTrigger), { value: "prices" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Prices"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(TabsTrigger), { value: "metas" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Metas"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(TabsTrigger), { value: "payments" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Payments"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [
												createVNode(unref(TabsTrigger), { value: "prices" }, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)]),
													_: 1
												}),
												createVNode(unref(TabsTrigger), { value: "metas" }, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)]),
													_: 1
												}),
												createVNode(unref(TabsTrigger), { value: "payments" }, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
													_: 1
												})
											];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(TabsContent), { value: "prices" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(ProductPricesTable_default, { "product-id": id.value }, null, _parent, _scopeId));
											else return [createVNode(ProductPricesTable_default, { "product-id": id.value }, null, 8, ["product-id"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(TabsContent), { value: "metas" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(ProductMetasTable_default, { "product-id": id.value }, null, _parent, _scopeId));
											else return [createVNode(ProductMetasTable_default, { "product-id": id.value }, null, 8, ["product-id"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(TabsContent), { value: "payments" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(ProductPaymentsTable_default, { "product-id": id.value }, null, _parent, _scopeId));
											else return [createVNode(ProductPaymentsTable_default, { "product-id": id.value }, null, 8, ["product-id"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									createVNode(unref(TabsList), null, {
										default: withCtx(() => [
											createVNode(unref(TabsTrigger), { value: "prices" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)]),
												_: 1
											}),
											createVNode(unref(TabsTrigger), { value: "metas" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)]),
												_: 1
											}),
											createVNode(unref(TabsTrigger), { value: "payments" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
												_: 1
											})
										]),
										_: 1
									}),
									createVNode(unref(TabsContent), { value: "prices" }, {
										default: withCtx(() => [createVNode(ProductPricesTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
										_: 1
									}),
									createVNode(unref(TabsContent), { value: "metas" }, {
										default: withCtx(() => [createVNode(ProductMetasTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
										_: 1
									}),
									createVNode(unref(TabsContent), { value: "payments" }, {
										default: withCtx(() => [createVNode(ProductPaymentsTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
										_: 1
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, [createVNode("div", { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, [product.value ? (openBlock(), createBlock("form", {
						key: 0,
						onSubmit: withModifiers(unref(onSubmit), ["prevent"])
					}, [createVNode(Card, null, {
						default: withCtx(() => [
							createVNode(CardHeader, null, {
								default: withCtx(() => [createVNode(CardTitle, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)]),
									_: 1
								}), createVNode(CardDescription, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(CardContent, { class: "space-y-6" }, {
								default: withCtx(() => [
									createVNode(FormTextField, {
										name: "name",
										label: _ctx.$t("Name")
									}, null, 8, ["label"]),
									createVNode(FormTextarea, {
										name: "description",
										label: _ctx.$t("Description")
									}, null, 8, ["label"]),
									createVNode(TextField, {
										label: _ctx.$t("Created At"),
										"model-value": formatDate(product.value.created_at),
										readonly: ""
									}, null, 8, ["label", "model-value"]),
									createVNode(TextField, {
										label: _ctx.$t("Updated At"),
										"model-value": formatDate(product.value.updated_at),
										readonly: ""
									}, null, 8, ["label", "model-value"])
								]),
								_: 1
							}),
							createVNode(CardFooter, { class: "flex justify-end" }, {
								default: withCtx(() => [createVNode(Button, {
									type: "submit",
									loading: saving.value
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Update")), 1)]),
									_: 1
								}, 8, ["loading"])]),
								_: 1
							})
						]),
						_: 1
					})], 40, ["onSubmit"])) : createCommentVNode("", true)]), createVNode("div", { class: "flex-1 flex flex-col" }, [createVNode(Tabs$1, {
						modelValue: tab.value,
						"onUpdate:modelValue": ($event) => tab.value = $event,
						"default-value": "prices"
					}, {
						default: withCtx(() => [
							createVNode(unref(TabsList), null, {
								default: withCtx(() => [
									createVNode(unref(TabsTrigger), { value: "prices" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)]),
										_: 1
									}),
									createVNode(unref(TabsTrigger), { value: "metas" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)]),
										_: 1
									}),
									createVNode(unref(TabsTrigger), { value: "payments" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
										_: 1
									})
								]),
								_: 1
							}),
							createVNode(unref(TabsContent), { value: "prices" }, {
								default: withCtx(() => [createVNode(ProductPricesTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
								_: 1
							}),
							createVNode(unref(TabsContent), { value: "metas" }, {
								default: withCtx(() => [createVNode(ProductMetasTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
								_: 1
							}),
							createVNode(unref(TabsContent), { value: "payments" }, {
								default: withCtx(() => [createVNode(ProductPaymentsTable_default, { "product-id": id.value }, null, 8, ["product-id"])]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])])])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/products/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/products/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _id__default as default };
