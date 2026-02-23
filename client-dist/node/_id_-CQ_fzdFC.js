const { defineComponent } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
const { useRouter } = await globalThis.importAsync("vue-router");
await globalThis.importAsync("vee-validate");
await globalThis.importAsync("vue-sonner");
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
const __module__Card__ = await globalThis.importAsync("#client/components/ui/card/Card.vue");
const Card = __module__Card__.default || __module__Card__;
const __module__CardDescription__ = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue");
const CardDescription = __module__CardDescription__.default || __module__CardDescription__;
const __module__CardHeader__ = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue");
const CardHeader = __module__CardHeader__.default || __module__CardHeader__;
const __module__CardTitle__ = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue");
const CardTitle = __module__CardTitle__.default || __module__CardTitle__;
const __module__CardContent__ = await globalThis.importAsync("#client/components/ui/card/CardContent.vue");
const CardContent = __module__CardContent__.default || __module__CardContent__;
await globalThis.importAsync("#client/components/ui/card/CardFooter.vue");
const __module__Tabs__ = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue");
const Tabs = __module__Tabs__.default || __module__Tabs__;
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
await globalThis.importAsync("#client/components/FormTextField.vue");
await globalThis.importAsync("#client/components/FormTextarea.vue");
await globalThis.importAsync("#client/components/Button.vue");
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__TextField__ = await globalThis.importAsync("#client/components/TextField.vue");
const TextField = __module__TextField__.default || __module__TextField__;
import "./UserOrdersTable-Cj_ZwdT1.js";
import _sfc_main$2 from "./UserPaymentsTable-D4U_9Mlk.js";
import _sfc_main$1 from "./UserOrdersCard-ws9gbHVC.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const id = computed(() => route.params.id);
    const user = ref(null);
    ref(false);
    async function load() {
      const [error, response] = await $fetch.try(`/api/users/${id.value}`, {
        method: "GET"
      });
      if (error) {
        return;
      }
      user.value = response;
    }
    onMounted(load);
    const tab = computed({
      get: () => route.query.tab || "orders",
      set: (value) => {
        router.replace({
          path: route.path,
          query: {
            tab: value
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex min-h-full w-full [&amp;&gt;*]:px-4 -mx-2"${_scopeId}><div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(Card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Details"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Details")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(CardDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Customer information"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CardContent, { class: "space-y-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(TextField, {
                          label: "ID",
                          "model-value": user.value?.id,
                          readonly: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(TextField, {
                          label: _ctx.$t("Name"),
                          "model-value": user.value?.name,
                          readonly: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(TextField, {
                          label: _ctx.$t("Email"),
                          "model-value": user.value?.email,
                          readonly: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
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
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardHeader, null, {
                      default: withCtx(() => [
                        createVNode(CardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Details")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(CardDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(CardContent, { class: "space-y-6" }, {
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 flex flex-col"${_scopeId}>`);
            if (user.value) {
              _push2(ssrRenderComponent(Tabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TabsList), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(TabsTrigger), { value: "orders" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Orders"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(TabsTrigger), { value: "payments" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Payments"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(TabsTrigger), { value: "orders" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabsTrigger), { value: "payments" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(TabsContent), { value: "orders" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            "user-id": user.value.id
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              "user-id": user.value.id
                            }, null, 8, ["user-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(TabsContent), { value: "payments" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            "user-id": user.value.id
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              "user-id": user.value.id
                            }, null, 8, ["user-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TabsList), null, {
                        default: withCtx(() => [
                          createVNode(unref(TabsTrigger), { value: "orders" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabsTrigger), { value: "payments" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "orders" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            "user-id": user.value.id
                          }, null, 8, ["user-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "payments" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, {
                            "user-id": user.value.id
                          }, null, 8, ["user-id"])
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, [
                createVNode("div", { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, [
                  createVNode(Card, null, {
                    default: withCtx(() => [
                      createVNode(CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Customer information")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(CardContent, { class: "space-y-6" }, {
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
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex-1 flex flex-col" }, [
                  user.value ? (openBlock(), createBlock(Tabs, {
                    key: 0,
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(TabsList), null, {
                        default: withCtx(() => [
                          createVNode(unref(TabsTrigger), { value: "orders" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabsTrigger), { value: "payments" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Payments")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "orders" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            "user-id": user.value.id
                          }, null, 8, ["user-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "payments" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, {
                            "user-id": user.value.id
                          }, null, 8, ["user-id"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
