import h from "./order.entity-X244Lp1t.js";
import { f as v } from "./format-8PJ5SmHp.js";
const { defineComponent: m } = await globalThis.importAsync("vue"), { createBlock: p } = await globalThis.importAsync("vue"), { openBlock: i } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createVNode: l } = await globalThis.importAsync("vue"), { unref: s } = await globalThis.importAsync("vue"), { normalizeStyle: y } = await globalThis.importAsync("vue"), { createTextVNode: _ } = await globalThis.importAsync("vue"), { toDisplayString: a } = await globalThis.importAsync("vue"), { createElementBlock: n } = await globalThis.importAsync("vue"), { createElementVNode: r } = await globalThis.importAsync("vue"), { defineColumns: b } = await globalThis.importAsync("#client/components/DataTable.vue"), c = await globalThis.importAsync("#client/components/PageCrud.vue"), f = c.default || c, u = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), g = u.default || u, { Badge: A } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), w = { key: 0 }, T = { key: 1 }, C = { class: "text-sm text-gray-500" }, V = /* @__PURE__ */ m({
  __name: "index",
  setup(x) {
    const d = b([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "user",
        label: $t("User")
      },
      {
        id: "purpose",
        label: $t("Purpose"),
        field: "purpose"
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
        id: "currency",
        label: $t("Currency"),
        field: "currency"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (t) => v(new Date(t.created_at), "PPpp")
      },
      { id: "actions" }
    ]);
    return (t, $) => (i(), p(g, null, {
      default: o(() => [
        l(f, {
          fetch: "/api/zpayments/orders",
          title: t.$t("Orders"),
          description: t.$t("View order records here."),
          columns: s(d),
          actions: [],
          serialize: (e) => s(h).from(e),
          "fetch-query": {
            include: ["user"]
          }
        }, {
          "row-user": o(({ row: e }) => [
            e.user ? (i(), n("div", T, [
              r("div", null, a(e.user.name), 1),
              r("div", C, a(e.user.email), 1)
            ])) : (i(), n("div", w, a(e.user_id), 1))
          ]),
          "row-status": o(({ row: e }) => [
            l(s(A), {
              style: y({ "--color": e.statusColor }),
              class: "bg-[var(--color)] text-white"
            }, {
              default: o(() => [
                _(a(e.statusLabel), 1)
              ]),
              _: 2
            }, 1032, ["style"])
          ]),
          _: 1
        }, 8, ["title", "description", "columns", "serialize"])
      ]),
      _: 1
    }));
  }
});
export {
  V as default
};
