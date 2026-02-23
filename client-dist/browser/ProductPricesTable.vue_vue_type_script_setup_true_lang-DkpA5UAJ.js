import k from "./productPrice.entity-Bb_psyp9.js";
import w from "./index-C5jCdUgN.js";
import G from "./countries-C9bDipll.js";
import H from "./currencies-CxlqxawI.js";
const { defineComponent: C } = await globalThis.importAsync("vue"), { ref: s } = await globalThis.importAsync("vue"), { createBlock: $ } = await globalThis.importAsync("vue"), { openBlock: D } = await globalThis.importAsync("vue"), { unref: o } = await globalThis.importAsync("vue"), { withCtx: t } = await globalThis.importAsync("vue"), { createVNode: e } = await globalThis.importAsync("vue"), { normalizeClass: P } = await globalThis.importAsync("vue"), { createTextVNode: F } = await globalThis.importAsync("vue"), { toDisplayString: z } = await globalThis.importAsync("vue"), { createElementVNode: I } = await globalThis.importAsync("vue"), f = await globalThis.importAsync("#client/components/DataTable.vue"), B = f.default || f, { defineColumns: x } = await globalThis.importAsync("#client/components/DataTable.vue"), y = await globalThis.importAsync("#client/components/Button.vue"), r = y.default || y, b = await globalThis.importAsync("#client/components/Icon.vue"), d = b.default || b, h = await globalThis.importAsync("#client/components/AlertButton.vue"), K = h.default || h, g = await globalThis.importAsync("#client/components/DialogForm.vue"), _ = g.default || g, { defineFormFields: N } = await globalThis.importAsync("#client/components/DialogForm.vue"), { Card: V } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: S } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: E } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: R } = await globalThis.importAsync("#client/components/ui/card/index.ts"), U = { class: "flex items-center gap-2 justify-end" }, M = /* @__PURE__ */ C({
  __name: "ProductPricesTable",
  props: {
    productId: {
      type: String,
      required: !0
    }
  },
  setup(l, { expose: v }) {
    const c = s(!1), u = s(), T = s([]), m = N({
      gateway_id: {
        component: "select",
        label: $t("Gateway ID"),
        fetch: "/api/zpayments/gateways",
        labelKey: "name",
        valueKey: "id"
      },
      country: {
        component: "autocomplete",
        label: $t("Country"),
        options: G,
        labelKey: "name",
        valueKey: "code",
        clearable: !0
      },
      currency: {
        component: "autocomplete",
        label: $t("Currency"),
        labelKey: "label",
        valueKey: "code",
        options: H,
        clearable: !0
      },
      amount: {
        component: "text-field",
        label: $t("Price"),
        type: "number"
      }
    }), A = x([
      {
        id: "id",
        label: "ID",
        field: "id",
        width: 50
      },
      {
        id: "gateway_id",
        label: $t("Gateway"),
        field: "gateway_id"
      },
      {
        id: "country",
        label: $t("Country"),
        field: "country",
        width: 100
      },
      {
        id: "amount",
        label: $t("Price"),
        field: "amountFormatted"
      },
      {
        id: "actions",
        width: 200
      }
    ]);
    function n() {
      u.value?.load();
    }
    return v({
      load: n
    }), (i, p) => (D(), $(o(V), null, {
      default: t(() => [
        e(o(S), null, {
          default: t(() => [
            e(o(E), { class: "gap-x-2 flex" }, {
              default: t(() => [
                e(r, {
                  variant: "outline",
                  size: "icon",
                  disabled: c.value,
                  onClick: n
                }, {
                  default: t(() => [
                    e(d, {
                      name: "RotateCcw",
                      class: P({ "animate-spin": c.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                e(_, {
                  fetch: `/api/zpayments/products/${l.productId}/prices`,
                  title: i.$t("Add Price"),
                  description: i.$t("Fill in the details below to add a new price"),
                  schema: o(w).productPrice.create,
                  fields: o(m),
                  onSubmit: n
                }, {
                  default: t(() => [
                    e(r, null, {
                      default: t(() => [
                        F(z(i.$t("Add Price")), 1)
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
        e(o(R), null, {
          default: t(() => [
            e(B, {
              ref_key: "tableRef",
              ref: u,
              loading: c.value,
              "onUpdate:loading": p[0] || (p[0] = (a) => c.value = a),
              columns: o(A),
              serialize: (a) => o(k).from(a),
              fetch: `/api/zpayments/products/${l.productId}/prices`
            }, {
              "row-actions": t(({ row: a }) => [
                I("div", U, [
                  e(_, {
                    fetch: `/api/zpayments/products/${l.productId}/prices/${a.id}`,
                    title: i.$t("Edit Price"),
                    description: i.$t("Fill in the details below to edit the price"),
                    schema: o(w).productPrice.update,
                    values: a,
                    fields: o(m),
                    method: "PUT",
                    onSubmit: n
                  }, {
                    default: t(() => [
                      e(r, {
                        size: "icon",
                        variant: "ghost"
                      }, {
                        default: t(() => [
                          e(d, { name: "Edit" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["fetch", "title", "description", "schema", "values", "fields"]),
                  e(K, {
                    variant: "ghost",
                    title: i.$t("Delete Price"),
                    description: i.$t("Are you sure you want to delete this price?"),
                    loading: T.value.includes(a.id),
                    fetch: `/api/zpayments/products/${l.productId}/prices/${a.id}`,
                    onFetched: n
                  }, {
                    default: t(() => [
                      e(d, { name: "Trash" })
                    ]),
                    _: 1
                  }, 8, ["title", "description", "loading", "fetch"])
                ])
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
  M as _
};
