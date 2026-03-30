import { t as schemas } from "./validators-tuSupu-X.js";
import { t as GatewayConfig } from "./gatewayConfig.entity-C1BWyIfg.js";
const { Fragment } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineAsyncComponent } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { isRef } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { resolveDynamicComponent } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { withModifiers } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderVNode } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__PageTitle__ = await globalThis.importAsync("#client/components/PageTitle.vue");
const PageTitle = __module__PageTitle__.default || __module__PageTitle__;
const __module__PageSubtitle__ = await globalThis.importAsync("#client/components/PageSubtitle.vue");
const PageSubtitle = __module__PageSubtitle__.default || __module__PageSubtitle__;
const { useRoute } = await globalThis.importAsync("vue-router");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
import { useRouteQuery } from "@vueuse/router";
import { toTypedSchema } from "@vee-validate/valibot";
const { Tabs } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { Skeleton } = await globalThis.importAsync("#client/components/ui/skeleton");
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
//#region modules/mod/client/pages/admin/gateways/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const gatewayId = computed(() => route.params.id);
		const gateway = ref();
		const loading = ref(true);
		const savingDetails = ref(false);
		const tab = useRouteQuery("tab", "config");
		const tabs = [
			{
				id: "config",
				label: $t("Configuration"),
				component: defineAsyncComponent(() => import("./GatewayConfig-BkvC5CIn.js"))
			},
			{
				id: "customers",
				label: $t("Customers"),
				component: defineAsyncComponent(() => import("./GatewayCustomers-Cte1Hl-X.js"))
			},
			{
				id: "subscriptions",
				label: $t("Subscriptions"),
				component: defineAsyncComponent(() => import("./GatewaySubscriptions-CW0yHIVx.js"))
			}
		];
		const { handleSubmit: handleDetailsSubmit, setValues: setDetailsValues } = useForm({ validationSchema: toTypedSchema(schemas.gateway.update) });
		async function loadGateway() {
			loading.value = true;
			const [error, response] = await tryCatch(() => $fetch(`/api/zpayments/gateways/${gatewayId.value}`, { method: "GET" }));
			if (error) {
				console.error("Failed to load gateway:", error);
				loading.value = false;
				return;
			}
			gateway.value = GatewayConfig.from(response);
			setDetailsValues({
				name: response?.name || "",
				description: response?.description || ""
			});
			setTimeout(() => {
				loading.value = false;
			}, 500);
		}
		const onDetailsSubmit = handleDetailsSubmit(async (data) => {
			savingDetails.value = true;
			const [error] = await $fetch.try(`/api/zpayments/gateways/${gatewayId.value}`, {
				method: "PUT",
				data
			});
			if (error) {
				savingDetails.value = false;
				return;
			}
			if (gateway.value) {
				gateway.value.name = data.name;
				gateway.value.description = data.description;
			}
			setTimeout(() => {
				toast.success($t("Updated successfully."));
				savingDetails.value = false;
			}, 500);
		});
		onMounted(loadGateway);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, mergeProps({ breadcrumbs: [{
				label: _ctx.$t("Gateways"),
				to: "/admin/gateways"
			}, { label: gateway.value?.name || "..." }] }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) if (loading.value) {
						_push(`<div class="flex flex-col space-y-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Skeleton), { class: "h-[125px] w- rounded-xl" }, null, _parent, _scopeId));
						_push(`<div class="space-y-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Skeleton), { class: "h-4 w-[80%]" }, null, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Skeleton), { class: "h-4 w-[60%]" }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else {
						_push(`<div class="flex flex-wrap [&amp;&gt;*]:px-4 gap-y-4 -mx-4"${_scopeId}><div class="w-full flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(PageTitle, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(_ctx.$t("Edit Gateway"))}`);
								else return [createTextVNode(toDisplayString(_ctx.$t("Edit Gateway")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PageSubtitle, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(_ctx.$t("Update the gateway information below"))}`);
								else return [createTextVNode(toDisplayString(_ctx.$t("Update the gateway information below")), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6"${_scopeId}>`);
						if (gateway.value) _push(ssrRenderComponent(unref(Card), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardHeader), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(CardTitle), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Details"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(CardDescription), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Gateway general information"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Gateway general information")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [createVNode(unref(CardTitle), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
												_: 1
											}), createVNode(unref(CardDescription), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Gateway general information")), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardContent), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<form class="space-y-4 w-full"${_scopeId}>`);
												_push(ssrRenderComponent(FormTextField, {
													name: "name",
													label: _ctx.$t("Name")
												}, null, _parent, _scopeId));
												_push(ssrRenderComponent(FormTextField, {
													name: "description",
													label: _ctx.$t("Description")
												}, null, _parent, _scopeId));
												_push(`<div class="flex gap-3 pt-4 justify-end"${_scopeId}>`);
												_push(ssrRenderComponent(Button, {
													type: "submit",
													loading: savingDetails.value
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Save"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(`</div></form>`);
											} else return [createVNode("form", {
												class: "space-y-4 w-full",
												onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
											}, [
												createVNode(FormTextField, {
													name: "name",
													label: _ctx.$t("Name")
												}, null, 8, ["label"]),
												createVNode(FormTextField, {
													name: "description",
													label: _ctx.$t("Description")
												}, null, 8, ["label"]),
												createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [createVNode(Button, {
													type: "submit",
													loading: savingDetails.value
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
													_: 1
												}, 8, ["loading"])])
											], 40, ["onSubmit"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardHeader), null, {
									default: withCtx(() => [createVNode(unref(CardTitle), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
										_: 1
									}), createVNode(unref(CardDescription), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Gateway general information")), 1)]),
										_: 1
									})]),
									_: 1
								}), createVNode(unref(CardContent), null, {
									default: withCtx(() => [createVNode("form", {
										class: "space-y-4 w-full",
										onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
									}, [
										createVNode(FormTextField, {
											name: "name",
											label: _ctx.$t("Name")
										}, null, 8, ["label"]),
										createVNode(FormTextField, {
											name: "description",
											label: _ctx.$t("Description")
										}, null, 8, ["label"]),
										createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [createVNode(Button, {
											type: "submit",
											loading: savingDetails.value
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
											_: 1
										}, 8, ["loading"])])
									], 40, ["onSubmit"])]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div><div class="w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6"${_scopeId}>`);
						if (gateway.value) _push(ssrRenderComponent(unref(Tabs), {
							modelValue: unref(tab),
							"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
							class: "w-full"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(TabsList), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<!--[-->`);
												ssrRenderList(tabs, (t) => {
													_push(ssrRenderComponent(unref(TabsTrigger), {
														key: t.id,
														value: t.id
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(t.label)}`);
															else return [createTextVNode(toDisplayString(t.label), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
												});
												_push(`<!--]-->`);
											} else return [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
												return createVNode(unref(TabsTrigger), {
													key: t.id,
													value: t.id
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
													_: 2
												}, 1032, ["value"]);
											}), 64))];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`<!--[-->`);
									ssrRenderList(tabs, (t) => {
										_push(ssrRenderComponent(unref(TabsContent), {
											key: t.id,
											value: t.id
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(t.component), { gateway: gateway.value }, null), _parent, _scopeId);
												else return [(openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [createVNode(unref(TabsList), null, {
									default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
										return createVNode(unref(TabsTrigger), {
											key: t.id,
											value: t.id
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
											_: 2
										}, 1032, ["value"]);
									}), 64))]),
									_: 1
								}), (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
									return createVNode(unref(TabsContent), {
										key: t.id,
										value: t.id
									}, {
										default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))]),
										_: 2
									}, 1032, ["value"]);
								}), 64))];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div></div>`);
					}
					else return [loading.value ? (openBlock(), createBlock("div", {
						key: 0,
						class: "flex flex-col space-y-3"
					}, [createVNode(unref(Skeleton), { class: "h-[125px] w- rounded-xl" }), createVNode("div", { class: "space-y-2" }, [createVNode(unref(Skeleton), { class: "h-4 w-[80%]" }), createVNode(unref(Skeleton), { class: "h-4 w-[60%]" })])])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
					}, [
						createVNode("div", { class: "w-full flex items-center justify-between" }, [createVNode("div", null, [createVNode(PageTitle, null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit Gateway")), 1)]),
							_: 1
						}), createVNode(PageSubtitle, null, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Update the gateway information below")), 1)]),
							_: 1
						})])]),
						createVNode("div", { class: "w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6" }, [gateway.value ? (openBlock(), createBlock(unref(Card), { key: 0 }, {
							default: withCtx(() => [createVNode(unref(CardHeader), null, {
								default: withCtx(() => [createVNode(unref(CardTitle), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
									_: 1
								}), createVNode(unref(CardDescription), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Gateway general information")), 1)]),
									_: 1
								})]),
								_: 1
							}), createVNode(unref(CardContent), null, {
								default: withCtx(() => [createVNode("form", {
									class: "space-y-4 w-full",
									onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
								}, [
									createVNode(FormTextField, {
										name: "name",
										label: _ctx.$t("Name")
									}, null, 8, ["label"]),
									createVNode(FormTextField, {
										name: "description",
										label: _ctx.$t("Description")
									}, null, 8, ["label"]),
									createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [createVNode(Button, {
										type: "submit",
										loading: savingDetails.value
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
										_: 1
									}, 8, ["loading"])])
								], 40, ["onSubmit"])]),
								_: 1
							})]),
							_: 1
						})) : createCommentVNode("", true)]),
						createVNode("div", { class: "w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6" }, [gateway.value ? (openBlock(), createBlock(unref(Tabs), {
							key: 0,
							modelValue: unref(tab),
							"onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
							class: "w-full"
						}, {
							default: withCtx(() => [createVNode(unref(TabsList), null, {
								default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
									return createVNode(unref(TabsTrigger), {
										key: t.id,
										value: t.id
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(t.label), 1)]),
										_: 2
									}, 1032, ["value"]);
								}), 64))]),
								_: 1
							}), (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
								return createVNode(unref(TabsContent), {
									key: t.id,
									value: t.id
								}, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))]),
									_: 2
								}, 1032, ["value"]);
							}), 64))]),
							_: 1
						}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)])
					]))];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/gateways/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/gateways/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _id__default as default };
