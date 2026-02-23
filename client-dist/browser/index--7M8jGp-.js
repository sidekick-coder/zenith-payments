import f from "./payment.entity-DTIYwuVL.js";
const { defineComponent: u } = await globalThis.importAsync("vue"), { createBlock: p } = await globalThis.importAsync("vue"), { openBlock: m } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { unref: i } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { toDisplayString: n } = await globalThis.importAsync("vue"), { normalizeStyle: y } = await globalThis.importAsync("vue"), { defineColumns: _ } = await globalThis.importAsync("#client/components/DataTable.vue"), l = await globalThis.importAsync("#client/components/PageCrud.vue"), g = l.default || l, c = await globalThis.importAsync("#client/layouts/AppLayout.vue"), b = c.default || c, { Badge: h } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), r = await globalThis.importAsync("#client/components/Button.vue"), w = r.default || r;
await globalThis.importAsync("#client/components/Icon.vue");
const $ = /* @__PURE__ */ u({
  __name: "index",
  setup(A) {
    const d = _([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "order_id",
        label: $t("Order"),
        field: (t) => `#${t.order_id}`
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
        field: (t) => $d(t.created_at)
      },
      { id: "actions" }
    ]);
    return (t, T) => (m(), p(b, null, {
      default: a(() => [
        o(g, {
          title: t.$t("Payments"),
          description: t.$t("View payment records here."),
          columns: i(d),
          serialize: (e) => i(f).from(e),
          fetch: "/api/zpayments/payments",
          actions: []
        }, {
          "row-status": a(({ row: e }) => [
            o(i(h), {
              style: y({ "--color": e.statusColor }),
              class: "bg-[var(--color)] text-white"
            }, {
              default: a(() => [
                s(n(e.statusLabel), 1)
              ]),
              _: 2
            }, 1032, ["style"])
          ]),
          "prepend-actions": a(({ row: e }) => [
            o(w, {
              size: "sm",
              tag: "a",
              href: `/api/zpayments/payments/${e.id}/process`,
              target: "_blank"
            }, {
              default: a(() => [
                s(n(t.$t("Process")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          _: 1
        }, 8, ["title", "description", "columns", "serialize"])
      ]),
      _: 1
    }));
  }
});
export {
  $ as default
};
