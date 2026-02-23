const { defineComponent } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { defineAsyncComponent } = await globalThis.importAsync("vue");
const { onMounted } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { withModifiers } = await globalThis.importAsync("vue");
const { isRef } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { Fragment } = await globalThis.importAsync("vue");
const { renderList } = await globalThis.importAsync("vue");
const { resolveDynamicComponent } = await globalThis.importAsync("vue");
const { createCommentVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderList } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderVNode } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
const { useForm } = await globalThis.importAsync("vee-validate");
import { useRouteQuery } from "@vueuse/router";
import { toTypedSchema } from "@vee-validate/valibot";
const { toast } = await globalThis.importAsync("vue-sonner");
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
const { Card } = await globalThis.importAsync("#client/components/ui/card");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card");
const { Tabs } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const { Skeleton } = await globalThis.importAsync("#client/components/ui/skeleton");
const __module__PageTitle__ = await globalThis.importAsync("#client/components/PageTitle.vue");
const PageTitle = __module__PageTitle__.default || __module__PageTitle__;
const __module__PageSubtitle__ = await globalThis.importAsync("#client/components/PageSubtitle.vue");
const PageSubtitle = __module__PageSubtitle__.default || __module__PageSubtitle__;
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const { tryCatch } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
const { $t } = await globalThis.importAsync("#shared/lang");
import GatewayConfig from "./gatewayConfig.entity-Nc81nVpp.js";
import schemas from "./index-CAJ9ML3h.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        component: defineAsyncComponent(() => import("./GatewayConfig-DIS9iGNF.js"))
      },
      {
        id: "customers",
        label: $t("Customers"),
        component: defineAsyncComponent(() => import("./GatewayCustomers-B--gT5xl.js"))
      },
      {
        id: "subscriptions",
        label: $t("Subscriptions"),
        component: defineAsyncComponent(() => import("./GatewaySubscriptions-Cor1A_pP.js"))
      }
    ];
    const { handleSubmit: handleDetailsSubmit, setValues: setDetailsValues } = useForm({
      validationSchema: toTypedSchema(schemas.gateway.update)
    });
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
      _push(ssrRenderComponent(AppLayout, mergeProps({
        breadcrumbs: [
          { label: unref($t)("Gateways"), to: "/admin/gateways" },
          { label: gateway.value?.name || "..." }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col space-y-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Skeleton), { class: "h-[125px] w- rounded-xl" }, null, _parent2, _scopeId));
              _push2(`<div class="space-y-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Skeleton), { class: "h-4 w-[80%]" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Skeleton), { class: "h-4 w-[60%]" }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="flex flex-wrap [&amp;&gt;*]:px-4 gap-y-4 -mx-4"${_scopeId}><div class="w-full flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(PageTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref($t)("Edit Gateway"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref($t)("Edit Gateway")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(PageSubtitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref($t)("Update the gateway information below"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref($t)("Update the gateway information below")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6"${_scopeId}>`);
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
                                  _push5(`${ssrInterpolate(unref($t)("Details"))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref($t)("Details")), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(CardDescription), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref($t)("Gateway general information"))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref($t)("Gateway general information")), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(CardTitle), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref($t)("Details")), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(CardDescription), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref($t)("Gateway general information")), 1)
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(CardContent), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<form class="space-y-4 w-full"${_scopeId3}>`);
                            _push4(ssrRenderComponent(FormTextField, {
                              name: "name",
                              label: unref($t)("Name")
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(FormTextField, {
                              name: "description",
                              label: unref($t)("Description")
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="flex gap-3 pt-4 justify-end"${_scopeId3}>`);
                            _push4(ssrRenderComponent(Button, {
                              type: "submit",
                              loading: savingDetails.value
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref($t)("Save"))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref($t)("Save")), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div></form>`);
                          } else {
                            return [
                              createVNode("form", {
                                class: "space-y-4 w-full",
                                onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
                              }, [
                                createVNode(FormTextField, {
                                  name: "name",
                                  label: unref($t)("Name")
                                }, null, 8, ["label"]),
                                createVNode(FormTextField, {
                                  name: "description",
                                  label: unref($t)("Description")
                                }, null, 8, ["label"]),
                                createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [
                                  createVNode(Button, {
                                    type: "submit",
                                    loading: savingDetails.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref($t)("Save")), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
                                ])
                              ], 40, ["onSubmit"])
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
                                createTextVNode(toDisplayString(unref($t)("Details")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(CardDescription), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref($t)("Gateway general information")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(CardContent), null, {
                          default: withCtx(() => [
                            createVNode("form", {
                              class: "space-y-4 w-full",
                              onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
                            }, [
                              createVNode(FormTextField, {
                                name: "name",
                                label: unref($t)("Name")
                              }, null, 8, ["label"]),
                              createVNode(FormTextField, {
                                name: "description",
                                label: unref($t)("Description")
                              }, null, 8, ["label"]),
                              createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [
                                createVNode(Button, {
                                  type: "submit",
                                  loading: savingDetails.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref($t)("Save")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ])
                            ], 40, ["onSubmit"])
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
              _push2(`</div><div class="w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6"${_scopeId}>`);
              if (gateway.value) {
                _push2(ssrRenderComponent(unref(Tabs), {
                  modelValue: unref(tab),
                  "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                  class: "w-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(TabsList), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(tabs, (t) => {
                              _push4(ssrRenderComponent(unref(TabsTrigger), {
                                key: t.id,
                                value: t.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(t.label)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(t.label), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
                                return createVNode(unref(TabsTrigger), {
                                  key: t.id,
                                  value: t.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(t.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`<!--[-->`);
                      ssrRenderList(tabs, (t) => {
                        _push3(ssrRenderComponent(unref(TabsContent), {
                          key: t.id,
                          value: t.id
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(t.component), { gateway: gateway.value }, null), _parent4, _scopeId3);
                            } else {
                              return [
                                (openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        createVNode(unref(TabsList), null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
                              return createVNode(unref(TabsTrigger), {
                                key: t.id,
                                value: t.id
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
                          return createVNode(unref(TabsContent), {
                            key: t.id,
                            value: t.id
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col space-y-3"
              }, [
                createVNode(unref(Skeleton), { class: "h-[125px] w- rounded-xl" }),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(Skeleton), { class: "h-4 w-[80%]" }),
                  createVNode(unref(Skeleton), { class: "h-4 w-[60%]" })
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
              }, [
                createVNode("div", { class: "w-full flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode(PageTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Edit Gateway")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(PageSubtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref($t)("Update the gateway information below")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6" }, [
                  gateway.value ? (openBlock(), createBlock(unref(Card), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(unref(CardHeader), null, {
                        default: withCtx(() => [
                          createVNode(unref(CardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref($t)("Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CardDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref($t)("Gateway general information")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(CardContent), null, {
                        default: withCtx(() => [
                          createVNode("form", {
                            class: "space-y-4 w-full",
                            onSubmit: withModifiers(unref(onDetailsSubmit), ["prevent"])
                          }, [
                            createVNode(FormTextField, {
                              name: "name",
                              label: unref($t)("Name")
                            }, null, 8, ["label"]),
                            createVNode(FormTextField, {
                              name: "description",
                              label: unref($t)("Description")
                            }, null, 8, ["label"]),
                            createVNode("div", { class: "flex gap-3 pt-4 justify-end" }, [
                              createVNode(Button, {
                                type: "submit",
                                loading: savingDetails.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref($t)("Save")), 1)
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ])
                          ], 40, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6" }, [
                  gateway.value ? (openBlock(), createBlock(unref(Tabs), {
                    key: 0,
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(TabsList), null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
                            return createVNode(unref(TabsTrigger), {
                              key: t.id,
                              value: t.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(t.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      (openBlock(), createBlock(Fragment, null, renderList(tabs, (t) => {
                        return createVNode(unref(TabsContent), {
                          key: t.id,
                          value: t.id
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(t.component), { gateway: gateway.value }, null, 8, ["gateway"]))
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/gateways/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
