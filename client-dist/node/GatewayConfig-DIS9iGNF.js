const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { watch } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { useForm } = await globalThis.importAsync("vee-validate");
const { toast } = await globalThis.importAsync("vue-sonner");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { CardFooter } = await globalThis.importAsync("#client/components/ui/card");
const __module__FormAutoFieldList__ = await globalThis.importAsync("#client/components/FormAutoFieldList.vue");
const FormAutoFieldList = __module__FormAutoFieldList__.default || __module__FormAutoFieldList__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { $t } = await globalThis.importAsync("#shared/lang");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GatewayConfig",
  __ssrInlineRender: true,
  props: {
    gateway: {}
  },
  setup(__props) {
    const props = __props;
    const savingConfig = ref(false);
    const { handleSubmit, setValues } = useForm();
    async function submitConfig(data) {
      savingConfig.value = true;
      const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}`, {
        method: "PUT",
        data: {
          config: data
        }
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
      if (newGateway) {
        setValues(newGateway.config || {});
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Card), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CardHeader), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CardTitle), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("Gateway Configuration"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("Gateway Configuration")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardDescription), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("Edit gateway-specific configuration"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("Edit gateway-specific configuration")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CardTitle), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Gateway Configuration")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CardDescription), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Edit gateway-specific configuration")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CardContent), { class: "space-y-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(FormAutoFieldList, {
                    fields: __props.gateway.configFields
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(FormAutoFieldList, {
                      fields: __props.gateway.configFields
                    }, null, 8, ["fields"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CardFooter), { class: "flex justify-end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Button, {
                    type: "submit",
                    loading: savingConfig.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("Save"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("Save")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Button, {
                      type: "submit",
                      loading: savingConfig.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Save")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CardHeader), null, {
                default: withCtx(() => [
                  createVNode(unref(CardTitle), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("Gateway Configuration")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CardDescription), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("Edit gateway-specific configuration")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(CardContent), { class: "space-y-4" }, {
                default: withCtx(() => [
                  createVNode(FormAutoFieldList, {
                    fields: __props.gateway.configFields
                  }, null, 8, ["fields"])
                ]),
                _: 1
              }),
              createVNode(unref(CardFooter), { class: "flex justify-end" }, {
                default: withCtx(() => [
                  createVNode(Button, {
                    type: "submit",
                    loading: savingConfig.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("Save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewayConfig.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
