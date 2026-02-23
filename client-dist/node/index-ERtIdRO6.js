const { defineComponent } = await globalThis.importAsync("vue");
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
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
import Payment from "./payment.entity-KMHn9B1h.js";
const { Badge } = await globalThis.importAsync("#client/components/ui/badge/index.ts");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
await globalThis.importAsync("#client/components/Icon.vue");
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
        field: (row) => $d(row.created_at)
      },
      { id: "actions" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageCrud, {
              title: _ctx.$t("Payments"),
              description: _ctx.$t("View payment records here."),
              columns: unref(columns),
              serialize: (row) => unref(Payment).from(row),
              fetch: "/api/zpayments/payments",
              actions: []
            }, {
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
                actions: []
              }, {
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
              }, 8, ["title", "description", "columns", "serialize"])
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
