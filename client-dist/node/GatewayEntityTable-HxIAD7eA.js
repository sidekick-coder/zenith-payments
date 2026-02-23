const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
import GatewayEntity from "./gatewayEntity.entity-C_H1fRiP.js";
const __module__ObjectInspect__ = await globalThis.importAsync("#client/components/ObjectInspect.vue");
const ObjectInspect = __module__ObjectInspect__.default || __module__ObjectInspect__;
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GatewayEntityTable",
  __ssrInlineRender: true,
  props: {
    gatewayId: {
      type: String,
      default: void 0
    },
    entityType: {
      type: String,
      default: void 0
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const loading = ref(false);
    const tableRef = ref();
    const query = ref({
      gateway_id: props.gatewayId,
      type: props.entityType
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
        id: "type",
        label: $t("Type"),
        field: "type"
      },
      {
        id: "external_id",
        label: $t("External ID"),
        field: "external_id"
      },
      {
        id: "data",
        label: $t("Data")
      },
      {
        id: "updated_at",
        label: $t("Updated At"),
        field: (row) => format(new Date(row.updated_at), "PP p"),
        width: 150
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (row) => format(new Date(row.created_at), "PP p"),
        width: 150
      },
      {
        id: "actions",
        width: 150
      }
    ]);
    function load() {
      tableRef.value?.load();
    }
    __expose({
      load
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DataTable, mergeProps({
        ref_key: "tableRef",
        ref: tableRef,
        loading: loading.value,
        "onUpdate:loading": ($event) => loading.value = $event,
        columns: unref(columns),
        serialize: (row) => unref(GatewayEntity).from(row),
        "fetch-query": query.value,
        fetch: "/api/zpayments/gateway-entities"
      }, _attrs), {
        "row-actions": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ObjectInspect, {
              "model-value": row.raw,
              "content-class": "sm:max-w-[1200px]"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Button, { variant: "outline" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("Data"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Button, { variant: "outline" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ObjectInspect, {
                "model-value": row.raw,
                "content-class": "sm:max-w-[1200px]"
              }, {
                default: withCtx(() => [
                  createVNode(Button, { variant: "outline" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("Data")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model-value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/GatewayEntityTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
