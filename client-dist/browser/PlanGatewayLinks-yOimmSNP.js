import { o as E, p as m, m as _, s as p } from "./index-BbS7PpO3.js";
const { defineComponent: I } = await globalThis.importAsync("vue"), { ref: r } = await globalThis.importAsync("vue"), { createBlock: N } = await globalThis.importAsync("vue"), { openBlock: V } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createElementVNode: u } = await globalThis.importAsync("vue"), { createTextVNode: n } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { unref: o } = await globalThis.importAsync("vue"), f = await globalThis.importAsync("#client/components/ui/card/Card.vue"), G = f.default || f, y = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), L = y.default || y, g = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), S = g.default || g, w = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), z = w.default || w, b = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), H = b.default || b, h = await globalThis.importAsync("#client/components/Button.vue"), O = h.default || h, T = await globalThis.importAsync("#client/components/DataTable.vue"), j = T.default || T, { defineColumns: q } = await globalThis.importAsync("#client/components/DataTable.vue"), v = await globalThis.importAsync("#client/components/DialogForm.vue"), K = v.default || v, { defineFormFields: P } = await globalThis.importAsync("#client/components/DialogForm.vue");
await globalThis.importAsync("#client/components/Icon.vue");
const C = await globalThis.importAsync("#client/components/ClientOnly.vue"), R = C.default || C, U = { class: "flex items-center justify-between" }, M = /* @__PURE__ */ I({
  __name: "PlanGatewayLinks",
  props: {
    planId: {}
  },
  emits: ["refresh"],
  setup(i, { emit: A }) {
    const D = A, s = r(), c = r(!1), $ = q([
      {
        id: "gateway",
        label: $t("Gateway"),
        field: "gateway"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "external_id",
        label: $t("External ID"),
        field: "external_id"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (a) => new Date(a.created_at).toLocaleString()
      }
    ]), k = P({
      gateway: {
        component: "autocomplete",
        label: $t("Gateway"),
        fetch: "/api/zpayments/gateways",
        labelKey: "name",
        valueKey: "id"
      },
      external_id: {
        component: "text-field",
        label: $t("External ID")
      }
    }), x = E({
      gateway: m(p(), _(1, $t("Gateway is required"))),
      external_id: m(p(), _(1, $t("External ID is required")))
    });
    function F() {
      s.value?.load(), D("refresh");
    }
    return (a, d) => (V(), N(G, null, {
      default: e(() => [
        t(L, null, {
          default: e(() => [
            u("div", U, [
              u("div", null, [
                t(S, null, {
                  default: e(() => [
                    n(l(a.$t("Linked Gateways")), 1)
                  ]),
                  _: 1
                }),
                t(z, null, {
                  default: e(() => [
                    n(l(a.$t("Payment gateways linked to this plan")), 1)
                  ]),
                  _: 1
                })
              ]),
              t(R, null, {
                default: e(() => [
                  t(K, {
                    fetch: `/api/zpayments/plans/${i.planId}/links`,
                    title: a.$t("Add new"),
                    description: a.$t("Fill in the details below to link a gateway"),
                    schema: o(x),
                    fields: o(k),
                    onSubmit: F
                  }, {
                    default: e(() => [
                      t(O, null, {
                        default: e(() => [
                          n(l(a.$t("Add new")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["fetch", "title", "description", "schema", "fields"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        t(H, null, {
          default: e(() => [
            t(j, {
              ref_key: "tableRef",
              ref: s,
              loading: c.value,
              "onUpdate:loading": d[0] || (d[0] = (B) => c.value = B),
              columns: o($),
              fetch: `/api/zpayments/plans/${i.planId}/links`
            }, null, 8, ["loading", "columns", "fetch"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  M as default
};
