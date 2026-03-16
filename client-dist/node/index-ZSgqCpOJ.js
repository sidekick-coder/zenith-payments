const { defineComponent } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
await globalThis.importAsync("#client/components/Button.vue");
await globalThis.importAsync("#client/components/Icon.vue");
import "./gatewayEntity.entity-C_H1fRiP.js";
const __module__PageTitle__ = await globalThis.importAsync("#client/components/PageTitle.vue");
const PageTitle = __module__PageTitle__.default || __module__PageTitle__;
const __module__PageSubtitle__ = await globalThis.importAsync("#client/components/PageSubtitle.vue");
const PageSubtitle = __module__PageSubtitle__.default || __module__PageSubtitle__;
await globalThis.importAsync("#client/components/ObjectInspect.vue");
import _sfc_main$1 from "./GatewayEntityTable-HxIAD7eA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const tableRef = ref();
    defineColumns([
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PageTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Entities"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Entities")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PageSubtitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Data related to gateway"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Data related to gateway")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              ref_key: "tableRef",
              ref: tableRef,
              loading: loading.value,
              "onUpdate:loading": ($event) => loading.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex flex-col mb-4" }, [
                createVNode(PageTitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Entities")), 1)
                  ]),
                  _: 1
                }),
                createVNode(PageSubtitle, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("Data related to gateway")), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$1, {
                ref_key: "tableRef",
                ref: tableRef,
                loading: loading.value,
                "onUpdate:loading": ($event) => loading.value = $event
              }, null, 8, ["loading", "onUpdate:loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/gateway-entities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
