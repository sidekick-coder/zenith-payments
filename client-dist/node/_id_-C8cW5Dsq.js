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
const { withModifiers } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
const { useRouter } = await globalThis.importAsync("vue-router");
const { useForm } = await globalThis.importAsync("vee-validate");
import * as v from "valibot";
import { toTypedSchema } from "@vee-validate/valibot";
const { toast } = await globalThis.importAsync("vue-sonner");
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
const __module__CardFooter__ = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue");
const CardFooter = __module__CardFooter__.default || __module__CardFooter__;
const __module__Tabs__ = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue");
const Tabs = __module__Tabs__.default || __module__Tabs__;
const { TabsList } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsTrigger } = await globalThis.importAsync("#client/components/ui/tabs");
const { TabsContent } = await globalThis.importAsync("#client/components/ui/tabs");
const __module__FormTextField__ = await globalThis.importAsync("#client/components/FormTextField.vue");
const FormTextField = __module__FormTextField__.default || __module__FormTextField__;
const __module__FormTextarea__ = await globalThis.importAsync("#client/components/FormTextarea.vue");
const FormTextarea = __module__FormTextarea__.default || __module__FormTextarea__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
import _sfc_main$2 from "./ProductMetasTable-hSgfPxKG.js";
import _sfc_main$1 from "./ProductPricesTable-BhB_oC53.js";
const { $fetch } = await globalThis.importAsync("#client/utils/fetcher.ts");
const __module__TextField__ = await globalThis.importAsync("#client/components/TextField.vue");
const TextField = __module__TextField__.default || __module__TextField__;
import _sfc_main$3 from "./ProductPaymentsTable-BYiGJuye.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const id = computed(() => route.params.id);
    const product = ref(null);
    const saving = ref(false);
    const schema = v.object({
      name: v.pipe(v.string(), v.minLength(2, $t("Name is required"))),
      description: v.optional(v.string())
    });
    const { handleSubmit, setValues } = useForm({
      validationSchema: toTypedSchema(schema)
    });
    async function loadProduct() {
      const [error, response] = await $fetch.try(`/api/zpayments/products/${id.value}`, {
        method: "GET"
      });
      if (error) {
        console.error("Failed to load product:", id.value);
        console.error(error);
        return;
      }
      product.value = response;
      setValues({
        name: response.name,
        description: response.description || ""
      });
    }
    onMounted(loadProduct);
    const tab = computed({
      get: () => route.query.tab || "prices",
      set: (value) => {
        router.replace({
          path: route.path,
          query: {
            tab: value
          }
        });
      }
    });
    const formatDate = (date) => {
      if (!date) {
        return $t("N/A");
      }
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(date));
    };
    const onSubmit = handleSubmit(async (formValues) => {
      saving.value = true;
      const [error] = await $fetch.try(`/api/zpayments/products/${id.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });
      if (error) {
        console.error("Failed to save product:", error);
        toast.error($t("Failed to update."));
        saving.value = false;
        return;
      }
      toast.success($t("Updated successfully."));
      saving.value = false;
      await loadProduct();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex min-h-full w-full [&amp;&gt;*]:px-4 -mx-2"${_scopeId}><div class="w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col"${_scopeId}>`);
            if (product.value) {
              _push2(`<form${_scopeId}>`);
              _push2(ssrRenderComponent(Card, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CardHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(CardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Product Details"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(CardDescription, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Edit product information"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(CardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(CardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)
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
                          _push4(ssrRenderComponent(FormTextField, {
                            name: "name",
                            label: _ctx.$t("Name")
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(FormTextarea, {
                            name: "description",
                            label: _ctx.$t("Description")
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(TextField, {
                            label: _ctx.$t("Created At"),
                            "model-value": formatDate(product.value.created_at),
                            readonly: ""
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(TextField, {
                            label: _ctx.$t("Updated At"),
                            "model-value": formatDate(product.value.updated_at),
                            readonly: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(FormTextField, {
                              name: "name",
                              label: _ctx.$t("Name")
                            }, null, 8, ["label"]),
                            createVNode(FormTextarea, {
                              name: "description",
                              label: _ctx.$t("Description")
                            }, null, 8, ["label"]),
                            createVNode(TextField, {
                              label: _ctx.$t("Created At"),
                              "model-value": formatDate(product.value.created_at),
                              readonly: ""
                            }, null, 8, ["label", "model-value"]),
                            createVNode(TextField, {
                              label: _ctx.$t("Updated At"),
                              "model-value": formatDate(product.value.updated_at),
                              readonly: ""
                            }, null, 8, ["label", "model-value"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CardFooter, { class: "flex justify-end" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(Button, {
                            type: "submit",
                            loading: saving.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.$t("Update"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.$t("Update")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(Button, {
                              type: "submit",
                              loading: saving.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Update")), 1)
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
                      createVNode(CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(CardContent, { class: "space-y-6" }, {
                        default: withCtx(() => [
                          createVNode(FormTextField, {
                            name: "name",
                            label: _ctx.$t("Name")
                          }, null, 8, ["label"]),
                          createVNode(FormTextarea, {
                            name: "description",
                            label: _ctx.$t("Description")
                          }, null, 8, ["label"]),
                          createVNode(TextField, {
                            label: _ctx.$t("Created At"),
                            "model-value": formatDate(product.value.created_at),
                            readonly: ""
                          }, null, 8, ["label", "model-value"]),
                          createVNode(TextField, {
                            label: _ctx.$t("Updated At"),
                            "model-value": formatDate(product.value.updated_at),
                            readonly: ""
                          }, null, 8, ["label", "model-value"])
                        ]),
                        _: 1
                      }),
                      createVNode(CardFooter, { class: "flex justify-end" }, {
                        default: withCtx(() => [
                          createVNode(Button, {
                            type: "submit",
                            loading: saving.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Update")), 1)
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
              _push2(`</form>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex-1 flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(Tabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              "default-value": "prices"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsList), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabsTrigger), { value: "prices" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Prices"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabsTrigger), { value: "metas" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("Metas"))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)
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
                          createVNode(unref(TabsTrigger), { value: "prices" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabsTrigger), { value: "metas" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)
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
                  _push3(ssrRenderComponent(unref(TabsContent), { value: "prices" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { "product-id": id.value }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { "product-id": id.value }, null, 8, ["product-id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabsContent), { value: "metas" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, { "product-id": id.value }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2, { "product-id": id.value }, null, 8, ["product-id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabsContent), { value: "payments" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, { "product-id": id.value }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3, { "product-id": id.value }, null, 8, ["product-id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabsList), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabsTrigger), { value: "prices" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabsTrigger), { value: "metas" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)
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
                    createVNode(unref(TabsContent), { value: "prices" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { "product-id": id.value }, null, 8, ["product-id"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabsContent), { value: "metas" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2, { "product-id": id.value }, null, 8, ["product-id"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabsContent), { value: "payments" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, { "product-id": id.value }, null, 8, ["product-id"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, [
                createVNode("div", { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, [
                  product.value ? (openBlock(), createBlock("form", {
                    key: 0,
                    onSubmit: withModifiers(unref(onSubmit), ["prevent"])
                  }, [
                    createVNode(Card, null, {
                      default: withCtx(() => [
                        createVNode(CardHeader, null, {
                          default: withCtx(() => [
                            createVNode(CardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Product Details")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(CardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Edit product information")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(CardContent, { class: "space-y-6" }, {
                          default: withCtx(() => [
                            createVNode(FormTextField, {
                              name: "name",
                              label: _ctx.$t("Name")
                            }, null, 8, ["label"]),
                            createVNode(FormTextarea, {
                              name: "description",
                              label: _ctx.$t("Description")
                            }, null, 8, ["label"]),
                            createVNode(TextField, {
                              label: _ctx.$t("Created At"),
                              "model-value": formatDate(product.value.created_at),
                              readonly: ""
                            }, null, 8, ["label", "model-value"]),
                            createVNode(TextField, {
                              label: _ctx.$t("Updated At"),
                              "model-value": formatDate(product.value.updated_at),
                              readonly: ""
                            }, null, 8, ["label", "model-value"])
                          ]),
                          _: 1
                        }),
                        createVNode(CardFooter, { class: "flex justify-end" }, {
                          default: withCtx(() => [
                            createVNode(Button, {
                              type: "submit",
                              loading: saving.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Update")), 1)
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ], 40, ["onSubmit"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex-1 flex flex-col" }, [
                  createVNode(Tabs, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    "default-value": "prices"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(TabsList), null, {
                        default: withCtx(() => [
                          createVNode(unref(TabsTrigger), { value: "prices" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Prices")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabsTrigger), { value: "metas" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Metas")), 1)
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
                      createVNode(unref(TabsContent), { value: "prices" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, { "product-id": id.value }, null, 8, ["product-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "metas" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2, { "product-id": id.value }, null, 8, ["product-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabsContent), { value: "payments" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, { "product-id": id.value }, null, 8, ["product-id"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
