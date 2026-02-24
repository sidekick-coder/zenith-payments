const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
await globalThis.importAsync("vue-sonner");
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
import ProductMeta from "./productMeta.entity-DUdD-13s.js";
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const __module__AlertButton__ = await globalThis.importAsync("#client/components/AlertButton.vue");
const AlertButton = __module__AlertButton__.default || __module__AlertButton__;
const __module__DialogForm__ = await globalThis.importAsync("#client/components/DialogForm.vue");
const DialogForm = __module__DialogForm__.default || __module__DialogForm__;
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
await globalThis.importAsync("#client/utils/fetcher.ts");
const { Card } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardAction } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card/index.ts");
import schemas from "./index-BjLGGSF7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductMetasTable",
  __ssrInlineRender: true,
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const tableRef = ref();
    const deletingItems = ref([]);
    const fields = defineFormFields({
      name: {
        component: "text-field",
        label: $t("Name")
      },
      value: {
        component: "textarea",
        label: $t("Value")
      }
    });
    const columns = defineColumns([
      {
        id: "id",
        label: "ID",
        field: "id",
        width: 50
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "value",
        label: $t("Value"),
        field: "value"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (row) => format(new Date(row.created_at), "PP p"),
        width: 150
      },
      {
        id: "actions",
        width: 200
      }
    ]);
    function load() {
      tableRef.value?.load();
    }
    __expose({
      load
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Card), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CardHeader), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CardAction), { class: "gap-x-2 flex" }, {
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
                        _push4(ssrRenderComponent(DialogForm, {
                          fetch: `/api/zpayments/products/${__props.productId}/metas`,
                          title: _ctx.$t("Add Meta"),
                          description: _ctx.$t("Fill in the details below to add a new meta"),
                          schema: unref(schemas).productMeta.create,
                          fields: unref(fields),
                          onSubmit: load
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(_ctx.$t("Add Meta"))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t("Add Meta")), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t("Add Meta")), 1)
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
                          createVNode(DialogForm, {
                            fetch: `/api/zpayments/products/${__props.productId}/metas`,
                            title: _ctx.$t("Add Meta"),
                            description: _ctx.$t("Fill in the details below to add a new meta"),
                            schema: unref(schemas).productMeta.create,
                            fields: unref(fields),
                            onSubmit: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Button, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("Add Meta")), 1)
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
                } else {
                  return [
                    createVNode(unref(CardAction), { class: "gap-x-2 flex" }, {
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
                        createVNode(DialogForm, {
                          fetch: `/api/zpayments/products/${__props.productId}/metas`,
                          title: _ctx.$t("Add Meta"),
                          description: _ctx.$t("Fill in the details below to add a new meta"),
                          schema: unref(schemas).productMeta.create,
                          fields: unref(fields),
                          onSubmit: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Button, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("Add Meta")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["fetch", "title", "description", "schema", "fields"])
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
                  _push3(ssrRenderComponent(DataTable, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    columns: unref(columns),
                    serialize: (row) => unref(ProductMeta).from(row),
                    fetch: `/api/zpayments/products/${__props.productId}/metas`
                  }, {
                    "row-actions": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2 justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(DialogForm, {
                          fetch: `/api/zpayments/products/${__props.productId}/metas/${row.id}`,
                          title: _ctx.$t("Edit Meta"),
                          description: _ctx.$t("Fill in the details below to edit the meta"),
                          schema: unref(schemas).productMeta.update,
                          fields: unref(fields),
                          values: row,
                          method: "PUT",
                          onSubmit: load
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Button, {
                                size: "icon",
                                variant: "ghost"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(Icon, { name: "Edit" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(Icon, { name: "Edit" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Button, {
                                  size: "icon",
                                  variant: "ghost"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(Icon, { name: "Edit" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(AlertButton, {
                          variant: "ghost",
                          title: _ctx.$t("Delete Meta"),
                          description: _ctx.$t("Are you sure you want to delete this meta?"),
                          loading: deletingItems.value.includes(row.id),
                          fetch: `/api/zpayments/products/${props.productId}/metas/${row.id}`,
                          onFetched: load
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Icon, { name: "Trash" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Icon, { name: "Trash" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                            createVNode(DialogForm, {
                              fetch: `/api/zpayments/products/${__props.productId}/metas/${row.id}`,
                              title: _ctx.$t("Edit Meta"),
                              description: _ctx.$t("Fill in the details below to edit the meta"),
                              schema: unref(schemas).productMeta.update,
                              fields: unref(fields),
                              values: row,
                              method: "PUT",
                              onSubmit: load
                            }, {
                              default: withCtx(() => [
                                createVNode(Button, {
                                  size: "icon",
                                  variant: "ghost"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(Icon, { name: "Edit" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["fetch", "title", "description", "schema", "fields", "values"]),
                            createVNode(AlertButton, {
                              variant: "ghost",
                              title: _ctx.$t("Delete Meta"),
                              description: _ctx.$t("Are you sure you want to delete this meta?"),
                              loading: deletingItems.value.includes(row.id),
                              fetch: `/api/zpayments/products/${props.productId}/metas/${row.id}`,
                              onFetched: load
                            }, {
                              default: withCtx(() => [
                                createVNode(Icon, { name: "Trash" })
                              ]),
                              _: 1
                            }, 8, ["title", "description", "loading", "fetch"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(DataTable, {
                      ref_key: "tableRef",
                      ref: tableRef,
                      loading: loading.value,
                      "onUpdate:loading": ($event) => loading.value = $event,
                      columns: unref(columns),
                      serialize: (row) => unref(ProductMeta).from(row),
                      fetch: `/api/zpayments/products/${__props.productId}/metas`
                    }, {
                      "row-actions": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                          createVNode(DialogForm, {
                            fetch: `/api/zpayments/products/${__props.productId}/metas/${row.id}`,
                            title: _ctx.$t("Edit Meta"),
                            description: _ctx.$t("Fill in the details below to edit the meta"),
                            schema: unref(schemas).productMeta.update,
                            fields: unref(fields),
                            values: row,
                            method: "PUT",
                            onSubmit: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Button, {
                                size: "icon",
                                variant: "ghost"
                              }, {
                                default: withCtx(() => [
                                  createVNode(Icon, { name: "Edit" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["fetch", "title", "description", "schema", "fields", "values"]),
                          createVNode(AlertButton, {
                            variant: "ghost",
                            title: _ctx.$t("Delete Meta"),
                            description: _ctx.$t("Are you sure you want to delete this meta?"),
                            loading: deletingItems.value.includes(row.id),
                            fetch: `/api/zpayments/products/${props.productId}/metas/${row.id}`,
                            onFetched: load
                          }, {
                            default: withCtx(() => [
                              createVNode(Icon, { name: "Trash" })
                            ]),
                            _: 1
                          }, 8, ["title", "description", "loading", "fetch"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["loading", "onUpdate:loading", "columns", "serialize", "fetch"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CardHeader), null, {
                default: withCtx(() => [
                  createVNode(unref(CardAction), { class: "gap-x-2 flex" }, {
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
                      createVNode(DialogForm, {
                        fetch: `/api/zpayments/products/${__props.productId}/metas`,
                        title: _ctx.$t("Add Meta"),
                        description: _ctx.$t("Fill in the details below to add a new meta"),
                        schema: unref(schemas).productMeta.create,
                        fields: unref(fields),
                        onSubmit: load
                      }, {
                        default: withCtx(() => [
                          createVNode(Button, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Add Meta")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["fetch", "title", "description", "schema", "fields"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(CardContent), null, {
                default: withCtx(() => [
                  createVNode(DataTable, {
                    ref_key: "tableRef",
                    ref: tableRef,
                    loading: loading.value,
                    "onUpdate:loading": ($event) => loading.value = $event,
                    columns: unref(columns),
                    serialize: (row) => unref(ProductMeta).from(row),
                    fetch: `/api/zpayments/products/${__props.productId}/metas`
                  }, {
                    "row-actions": withCtx(({ row }) => [
                      createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                        createVNode(DialogForm, {
                          fetch: `/api/zpayments/products/${__props.productId}/metas/${row.id}`,
                          title: _ctx.$t("Edit Meta"),
                          description: _ctx.$t("Fill in the details below to edit the meta"),
                          schema: unref(schemas).productMeta.update,
                          fields: unref(fields),
                          values: row,
                          method: "PUT",
                          onSubmit: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Button, {
                              size: "icon",
                              variant: "ghost"
                            }, {
                              default: withCtx(() => [
                                createVNode(Icon, { name: "Edit" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["fetch", "title", "description", "schema", "fields", "values"]),
                        createVNode(AlertButton, {
                          variant: "ghost",
                          title: _ctx.$t("Delete Meta"),
                          description: _ctx.$t("Are you sure you want to delete this meta?"),
                          loading: deletingItems.value.includes(row.id),
                          fetch: `/api/zpayments/products/${props.productId}/metas/${row.id}`,
                          onFetched: load
                        }, {
                          default: withCtx(() => [
                            createVNode(Icon, { name: "Trash" })
                          ]),
                          _: 1
                        }, 8, ["title", "description", "loading", "fetch"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["loading", "onUpdate:loading", "columns", "serialize", "fetch"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/ProductMetasTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
