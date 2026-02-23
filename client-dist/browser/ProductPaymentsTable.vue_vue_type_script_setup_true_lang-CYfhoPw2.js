import V from "./payment.entity-DTIYwuVL.js";
const { defineComponent: v } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: C } = await globalThis.importAsync("vue"), { openBlock: $ } = await globalThis.importAsync("vue"), { unref: o } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { normalizeClass: D } = await globalThis.importAsync("vue"), { createTextVNode: u } = await globalThis.importAsync("vue"), { toDisplayString: m } = await globalThis.importAsync("vue"), { normalizeStyle: x } = await globalThis.importAsync("vue"), { toast: k } = await globalThis.importAsync("vue-sonner"), p = await globalThis.importAsync("#client/components/DataTable.vue"), z = p.default || p, { defineColumns: B } = await globalThis.importAsync("#client/components/DataTable.vue"), y = await globalThis.importAsync("#client/components/Button.vue"), _ = y.default || y, f = await globalThis.importAsync("#client/components/Icon.vue"), F = f.default || f, b = await globalThis.importAsync("#client/components/DialogForm.vue"), I = b.default || b, { defineFormFields: S } = await globalThis.importAsync("#client/components/DialogForm.vue"), { Card: K } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: P } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: N } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: R } = await globalThis.importAsync("#client/components/ui/card/index.ts"), g = await globalThis.importAsync("#client/components/ui/badge/Badge.vue"), U = g.default || g, H = /* @__PURE__ */ v({
  __name: "ProductPaymentsTable",
  props: {
    productId: {
      type: String,
      required: !0
    }
  },
  setup(s, { expose: w }) {
    const n = i(!1), c = i();
    i([]);
    const h = S({
      gateway_id: {
        component: "select",
        label: $t("Gateway"),
        fetch: "/api/zpayments/gateways",
        labelKey: "name",
        valueKey: "id"
      },
      user_id: {
        component: "autocomplete",
        label: $t("User"),
        fetch: "/api/users",
        labelKey: "name",
        valueKey: "id",
        subtitleKey: "email"
      }
    }), T = B([
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
      }
    ]);
    function d() {
      c.value?.load();
    }
    function A(t) {
      if (!t.checkout_url) {
        k.error($t("Failed to get checkout URL"));
        return;
      }
      window.open(t.checkout_url, "_blank");
    }
    return w({
      load: d
    }), (t, r) => ($(), C(o(K), null, {
      default: e(() => [
        a(o(P), null, {
          default: e(() => [
            a(o(N), { class: "gap-x-2 flex" }, {
              default: e(() => [
                a(_, {
                  variant: "outline",
                  size: "icon",
                  disabled: n.value,
                  onClick: d
                }, {
                  default: e(() => [
                    a(F, {
                      name: "RotateCcw",
                      class: D({ "animate-spin": n.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                a(I, {
                  fetch: `/api/zpayments/products/${s.productId}/payments`,
                  title: t.$t("Add Payment"),
                  description: t.$t("Fill in the details below to add a new payment"),
                  fields: o(h),
                  onSubmit: A
                }, {
                  default: e(() => [
                    a(_, null, {
                      default: e(() => [
                        u(m(t.$t("Add Payment")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["fetch", "title", "description", "fields"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a(o(R), null, {
          default: e(() => [
            a(z, {
              ref_key: "tableRef",
              ref: c,
              loading: n.value,
              "onUpdate:loading": r[0] || (r[0] = (l) => n.value = l),
              columns: o(T),
              serialize: (l) => o(V).from(l),
              fetch: `/api/zpayments/products/${s.productId}/payments`
            }, {
              "row-status": e(({ row: l }) => [
                a(U, {
                  style: x({ "--color": l.statusColor }),
                  class: "bg-[var(--color)] text-white"
                }, {
                  default: e(() => [
                    u(m(l.statusLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["style"])
              ]),
              _: 1
            }, 8, ["loading", "columns", "serialize", "fetch"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  H as _
};
