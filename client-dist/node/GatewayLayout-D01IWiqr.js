const { defineComponent } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { Fragment } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { renderSlot } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderSlot } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
import GatewayConfig from "./gatewayConfig.entity-Nc81nVpp.js";
const { $fetch } = await globalThis.importAsync("#client/utils");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GatewayLayout",
  __ssrInlineRender: true,
  props: {
    "gateway": {
      type: Object
    },
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex [&amp;&gt;*]:px-4 -mx-4"${_scopeId}><div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12"${_scopeId}>`);
            if (gateway.value) {
              _push2(ssrRenderComponent(unref(Card), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(CardHeader), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(CardTitle), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(gateway.value.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(gateway.value.name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(CardDescription), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(gateway.value.gateway)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(gateway.value.gateway), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(CardTitle), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(gateway.value.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(CardDescription), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(gateway.value.gateway), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(CardContent), { class: "flex flex-col" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(menu, (item) => {
                            _push4(ssrRenderComponent(Button, {
                              key: item.label,
                              to: item.to,
                              variant: item.to === unref(route).path ? "default" : "ghost",
                              class: "w-full justify-start"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                              return createVNode(Button, {
                                key: item.label,
                                to: item.to,
                                variant: item.to === unref(route).path ? "default" : "ghost",
                                class: "w-full justify-start"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "variant"]);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(CardHeader), null, {
                        default: withCtx(() => [
                          createVNode(unref(CardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(gateway.value.name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CardDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(gateway.value.gateway), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(CardContent), { class: "flex flex-col" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                            return createVNode(Button, {
                              key: item.label,
                              to: item.to,
                              variant: item.to === unref(route).path ? "default" : "ghost",
                              class: "w-full justify-start"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "variant"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="w-full md:w-6/12 lg:w-8/12 xl:w-9/12"${_scopeId}>`);
            if (gateway.value) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex [&>*]:px-4 -mx-4" }, [
                createVNode("div", { class: "w-full md:w-6/12 lg:w-4/12 xl:w-3/12" }, [
                  gateway.value ? (openBlock(), createBlock(unref(Card), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(unref(CardHeader), null, {
                        default: withCtx(() => [
                          createVNode(unref(CardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(gateway.value.name), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CardDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(gateway.value.gateway), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(CardContent), { class: "flex flex-col" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(menu, (item) => {
                            return createVNode(Button, {
                              key: item.label,
                              to: item.to,
                              variant: item.to === unref(route).path ? "default" : "ghost",
                              class: "w-full justify-start"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "variant"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "w-full md:w-6/12 lg:w-8/12 xl:w-9/12" }, [
                  gateway.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/layouts/GatewayLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
