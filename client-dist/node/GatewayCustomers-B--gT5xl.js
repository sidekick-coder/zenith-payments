const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { toast } = await globalThis.importAsync("vue-sonner");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardAction } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
import _sfc_main$1 from "./GatewayEntityTable-HxIAD7eA.js";
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { $t } = await globalThis.importAsync("#shared/lang");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GatewayCustomers",
  __ssrInlineRender: true,
  props: {
    gateway: {}
  },
  setup(__props) {
    const props = __props;
    const syncing = ref(false);
    const loading = ref(false);
    const tableRef = ref();
    async function sync() {
      syncing.value = true;
      const [error] = await $fetch.try(`/api/zpayments/gateways/${props.gateway.id}/customers/sync`, {
        method: "POST"
      });
      if (error) {
        syncing.value = false;
        return;
      }
      toast.success($t("Customers synced successfully."));
      setTimeout(() => {
        syncing.value = false;
      }, 1e3);
    }
    async function load() {
      tableRef.value?.load();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Card), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CardHeader), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CardTitle), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("Customers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("Customers")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardDescription), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref($t)("Manage customers associated with this gateway."))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref($t)("Manage customers associated with this gateway.")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardAction), { class: "flex items-center gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Button, {
                          variant: "outline",
                          size: "icon",
                          disabled: loading.value,
                          onClick: load
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Icon, {
                                name: "RotateCcw",
                                class: { "animate-spin": loading.value }
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Icon, {
                                  name: "RotateCcw",
                                  class: { "animate-spin": loading.value }
                                }, null, 8, ["class"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Button, {
                          loading: syncing.value,
                          onClick: sync
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref($t)("Sync"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref($t)("Sync")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(Button, {
                            variant: "outline",
                            size: "icon",
                            disabled: loading.value,
                            onClick: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Icon, {
                                name: "RotateCcw",
                                class: { "animate-spin": loading.value }
                              }, null, 8, ["class"])
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(Button, {
                            loading: syncing.value,
                            onClick: sync
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref($t)("Sync")), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CardTitle), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Customers")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CardDescription), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Manage customers associated with this gateway.")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CardAction), { class: "flex items-center gap-2" }, {
                      default: withCtx(() => [
                        createVNode(Button, {
                          variant: "outline",
                          size: "icon",
                          disabled: loading.value,
                          onClick: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Icon, {
                              name: "RotateCcw",
                              class: { "animate-spin": loading.value }
                            }, null, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(Button, {
                          loading: syncing.value,
                          onClick: sync
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref($t)("Sync")), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CardContent), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    "gateway-id": __props.gateway?.id,
                    "entity-type": "customer"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      ref_key: "tableRef",
                      ref: tableRef,
                      loading: loading.value,
                      "onUpdate:loading": ($event) => loading.value = $event,
                      "gateway-id": __props.gateway?.id,
                      "entity-type": "customer"
                    }, null, 8, ["loading", "onUpdate:loading", "gateway-id"])
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
                      createTextVNode(toDisplayString(unref($t)("Customers")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CardDescription), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref($t)("Manage customers associated with this gateway.")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CardAction), { class: "flex items-center gap-2" }, {
                    default: withCtx(() => [
                      createVNode(Button, {
                        variant: "outline",
                        size: "icon",
                        disabled: loading.value,
                        onClick: load
                      }, {
                        default: withCtx(() => [
                          createVNode(Icon, {
                            name: "RotateCcw",
                            class: { "animate-spin": loading.value }
                          }, null, 8, ["class"])
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(Button, {
                        loading: syncing.value,
                        onClick: sync
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref($t)("Sync")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(CardContent), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    "gateway-id": __props.gateway?.id,
                    "entity-type": "customer"
                  }, null, 8, ["loading", "onUpdate:loading", "gateway-id"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewayCustomers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
