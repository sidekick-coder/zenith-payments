import C from "./order.entity-X244Lp1t.js";
import { f as B } from "./format-8PJ5SmHp.js";
const { defineComponent: p } = await globalThis.importAsync("vue"), { mergeModels: b } = await globalThis.importAsync("vue"), { ref: f } = await globalThis.importAsync("vue"), { useModel: g } = await globalThis.importAsync("vue"), { createBlock: y } = await globalThis.importAsync("vue"), { openBlock: T } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createVNode: h } = await globalThis.importAsync("vue"), { normalizeStyle: w } = await globalThis.importAsync("vue"), { createTextVNode: v } = await globalThis.importAsync("vue"), { toDisplayString: A } = await globalThis.importAsync("vue"), r = await globalThis.importAsync("#client/components/DataTable.vue"), _ = r.default || r, { defineColumns: x } = await globalThis.importAsync("#client/components/DataTable.vue"), { Badge: D } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), z = /* @__PURE__ */ p({
  __name: "UserOrdersTable",
  props: /* @__PURE__ */ b({
    userId: {
      type: Number,
      required: !0
    }
  }, {
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {}
  }),
  emits: ["update:loading"],
  setup(a, { expose: c }) {
    const u = a, o = f(), l = g(a, "loading"), d = x([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
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
        field: (s) => B(new Date(s.created_at), "PPpp")
      },
      { id: "actions" }
    ]);
    function m() {
      return o.value?.load();
    }
    return c({
      load: m
    }), (s, i) => (T(), y(_, {
      ref_key: "tableRef",
      ref: o,
      loading: l.value,
      "onUpdate:loading": i[0] || (i[0] = (e) => l.value = e),
      fetch: `/api/zpayments/users/${u.userId}/orders`,
      columns: t(d),
      actions: [],
      serialize: (e) => t(C).from(e)
    }, {
      "row-status": n(({ row: e }) => [
        h(t(D), {
          style: w({ "--color": e.statusColor }),
          class: "bg-[var(--color)] text-white"
        }, {
          default: n(() => [
            v(A(e.statusLabel), 1)
          ]),
          _: 2
        }, 1032, ["style"])
      ]),
      _: 1
    }, 8, ["loading", "fetch", "columns", "serialize"]));
  }
});
export {
  z as _
};
