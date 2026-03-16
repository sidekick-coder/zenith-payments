const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
import Payment from "./payment.entity-KMHn9B1h.js";
const { Badge } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Select__ = await globalThis.importAsync("#client/components/Select.vue");
const Select = __module__Select__.default || __module__Select__;
const __module__DatePicker__ = await globalThis.importAsync("#client/components/DatePicker.vue");
const DatePicker = __module__DatePicker__.default || __module__DatePicker__;
const { Card } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = defineColumns([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "order_id",
        label: $t("Order"),
        field: (row) => `#${row.order_id}`
      },
      {
        id: "gateway_id",
        label: $t("Gateway ID"),
        field: "gateway_id"
      },
      {
        id: "status",
        label: $t("Status"),
        field: "status"
      },
      {
        id: "amount",
        label: $t("Amount"),
        field: "amount"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (row) => $dt(row.created_at)
      },
      { id: "actions" }
    ]);
    const fetchQuery = ref({
      status: "",
      start_date: null,
      end_date: null
    });
    function clearFilters() {
      fetchQuery.value.status = "";
      fetchQuery.value.start_date = null;
      fetchQuery.value.end_date = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageCrud, {
              title: _ctx.$t("Payments"),
              description: _ctx.$t("View payment records here."),
              columns: unref(columns),
              serialize: (row) => unref(Payment).from(row),
              fetch: "/api/zpayments/payments",
              "fetch-query": fetchQuery.value,
              actions: []
            }, {
              "header-append": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Card), { class: "mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CardContent), { class: "pt-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="grid grid-cols-1 md:grid-cols-4 gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(Select, {
                                modelValue: fetchQuery.value.status,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.status = $event,
                                label: _ctx.$t("Status"),
                                placeholder: _ctx.$t("All"),
                                options: unref(Payment).STATUS,
                                "label-key": "label",
                                "value-key": "id",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="flex flex-col gap-2"${_scopeId4}><label class="text-sm font-medium"${_scopeId4}>${ssrInterpolate(_ctx.$t("Start Date"))}</label>`);
                              _push5(ssrRenderComponent(DatePicker, {
                                modelValue: fetchQuery.value.start_date,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.start_date = $event,
                                mode: "datetime",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex flex-col gap-2"${_scopeId4}><label class="text-sm font-medium"${_scopeId4}>${ssrInterpolate(_ctx.$t("End Date"))}</label>`);
                              _push5(ssrRenderComponent(DatePicker, {
                                modelValue: fetchQuery.value.end_date,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.end_date = $event,
                                mode: "datetime",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex items-end"${_scopeId4}>`);
                              _push5(ssrRenderComponent(Button, {
                                variant: "outline",
                                onClick: clearFilters
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("Clear Filters"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("Clear Filters")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                                  createVNode(Select, {
                                    modelValue: fetchQuery.value.status,
                                    "onUpdate:modelValue": ($event) => fetchQuery.value.status = $event,
                                    label: _ctx.$t("Status"),
                                    placeholder: _ctx.$t("All"),
                                    options: unref(Payment).STATUS,
                                    "label-key": "label",
                                    "value-key": "id",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "options"]),
                                  createVNode("div", { class: "flex flex-col gap-2" }, [
                                    createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("Start Date")), 1),
                                    createVNode(DatePicker, {
                                      modelValue: fetchQuery.value.start_date,
                                      "onUpdate:modelValue": ($event) => fetchQuery.value.start_date = $event,
                                      mode: "datetime",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-2" }, [
                                    createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("End Date")), 1),
                                    createVNode(DatePicker, {
                                      modelValue: fetchQuery.value.end_date,
                                      "onUpdate:modelValue": ($event) => fetchQuery.value.end_date = $event,
                                      mode: "datetime",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "flex items-end" }, [
                                    createVNode(Button, {
                                      variant: "outline",
                                      onClick: clearFilters
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("Clear Filters")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(CardContent), { class: "pt-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                                createVNode(Select, {
                                  modelValue: fetchQuery.value.status,
                                  "onUpdate:modelValue": ($event) => fetchQuery.value.status = $event,
                                  label: _ctx.$t("Status"),
                                  placeholder: _ctx.$t("All"),
                                  options: unref(Payment).STATUS,
                                  "label-key": "label",
                                  "value-key": "id",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "options"]),
                                createVNode("div", { class: "flex flex-col gap-2" }, [
                                  createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("Start Date")), 1),
                                  createVNode(DatePicker, {
                                    modelValue: fetchQuery.value.start_date,
                                    "onUpdate:modelValue": ($event) => fetchQuery.value.start_date = $event,
                                    mode: "datetime",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "flex flex-col gap-2" }, [
                                  createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("End Date")), 1),
                                  createVNode(DatePicker, {
                                    modelValue: fetchQuery.value.end_date,
                                    "onUpdate:modelValue": ($event) => fetchQuery.value.end_date = $event,
                                    mode: "datetime",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "flex items-end" }, [
                                  createVNode(Button, {
                                    variant: "outline",
                                    onClick: clearFilters
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("Clear Filters")), 1)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Card), { class: "mb-4" }, {
                      default: withCtx(() => [
                        createVNode(unref(CardContent), { class: "pt-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                              createVNode(Select, {
                                modelValue: fetchQuery.value.status,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.status = $event,
                                label: _ctx.$t("Status"),
                                placeholder: _ctx.$t("All"),
                                options: unref(Payment).STATUS,
                                "label-key": "label",
                                "value-key": "id",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "options"]),
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("Start Date")), 1),
                                createVNode(DatePicker, {
                                  modelValue: fetchQuery.value.start_date,
                                  "onUpdate:modelValue": ($event) => fetchQuery.value.start_date = $event,
                                  mode: "datetime",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("End Date")), 1),
                                createVNode(DatePicker, {
                                  modelValue: fetchQuery.value.end_date,
                                  "onUpdate:modelValue": ($event) => fetchQuery.value.end_date = $event,
                                  mode: "datetime",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "flex items-end" }, [
                                createVNode(Button, {
                                  variant: "outline",
                                  onClick: clearFilters
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Clear Filters")), 1)
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              "row-status": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Badge), {
                    style: { "--color": row.statusColor },
                    class: "bg-[var(--color)] text-white"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.statusLabel)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.statusLabel), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Badge), {
                      style: { "--color": row.statusColor },
                      class: "bg-[var(--color)] text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.statusLabel), 1)
                      ]),
                      _: 2
                    }, 1032, ["style"])
                  ];
                }
              }),
              "prepend-actions": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Button, {
                    size: "sm",
                    tag: "a",
                    href: `/api/zpayments/payments/${row.id}/process`,
                    target: "_blank"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Process"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Process")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Button, {
                      size: "sm",
                      tag: "a",
                      href: `/api/zpayments/payments/${row.id}/process`,
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Process")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageCrud, {
                title: _ctx.$t("Payments"),
                description: _ctx.$t("View payment records here."),
                columns: unref(columns),
                serialize: (row) => unref(Payment).from(row),
                fetch: "/api/zpayments/payments",
                "fetch-query": fetchQuery.value,
                actions: []
              }, {
                "header-append": withCtx(() => [
                  createVNode(unref(Card), { class: "mb-4" }, {
                    default: withCtx(() => [
                      createVNode(unref(CardContent), { class: "pt-6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                            createVNode(Select, {
                              modelValue: fetchQuery.value.status,
                              "onUpdate:modelValue": ($event) => fetchQuery.value.status = $event,
                              label: _ctx.$t("Status"),
                              placeholder: _ctx.$t("All"),
                              options: unref(Payment).STATUS,
                              "label-key": "label",
                              "value-key": "id",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "options"]),
                            createVNode("div", { class: "flex flex-col gap-2" }, [
                              createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("Start Date")), 1),
                              createVNode(DatePicker, {
                                modelValue: fetchQuery.value.start_date,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.start_date = $event,
                                mode: "datetime",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "flex flex-col gap-2" }, [
                              createVNode("label", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("End Date")), 1),
                              createVNode(DatePicker, {
                                modelValue: fetchQuery.value.end_date,
                                "onUpdate:modelValue": ($event) => fetchQuery.value.end_date = $event,
                                mode: "datetime",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "flex items-end" }, [
                              createVNode(Button, {
                                variant: "outline",
                                onClick: clearFilters
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Clear Filters")), 1)
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                "row-status": withCtx(({ row }) => [
                  createVNode(unref(Badge), {
                    style: { "--color": row.statusColor },
                    class: "bg-[var(--color)] text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.statusLabel), 1)
                    ]),
                    _: 2
                  }, 1032, ["style"])
                ]),
                "prepend-actions": withCtx(({ row }) => [
                  createVNode(Button, {
                    size: "sm",
                    tag: "a",
                    href: `/api/zpayments/payments/${row.id}/process`,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Process")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }, 8, ["title", "description", "columns", "serialize", "fetch-query"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/payments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
