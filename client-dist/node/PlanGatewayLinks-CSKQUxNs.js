const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import * as v from "valibot";
const __module__Card__ = await globalThis.importAsync("#client/components/ui/card/Card.vue");
const Card = __module__Card__.default || __module__Card__;
const __module__CardHeader__ = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue");
const CardHeader = __module__CardHeader__.default || __module__CardHeader__;
const __module__CardTitle__ = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue");
const CardTitle = __module__CardTitle__.default || __module__CardTitle__;
const __module__CardDescription__ = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue");
const CardDescription = __module__CardDescription__.default || __module__CardDescription__;
const __module__CardContent__ = await globalThis.importAsync("#client/components/ui/card/CardContent.vue");
const CardContent = __module__CardContent__.default || __module__CardContent__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
await globalThis.importAsync("#client/components/Icon.vue");
const __module__ClientOnly__ = await globalThis.importAsync("#client/components/ClientOnly.vue");
const ClientOnly = __module__ClientOnly__.default || __module__ClientOnly__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlanGatewayLinks",
  __ssrInlineRender: true,
  props: {
    planId: {}
  },
  emits: ["refresh"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const tableRef = ref();
    const loading = ref(false);
    const columns = defineColumns([
      {
        id: "gateway",
        label: $t("Gateway"),
        field: "gateway"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "external_id",
        label: $t("External ID"),
        field: "external_id"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (row) => new Date(row.created_at).toLocaleString()
      }
    ]);
    const fields = defineFormFields({
      gateway: {
        component: "autocomplete",
        label: $t("Gateway"),
        fetch: "/api/zpayments/gateways",
        labelKey: "name",
        valueKey: "id"
      },
      external_id: {
        component: "text-field",
        label: $t("External ID")
      }
    });
    const schema = v.object({
      gateway: v.pipe(v.string(), v.minLength(1, $t("Gateway is required"))),
      external_id: v.pipe(v.string(), v.minLength(1, $t("External ID is required")))
    });
    function load() {
      tableRef.value?.load();
      emit("refresh");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Linked Gateways"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Linked Gateways")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Payment gateways linked to this plan"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Payment gateways linked to this plan")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DialogForm, {
                          fetch: `/api/zpayments/plans/${__props.planId}/links`,
                          title: _ctx.$t("Add new"),
                          description: _ctx.$t("Fill in the details below to link a gateway"),
                          schema: unref(schema),
                          fields: unref(fields),
                          onSubmit: load
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("Add new"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DialogForm, {
                            fetch: `/api/zpayments/plans/${__props.planId}/links`,
                            title: _ctx.$t("Add new"),
                            description: _ctx.$t("Fill in the details below to link a gateway"),
                            schema: unref(schema),
                            fields: unref(fields),
                            onSubmit: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Button, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["fetch", "title", "description", "schema", "fields"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode(CardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Linked Gateways")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(CardDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Payment gateways linked to this plan")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(DialogForm, {
                            fetch: `/api/zpayments/plans/${__props.planId}/links`,
                            title: _ctx.$t("Add new"),
                            description: _ctx.$t("Fill in the details below to link a gateway"),
                            schema: unref(schema),
                            fields: unref(fields),
                            onSubmit: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Button, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["fetch", "title", "description", "schema", "fields"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(DataTable, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    columns: unref(columns),
                    fetch: `/api/zpayments/plans/${__props.planId}/links`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DataTable, {
                      ref_key: "tableRef",
                      ref: tableRef,
                      loading: loading.value,
                      "onUpdate:loading": ($event) => loading.value = $event,
                      columns: unref(columns),
                      fetch: `/api/zpayments/plans/${__props.planId}/links`
                    }, null, 8, ["loading", "onUpdate:loading", "columns", "fetch"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(CardHeader, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode(CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Linked Gateways")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("Payment gateways linked to this plan")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(DialogForm, {
                          fetch: `/api/zpayments/plans/${__props.planId}/links`,
                          title: _ctx.$t("Add new"),
                          description: _ctx.$t("Fill in the details below to link a gateway"),
                          schema: unref(schema),
                          fields: unref(fields),
                          onSubmit: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Button, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Add new")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["fetch", "title", "description", "schema", "fields"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(CardContent, null, {
                default: withCtx(() => [
                  createVNode(DataTable, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    columns: unref(columns),
                    fetch: `/api/zpayments/plans/${__props.planId}/links`
                  }, null, 8, ["loading", "onUpdate:loading", "columns", "fetch"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/PlanGatewayLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
