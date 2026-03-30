import { t as GatewayEntityTable_default } from "./GatewayEntityTable-mZJESWTI.js";
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
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardAction } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
//#region modules/mod/client/components/GatewaySubscriptions.vue?vue&type=script&setup=true&lang.ts
var GatewaySubscriptions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GatewaySubscriptions",
	__ssrInlineRender: true,
	props: { gateway: {} },
	setup(__props) {
		const props = __props;
		const syncing = ref(false);
		const loading = ref(false);
		const tableRef = ref();
		async function sync() {
			syncing.value = true;
			const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}/subscriptions/sync`, { method: "POST" });
			if (error) {
				syncing.value = false;
				return;
			}
			toast.success($t("Subscriptions synced successfully."));
			setTimeout(() => {
				syncing.value = false;
			}, 1e3);
		}
		async function load() {
			tableRef.value?.load();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Card), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(CardHeader), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CardTitle), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Subscriptions"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Subscriptions")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Manage subscriptions associated with this gateway."))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Manage subscriptions associated with this gateway.")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardAction), { class: "flex items-center gap-2" }, {
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
												_push(ssrRenderComponent(Button, {
													loading: syncing.value,
													onClick: sync
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`${ssrInterpolate(_ctx.$t("Sync"))}`);
														else return [createTextVNode(toDisplayString(_ctx.$t("Sync")), 1)];
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
											}, 8, ["disabled"]), createVNode(Button, {
												loading: syncing.value,
												onClick: sync
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Sync")), 1)]),
												_: 1
											}, 8, ["loading"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									createVNode(unref(CardTitle), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Subscriptions")), 1)]),
										_: 1
									}),
									createVNode(unref(CardDescription), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Manage subscriptions associated with this gateway.")), 1)]),
										_: 1
									}),
									createVNode(unref(CardAction), { class: "flex items-center gap-2" }, {
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
										}, 8, ["disabled"]), createVNode(Button, {
											loading: syncing.value,
											onClick: sync
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Sync")), 1)]),
											_: 1
										}, 8, ["loading"])]),
										_: 1
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(GatewayEntityTable_default, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									"gateway-id": __props.gateway?.id,
									"entity-type": "subscription"
								}, null, _parent, _scopeId));
								else return [createVNode(GatewayEntityTable_default, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									"gateway-id": __props.gateway?.id,
									"entity-type": "subscription"
								}, null, 8, [
									"loading",
									"onUpdate:loading",
									"gateway-id"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader), null, {
						default: withCtx(() => [
							createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Subscriptions")), 1)]),
								_: 1
							}),
							createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Manage subscriptions associated with this gateway.")), 1)]),
								_: 1
							}),
							createVNode(unref(CardAction), { class: "flex items-center gap-2" }, {
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
								}, 8, ["disabled"]), createVNode(Button, {
									loading: syncing.value,
									onClick: sync
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Sync")), 1)]),
									_: 1
								}, 8, ["loading"])]),
								_: 1
							})
						]),
						_: 1
					}), createVNode(unref(CardContent), null, {
						default: withCtx(() => [createVNode(GatewayEntityTable_default, {
							ref_key: "tableRef",
							ref: tableRef,
							loading: loading.value,
							"onUpdate:loading": ($event) => loading.value = $event,
							"gateway-id": __props.gateway?.id,
							"entity-type": "subscription"
						}, null, 8, [
							"loading",
							"onUpdate:loading",
							"gateway-id"
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
//#region modules/mod/client/components/GatewaySubscriptions.vue
var _sfc_setup = GatewaySubscriptions_vue_vue_type_script_setup_true_lang_default.setup;
GatewaySubscriptions_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewaySubscriptions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GatewaySubscriptions_default = GatewaySubscriptions_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { GatewaySubscriptions_default as default };
