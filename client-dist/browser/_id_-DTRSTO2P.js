import { o as X, p as Y, m as Z, s as w, d as tt } from "./index-BbS7PpO3.js";
import { t as et } from "./vee-validate-valibot-D31hhJmQ.js";
import { _ as _t } from "./ProductMetasTable.vue_vue_type_script_setup_true_lang-Cvo1Kms-.js";
import { _ as ft } from "./ProductPricesTable.vue_vue_type_script_setup_true_lang-ikp7reyB.js";
import { _ as vt } from "./ProductPaymentsTable.vue_vue_type_script_setup_true_lang-CYfhoPw2.js";
const { defineComponent: H } = await globalThis.importAsync("vue"), { computed: T } = await globalThis.importAsync("vue"), { ref: h } = await globalThis.importAsync("vue"), { onMounted: z } = await globalThis.importAsync("vue"), { createBlock: G } = await globalThis.importAsync("vue"), { openBlock: g } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { createElementVNode: m } = await globalThis.importAsync("vue"), { createElementBlock: I } = await globalThis.importAsync("vue"), { createCommentVNode: J } = await globalThis.importAsync("vue"), { withModifiers: O } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createTextVNode: n } = await globalThis.importAsync("vue"), { toDisplayString: i } = await globalThis.importAsync("vue"), { useRoute: K } = await globalThis.importAsync("vue-router"), { useRouter: Q } = await globalThis.importAsync("vue-router"), { useForm: W } = await globalThis.importAsync("vee-validate"), { toast: A } = await globalThis.importAsync("vue-sonner"), C = await globalThis.importAsync("#client/layouts/AppLayout.vue"), at = C.default || C, F = await globalThis.importAsync("#client/components/ui/card/Card.vue"), ot = F.default || F, $ = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), lt = $.default || $, x = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), st = x.default || x, N = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), nt = N.default || N, V = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), it = V.default || V, B = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue"), rt = B.default || B, D = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue"), ct = D.default || D, { TabsList: ut } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: p } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: _ } = await globalThis.importAsync("#client/components/ui/tabs"), S = await globalThis.importAsync("#client/components/FormTextField.vue"), dt = S.default || S, k = await globalThis.importAsync("#client/components/FormTextarea.vue"), mt = k.default || k, E = await globalThis.importAsync("#client/components/Button.vue"), pt = E.default || E, { $fetch: L } = await globalThis.importAsync("#client/utils/fetcher.ts"), M = await globalThis.importAsync("#client/components/TextField.vue"), P = M.default || M, yt = { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, bt = { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, Tt = { class: "flex-1 flex flex-col" }, xt = /* @__PURE__ */ H({
  __name: "[id]",
  setup(ht) {
    const u = K(), R = Q(), s = T(() => u.params.id), r = h(null), c = h(!1), U = X({
      name: Y(w(), Z(2, $t("Name is required"))),
      description: tt(w())
    }), { handleSubmit: j, setValues: q } = W({
      validationSchema: et(U)
    });
    async function f() {
      const [e, o] = await L.try(`/api/zpayments/products/${s.value}`, {
        method: "GET"
      });
      if (e) {
        console.error("Failed to load product:", s.value), console.error(e);
        return;
      }
      r.value = o, q({
        name: o.name,
        description: o.description || ""
      });
    }
    z(f);
    const v = T({
      get: () => u.query.tab || "prices",
      set: (e) => {
        R.replace({
          path: u.path,
          query: {
            tab: e
          }
        });
      }
    }), y = (e) => e ? new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(e)) : $t("N/A"), b = j(async (e) => {
      c.value = !0;
      const [o] = await L.try(`/api/zpayments/products/${s.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      });
      if (o) {
        console.error("Failed to save product:", o), A.error($t("Failed to update.")), c.value = !1;
        return;
      }
      A.success($t("Updated successfully.")), c.value = !1, await f();
    });
    return (e, o) => (g(), G(at, null, {
      default: a(() => [
        m("div", yt, [
          m("div", bt, [
            r.value ? (g(), I("form", {
              key: 0,
              onSubmit: o[0] || (o[0] = O(
                //@ts-ignore
                (...d) => l(b) && l(b)(...d),
                ["prevent"]
              ))
            }, [
              t(ot, null, {
                default: a(() => [
                  t(st, null, {
                    default: a(() => [
                      t(nt, null, {
                        default: a(() => [
                          n(i(e.$t("Product Details")), 1)
                        ]),
                        _: 1
                      }),
                      t(lt, null, {
                        default: a(() => [
                          n(i(e.$t("Edit product information")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  t(it, { class: "space-y-6" }, {
                    default: a(() => [
                      t(dt, {
                        name: "name",
                        label: e.$t("Name")
                      }, null, 8, ["label"]),
                      t(mt, {
                        name: "description",
                        label: e.$t("Description")
                      }, null, 8, ["label"]),
                      t(P, {
                        label: e.$t("Created At"),
                        "model-value": y(r.value.created_at),
                        readonly: ""
                      }, null, 8, ["label", "model-value"]),
                      t(P, {
                        label: e.$t("Updated At"),
                        "model-value": y(r.value.updated_at),
                        readonly: ""
                      }, null, 8, ["label", "model-value"])
                    ]),
                    _: 1
                  }),
                  t(rt, { class: "flex justify-end" }, {
                    default: a(() => [
                      t(pt, {
                        type: "submit",
                        loading: c.value
                      }, {
                        default: a(() => [
                          n(i(e.$t("Update")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 32)) : J("", !0)
          ]),
          m("div", Tt, [
            t(ct, {
              modelValue: v.value,
              "onUpdate:modelValue": o[1] || (o[1] = (d) => v.value = d),
              "default-value": "prices"
            }, {
              default: a(() => [
                t(l(ut), null, {
                  default: a(() => [
                    t(l(p), { value: "prices" }, {
                      default: a(() => [
                        n(i(e.$t("Prices")), 1)
                      ]),
                      _: 1
                    }),
                    t(l(p), { value: "metas" }, {
                      default: a(() => [
                        n(i(e.$t("Metas")), 1)
                      ]),
                      _: 1
                    }),
                    t(l(p), { value: "payments" }, {
                      default: a(() => [
                        n(i(e.$t("Payments")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                t(l(_), { value: "prices" }, {
                  default: a(() => [
                    t(ft, { "product-id": s.value }, null, 8, ["product-id"])
                  ]),
                  _: 1
                }),
                t(l(_), { value: "metas" }, {
                  default: a(() => [
                    t(_t, { "product-id": s.value }, null, 8, ["product-id"])
                  ]),
                  _: 1
                }),
                t(l(_), { value: "payments" }, {
                  default: a(() => [
                    t(vt, { "product-id": s.value }, null, 8, ["product-id"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      _: 1
    }));
  }
});
export {
  xt as default
};
