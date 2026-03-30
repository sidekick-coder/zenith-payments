import { t as GatewayConfig } from "./gatewayConfig.entity-C1BWyIfg.js";
const { Fragment } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { renderSlot } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderSlot } = await globalThis.importAsync("vue/server-renderer");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { useRoute } = await globalThis.importAsync("vue-router");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const { $fetch } = await globalThis.importAsync("#client/utils");
//#region modules/mod/client/layouts/GatewayLayout.vue?vue&type=script&setup=true&lang.ts
var GatewayLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GatewayLayout",
	__ssrInlineRender: true,
	props: {
		"gateway": { type: Object },
		"gatewayModifiers": {}
	},
	emits: ["update:gateway"],
	setup(__props) {
		const route = useRoute();
		const id = computed(() => route.params.id);
		const gateway = useModel(__props, "gateway");
		const menu = [
			{
				label: $t("Details"),
				to: `/admin/zpayments/gateways/${id.value}/details`
			},
			{
				label: $t("Subscriptions"),
				to: `/admin/zpayments/gateways/${id.value}/subscriptions`
			},
			{
				label: $t("Customers"),
				to: `/admin/zpayments/gateways/${id.value}/customers`
			},
			{
				label: $t("Configuration"),
				to: `/admin/zpayments/gateways/${id.value}/config`
			}
		];
		async function load() {
			const [error, response] = await $fetch.try(`/api/zpayments/gateways/${id.value}`);
			if (error) {
				console.error("Failed to load gateway config", error);
				return;
			}
			gateway.value = GatewayConfig.from(response);
		}
		onMounted(load);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex [&amp;&gt;*]:px-4 -mx-4"${_scopeId}><div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12"${_scopeId}>`);
						if (gateway.value) _push(ssrRenderComponent(unref(Card), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardHeader), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(ssrRenderComponent(unref(CardTitle), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(gateway.value.name)}`);
														else return [createTextVNode(toDisplayString(gateway.value.name), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
												_push(ssrRenderComponent(unref(CardDescription), null, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(gateway.value.gateway)}`);
														else return [createTextVNode(toDisplayString(gateway.value.gateway), 1)];
													}),
													_: 1
												}, _parent, _scopeId));
											} else return [createVNode(unref(CardTitle), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.name), 1)]),
												_: 1
											}), createVNode(unref(CardDescription), null, {
												default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.gateway), 1)]),
												_: 1
											})];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardContent), { class: "flex flex-col" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												_push(`<!--[-->`);
												ssrRenderList(menu, (item) => {
													_push(ssrRenderComponent(Button, {
														key: item.label,
														to: item.to,
														variant: item.to === unref(route).path ? "default" : "ghost",
														class: "w-full justify-start"
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(`${ssrInterpolate(item.label)}`);
															else return [createTextVNode(toDisplayString(item.label), 1)];
														}),
														_: 2
													}, _parent, _scopeId));
												});
												_push(`<!--]-->`);
											} else return [(openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
												return createVNode(Button, {
													key: item.label,
													to: item.to,
													variant: item.to === unref(route).path ? "default" : "ghost",
													class: "w-full justify-start"
												}, {
													default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
													_: 2
												}, 1032, ["to", "variant"]);
											}), 64))];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardHeader), null, {
									default: withCtx(() => [createVNode(unref(CardTitle), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.name), 1)]),
										_: 1
									}), createVNode(unref(CardDescription), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.gateway), 1)]),
										_: 1
									})]),
									_: 1
								}), createVNode(unref(CardContent), { class: "flex flex-col" }, {
									default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
										return createVNode(Button, {
											key: item.label,
											to: item.to,
											variant: item.to === unref(route).path ? "default" : "ghost",
											class: "w-full justify-start"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
											_: 2
										}, 1032, ["to", "variant"]);
									}), 64))]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div><div class="w-full md:w-6/12 lg:w-8/12 xl:w-9/12"${_scopeId}>`);
						if (gateway.value) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex [&>*]:px-4 -mx-4" }, [createVNode("div", { class: "w-full md:w-6/12 lg:w-4/12 xl:w-3/12" }, [gateway.value ? (openBlock(), createBlock(unref(Card), { key: 0 }, {
						default: withCtx(() => [createVNode(unref(CardHeader), null, {
							default: withCtx(() => [createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.name), 1)]),
								_: 1
							}), createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(gateway.value.gateway), 1)]),
								_: 1
							})]),
							_: 1
						}), createVNode(unref(CardContent), { class: "flex flex-col" }, {
							default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
								return createVNode(Button, {
									key: item.label,
									to: item.to,
									variant: item.to === unref(route).path ? "default" : "ghost",
									class: "w-full justify-start"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
									_: 2
								}, 1032, ["to", "variant"]);
							}), 64))]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true)]), createVNode("div", { class: "w-full md:w-6/12 lg:w-8/12 xl:w-9/12" }, [gateway.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)])])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/layouts/GatewayLayout.vue
var _sfc_setup = GatewayLayout_vue_vue_type_script_setup_true_lang_default.setup;
GatewayLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/layouts/GatewayLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GatewayLayout_default = GatewayLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { GatewayLayout_default as default };
