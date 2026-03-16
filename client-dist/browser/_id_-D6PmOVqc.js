import "./order.entity-X244Lp1t.js";
import { _ as U } from "./UserPaymentsTable.vue_vue_type_script_setup_true_lang-DILWdQm8.js";
import { _ as j } from "./UserOrdersCard.vue_vue_type_script_setup_true_lang-CrmRuvZ2.js";
const { defineComponent: F } = await globalThis.importAsync("vue"), { computed: m } = await globalThis.importAsync("vue"), { ref: p } = await globalThis.importAsync("vue"), { onMounted: k } = await globalThis.importAsync("vue"), { createBlock: _ } = await globalThis.importAsync("vue"), { openBlock: b } = await globalThis.importAsync("vue"), { withCtx: t } = await globalThis.importAsync("vue"), { createElementVNode: u } = await globalThis.importAsync("vue"), { createVNode: e } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { toDisplayString: i } = await globalThis.importAsync("vue"), { createCommentVNode: B } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { useRoute: L } = await globalThis.importAsync("vue-router"), { useRouter: E } = await globalThis.importAsync("vue-router");
await globalThis.importAsync("vee-validate");
await globalThis.importAsync("vue-sonner");
const T = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), R = T.default || T, v = await globalThis.importAsync("#client/components/ui/card/Card.vue"), H = v.default || v, y = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), q = y.default || y, f = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), M = f.default || f, h = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), S = h.default || h, g = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), G = g.default || g;
await globalThis.importAsync("#client/components/ui/card/CardFooter.vue");
const w = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue"), I = w.default || w, { TabsList: O } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: A } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: C } = await globalThis.importAsync("#client/components/ui/tabs");
await globalThis.importAsync("#client/components/FormTextField.vue");
await globalThis.importAsync("#client/components/FormTextarea.vue");
await globalThis.importAsync("#client/components/Button.vue");
const { $fetch: P } = await globalThis.importAsync("#client/utils/fetcher.ts"), x = await globalThis.importAsync("#client/components/TextField.vue"), r = x.default || x;
await globalThis.importAsync("#client/components/DataTable.vue");
await globalThis.importAsync("#client/components/ui/badge/index.ts");
const z = { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, J = { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, K = { class: "flex-1 flex flex-col" }, Z = /* @__PURE__ */ F({
  __name: "[id]",
  setup(Q) {
    const c = L(), V = E(), $ = m(() => c.params.id), o = p(null);
    p(!1);
    async function N() {
      const [a, n] = await P.try(`/api/users/${$.value}`, {
        method: "GET"
      });
      a || (o.value = n);
    }
    k(N);
    const d = m({
      get: () => c.query.tab || "orders",
      set: (a) => {
        V.replace({
          path: c.path,
          query: {
            tab: a
          }
        });
      }
    });
    return (a, n) => (b(), _(R, null, {
      default: t(() => [
        u("div", z, [
          u("div", J, [
            e(H, null, {
              default: t(() => [
                e(M, null, {
                  default: t(() => [
                    e(S, null, {
                      default: t(() => [
                        s(i(a.$t("Details")), 1)
                      ]),
                      _: 1
                    }),
                    e(q, null, {
                      default: t(() => [
                        s(i(a.$t("Customer information")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(G, { class: "space-y-6" }, {
                  default: t(() => [
                    e(r, {
                      label: "ID",
                      "model-value": o.value?.id,
                      readonly: ""
                    }, null, 8, ["model-value"]),
                    e(r, {
                      label: a.$t("Name"),
                      "model-value": o.value?.name,
                      readonly: ""
                    }, null, 8, ["label", "model-value"]),
                    e(r, {
                      label: a.$t("Email"),
                      "model-value": o.value?.email,
                      readonly: ""
                    }, null, 8, ["label", "model-value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          u("div", K, [
            o.value ? (b(), _(I, {
              key: 0,
              modelValue: d.value,
              "onUpdate:modelValue": n[0] || (n[0] = (D) => d.value = D)
            }, {
              default: t(() => [
                e(l(O), null, {
                  default: t(() => [
                    e(l(A), { value: "orders" }, {
                      default: t(() => [
                        s(i(a.$t("Orders")), 1)
                      ]),
                      _: 1
                    }),
                    e(l(A), { value: "payments" }, {
                      default: t(() => [
                        s(i(a.$t("Payments")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(l(C), { value: "orders" }, {
                  default: t(() => [
                    e(j, {
                      "user-id": o.value.id
                    }, null, 8, ["user-id"])
                  ]),
                  _: 1
                }),
                e(l(C), { value: "payments" }, {
                  default: t(() => [
                    e(U, {
                      "user-id": o.value.id
                    }, null, 8, ["user-id"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])) : B("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
});
export {
  Z as default
};
