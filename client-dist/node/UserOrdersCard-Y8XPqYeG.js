import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { t as UserOrdersTable_default } from "./UserOrdersTable-BBWVtFM_.js";
const { createTextVNode } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { mergeModels } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const { Card } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardAction } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card/index.ts");
//#region modules/mod/client/components/UserOrdersCard.vue?vue&type=script&setup=true&lang.ts
var UserOrdersCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "UserOrdersCard",
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
	setup(__props) {
		const props = __props;
		const tableRef = ref();
		const loading = useModel(__props, "loading");
		function load() {
			return tableRef.value?.load();
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
											if (_push) _push(`${ssrInterpolate(_ctx.$t("Orders"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardDescription), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(_ctx.$t("List of orders"))}`);
											else return [createTextVNode(toDisplayString(_ctx.$t("List of orders")), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(unref(CardAction), null, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(Button, {
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
											else return [createVNode(Button, {
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
											}, 8, ["disabled"])];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [
									createVNode(unref(CardTitle), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)]),
										_: 1
									}),
									createVNode(unref(CardDescription), null, {
										default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("List of orders")), 1)]),
										_: 1
									}),
									createVNode(unref(CardAction), null, {
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
										}, 8, ["disabled"])]),
										_: 1
									})
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(CardContent), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(UserOrdersTable_default, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									"user-id": props.userId
								}, null, _parent, _scopeId));
								else return [createVNode(UserOrdersTable_default, {
									ref_key: "tableRef",
									ref: tableRef,
									loading: loading.value,
									"onUpdate:loading": ($event) => loading.value = $event,
									"user-id": props.userId
								}, null, 8, [
									"loading",
									"onUpdate:loading",
									"user-id"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(unref(CardHeader), null, {
						default: withCtx(() => [
							createVNode(unref(CardTitle), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)]),
								_: 1
							}),
							createVNode(unref(CardDescription), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("List of orders")), 1)]),
								_: 1
							}),
							createVNode(unref(CardAction), null, {
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
								}, 8, ["disabled"])]),
								_: 1
							})
						]),
						_: 1
					}), createVNode(unref(CardContent), null, {
						default: withCtx(() => [createVNode(UserOrdersTable_default, {
							ref_key: "tableRef",
							ref: tableRef,
							loading: loading.value,
							"onUpdate:loading": ($event) => loading.value = $event,
							"user-id": props.userId
						}, null, 8, [
							"loading",
							"onUpdate:loading",
							"user-id"
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
//#region modules/mod/client/components/UserOrdersCard.vue
var UserOrdersCard_exports = /* @__PURE__ */ __exportAll({ default: () => UserOrdersCard_default });
var _sfc_setup = UserOrdersCard_vue_vue_type_script_setup_true_lang_default.setup;
UserOrdersCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/UserOrdersCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var UserOrdersCard_default = UserOrdersCard_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { UserOrdersCard_exports as n, UserOrdersCard_default as t };
