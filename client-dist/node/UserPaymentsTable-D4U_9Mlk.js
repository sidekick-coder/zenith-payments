const { defineComponent } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { createBlock } = await globalThis.importAsync("vue");
const { openBlock } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import { format } from "date-fns";
const __module__DataTable__ = await globalThis.importAsync("#client/components/DataTable.vue");
const DataTable = __module__DataTable__.default || __module__DataTable__;
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
import Order from "./order.entity-CBgThORh.js";
const { Badge } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserPaymentsTable",
  __ssrInlineRender: true,
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
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
        field: (row) => format(new Date(row.created_at), "PPpp")
      },
      { id: "actions" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DataTable, mergeProps({
        fetch: `/api/zpayments/users/${props.userId}/payments`,
        columns: unref(columns),
        actions: [],
        serialize: (row) => unref(Order).from(row),
        "fetch-query": {
          include: ["user"]
        }
      }, _attrs), {
        "row-user": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!row.user) {
              _push2(`<div${_scopeId}>${ssrInterpolate(row.user_id)}</div>`);
            } else {
              _push2(`<div${_scopeId}><div${_scopeId}>${ssrInterpolate(row.user.name)}</div><div class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(row.user.email)}</div></div>`);
            }
          } else {
            return [
              !row.user ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(row.user_id), 1)) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", null, toDisplayString(row.user.name), 1),
                createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(row.user.email), 1)
              ]))
            ];
          }
        }),
        "row-status": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Badge), {
              style: { "--color": row.statusColor },
              class: "bg-[var(--color)] text-white"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.statusLabel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.statusLabel), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
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
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/UserPaymentsTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
