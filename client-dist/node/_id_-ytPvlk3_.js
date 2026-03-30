import "./UserOrdersTable-BBWVtFM_.js";
import { t as UserOrdersCard_default } from "./UserOrdersCard-Y8XPqYeG.js";
import { t as UserPaymentsTable_default } from "./UserPaymentsTable-B_hAt7L-.js";
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
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
(await globalThis.importAsync("#client/components/Button.vue")).default;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
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
import "@vee-validate/valibot";
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
(await globalThis.importAsync("#client/components/FormTextField.vue")).default;
(await globalThis.importAsync("#client/components/ui/card/CardFooter.vue")).default;
const __module__Tabs$1__ = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue");
const Tabs$1 = __module__Tabs$1__.default || __module__Tabs$1__;
(await globalThis.importAsync("#client/components/FormTextarea.vue")).default;
const __module__TextField__ = await globalThis.importAsync("#client/components/TextField.vue");
const TextField = __module__TextField__.default || __module__TextField__;
//#region modules/mod/client/pages/admin/users/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const id = computed(() => route.params.id);
		const user = ref(null);
		ref(false);
		async function load() {
			const [error, response] = await $fetch.try(`/api/users/${id.value}`, { method: "GET" });
			if (error) return;
			user.value = response;
		}
		onMounted(load);
		const tab = computed({
			get: () => route.query.tab || "orders",
			set: (value) => {
				router.replace({
					path: route.path,
					query: { tab: value }
				});
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex min-h-full w-full [&amp;&gt;*]:px-4 -mx-2"${_scopeId}><div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col"${_scopeId}>`);
						_push(ssrRenderComponent(Card, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(CardHeader, null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(CardTitle, null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Details"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(CardDescription, null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Customer information"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [createVNode(CardTitle, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
												_: 1
											}), createVNode(CardDescription, null, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(CardContent, { class: "space-y-6" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(TextField, {
													label: "ID",
													"model-value": user.value?.id,
													readonly: ""
												}, null, _parent, _scopeId));
												_push(ssrRenderComponent(TextField, {
													label: _ctx.$t("Name"),
													"model-value": user.value?.name,
													readonly: ""
												}, null, _parent, _scopeId));
												_push(ssrRenderComponent(TextField, {
													label: _ctx.$t("Email"),
													"model-value": user.value?.email,
													readonly: ""
												}, null, _parent, _scopeId));
											} else return [
												createVNode(TextField, {
													label: "ID",
													"model-value": user.value?.id,
													readonly: ""
												}, null, 8, ["model-value"]),
												createVNode(TextField, {
													label: _ctx.$t("Name"),
													"model-value": user.value?.name,
													readonly: ""
												}, null, 8, ["label", "model-value"]),
												createVNode(TextField, {
													label: _ctx.$t("Email"),
													"model-value": user.value?.email,
													readonly: ""
												}, null, 8, ["label", "model-value"])
											];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(CardHeader, null, {
									default: withCtx(() => [createVNode(CardTitle, null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
										_: 1
									}), createVNode(CardDescription, null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)]),
										_: 1
									})]),
									_: 1
								}), createVNode(CardContent, { class: "space-y-6" }, {
									default: withCtx(() => [
										createVNode(TextField, {
											label: "ID",
											"model-value": user.value?.id,
											readonly: ""
										}, null, 8, ["model-value"]),
										createVNode(TextField, {
											label: _ctx.$t("Name"),
											"model-value": user.value?.name,
											readonly: ""
										}, null, 8, ["label", "model-value"]),
										createVNode(TextField, {
											label: _ctx.$t("Email"),
											"model-value": user.value?.email,
											readonly: ""
										}, null, 8, ["label", "model-value"])
									]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="flex-1 flex flex-col"${_scopeId}>`);
						if (user.value) _push(ssrRenderComponent(Tabs$1, {
							modelValue: tab.value,
							"onUpdate:modelValue": ($event) => tab.value = $event
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(TabsList), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(TabsTrigger), { value: "orders" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Orders"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)];
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
											} else return [createVNode(unref(TabsTrigger), { value: "orders" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)]),
												_: 1
											}), createVNode(unref(TabsTrigger), { value: "payments" }, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(TabsContent), { value: "orders" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(UserOrdersCard_default, { "user-id": user.value.id }, null, _parent, _scopeId));
											else return [createVNode(UserOrdersCard_default, { "user-id": user.value.id }, null, 8, ["user-id"])];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(TabsContent), { value: "payments" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(UserPaymentsTable_default, { "user-id": user.value.id }, null, _parent, _scopeId));
											else return [createVNode(UserPaymentsTable_default, { "user-id": user.value.id }, null, 8, ["user-id"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									createVNode(unref(TabsList), null, {
										default: withCtx(() => [createVNode(unref(TabsTrigger), { value: "orders" }, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)]),
											_: 1
										}), createVNode(unref(TabsTrigger), { value: "payments" }, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
											_: 1
										})]),
										_: 1
									}),
									createVNode(unref(TabsContent), { value: "orders" }, {
										default: withCtx(() => [createVNode(UserOrdersCard_default, { "user-id": user.value.id }, null, 8, ["user-id"])]),
										_: 1
									}),
									createVNode(unref(TabsContent), { value: "payments" }, {
										default: withCtx(() => [createVNode(UserPaymentsTable_default, { "user-id": user.value.id }, null, 8, ["user-id"])]),
										_: 1
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, [createVNode("div", { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, [createVNode(Card, null, {
						default: withCtx(() => [createVNode(CardHeader, null, {
							default: withCtx(() => [createVNode(CardTitle, null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Details")), 1)]),
								_: 1
							}), createVNode(CardDescription, null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)]),
								_: 1
							})]),
							_: 1
						}), createVNode(CardContent, { class: "space-y-6" }, {
							default: withCtx(() => [
								createVNode(TextField, {
									label: "ID",
									"model-value": user.value?.id,
									readonly: ""
								}, null, 8, ["model-value"]),
								createVNode(TextField, {
									label: _ctx.$t("Name"),
									"model-value": user.value?.name,
									readonly: ""
								}, null, 8, ["label", "model-value"]),
								createVNode(TextField, {
									label: _ctx.$t("Email"),
									"model-value": user.value?.email,
									readonly: ""
								}, null, 8, ["label", "model-value"])
							]),
							_: 1
						})]),
						_: 1
					})]), createVNode("div", { class: "flex-1 flex flex-col" }, [user.value ? (openBlock(), createBlock(Tabs$1, {
						key: 0,
						modelValue: tab.value,
						"onUpdate:modelValue": ($event) => tab.value = $event
					}, {
						default: withCtx(() => [
							createVNode(unref(TabsList), null, {
								default: withCtx(() => [createVNode(unref(TabsTrigger), { value: "orders" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)]),
									_: 1
								}), createVNode(unref(TabsTrigger), { value: "payments" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(unref(TabsContent), { value: "orders" }, {
								default: withCtx(() => [createVNode(UserOrdersCard_default, { "user-id": user.value.id }, null, 8, ["user-id"])]),
								_: 1
							}),
							createVNode(unref(TabsContent), { value: "payments" }, {
								default: withCtx(() => [createVNode(UserPaymentsTable_default, { "user-id": user.value.id }, null, 8, ["user-id"])]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)])])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/users/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/users/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = _id__vue_vue_type_script_setup_true_lang_default;
//#endregion
export { _id__default as default };
