import g from "./order.entity-X244Lp1t.js";
import { f as w } from "./format-8PJ5SmHp.js";
const { defineComponent: m } = await globalThis.importAsync("vue"), { createBlock: p } = await globalThis.importAsync("vue"), { openBlock: o } = await globalThis.importAsync("vue"), { unref: s } = await globalThis.importAsync("vue"), { withCtx: i } = await globalThis.importAsync("vue"), { createVNode: y } = await globalThis.importAsync("vue"), { normalizeStyle: b } = await globalThis.importAsync("vue"), { createTextVNode: _ } = await globalThis.importAsync("vue"), { toDisplayString: a } = await globalThis.importAsync("vue"), { createElementBlock: l } = await globalThis.importAsync("vue"), { createElementVNode: n } = await globalThis.importAsync("vue"), c = await globalThis.importAsync("#client/components/DataTable.vue"), h = c.default || c, { defineColumns: f } = await globalThis.importAsync("#client/components/DataTable.vue"), { Badge: T } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), v = { key: 0 }, A = { key: 1 }, x = { class: "text-sm text-gray-500" }, C = /* @__PURE__ */ m({
  __name: "UserPaymentsTable",
  props: {
    userId: {
      type: Number,
      required: !0
    }
  },
  setup(r) {
    const d = r, u = f([
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
        field: (t) => w(new Date(t.created_at), "PPpp")
      },
      { id: "actions" }
    ]);
    return (t, D) => (o(), p(h, {
      fetch: `/api/zpayments/users/${d.userId}/payments`,
      columns: s(u),
      actions: [],
      serialize: (e) => s(g).from(e),
      "fetch-query": {
        include: ["user"]
      }
    }, {
      "row-user": i(({ row: e }) => [
        e.user ? (o(), l("div", A, [
          n("div", null, a(e.user.name), 1),
          n("div", x, a(e.user.email), 1)
        ])) : (o(), l("div", v, a(e.user_id), 1))
      ]),
      "row-status": i(({ row: e }) => [
        y(s(T), {
          style: b({ "--color": e.statusColor }),
          class: "bg-[var(--color)] text-white"
        }, {
          default: i(() => [
            _(a(e.statusLabel), 1)
          ]),
          _: 2
        }, 1032, ["style"])
      ]),
      _: 1
    }, 8, ["fetch", "columns", "serialize"]));
  }
});
export {
  C as _
};
