const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { watch } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardFooter } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const __module__FormAutoFieldList__ = await globalThis.importAsync("#client/components/FormAutoFieldList.vue");
const FormAutoFieldList = __module__FormAutoFieldList__.default || __module__FormAutoFieldList__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
//#region modules/mod/client/components/GatewayConfig.vue?vue&type=script&setup=true&lang.ts
var GatewayConfig_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GatewayConfig",
	__ssrInlineRender: true,
	props: { gateway: {} },
	setup(__props) {
		const props = __props;
		const savingConfig = ref(false);
		const { handleSubmit, setValues } = useForm();
		async function submitConfig(data) {
			savingConfig.value = true;
			const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}`, {
				method: "PUT",
				data: { config: data }
			});
			if (error) {
				savingConfig.value = false;
				return;
			}
			setTimeout(() => {
				toast.success($t("Updated successfully."));
				savingConfig.value = false;
			}, 500);
		}
		handleSubmit(submitConfig);
		watch(() => props.gateway, (newGateway) => {
			if (newGateway) setValues(newGateway.config || {});
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<form${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Card), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardTitle), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Gateway Configuration"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Gateway Configuration")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Edit gateway-specific configuration"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Edit gateway-specific configuration")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(unref(CardTitle), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Gateway Configuration")), 1)]),
									_: 1
								}), createVNode(unref(CardDescription), null, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit gateway-specific configuration")), 1)]),
									_: 1
								})];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), { class: "space-y-4" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(FormAutoFieldList, { fields: __props.gateway.configFields }, null, _parent, _scopeId));
								else return [createVNode(FormAutoFieldList, { fields: __props.gateway.configFields }, null, 8, ["fields"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardFooter), { class: "flex justify-end" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(Button, {
									type: "submit",
									loading: savingConfig.value
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(_ctx.$t("Save"))}`);
										else return [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(Button, {
									type: "submit",
									loading: savingConfig.value
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
									_: 1
								}, 8, ["loading"])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(CardHeader), null, {
							default: withCtx(() => [createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Gateway Configuration")), 1)]),
								_: 1
							}), createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Edit gateway-specific configuration")), 1)]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(CardContent), { class: "space-y-4" }, {
							default: withCtx(() => [createVNode(FormAutoFieldList, { fields: __props.gateway.configFields }, null, 8, ["fields"])]),
							_: 1
						}),
						createVNode(unref(CardFooter), { class: "flex justify-end" }, {
							default: withCtx(() => [createVNode(Button, {
								type: "submit",
								loading: savingConfig.value
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Save")), 1)]),
								_: 1
							}, 8, ["loading"])]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`</form>`);
		};
	}
});
//#endregion
//#region modules/mod/client/components/GatewayConfig.vue
var _sfc_setup = GatewayConfig_vue_vue_type_script_setup_true_lang_default.setup;
GatewayConfig_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewayConfig.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GatewayConfig_default = GatewayConfig_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { GatewayConfig_default as default };
