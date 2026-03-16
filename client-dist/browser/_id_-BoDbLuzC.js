import { t as st } from "./vee-validate-valibot-D31hhJmQ.js";
import Tt from "./gatewayConfig.entity-DUywytzM.js";
import vt from "./index-D8jq18Zg.js";
const { getCurrentScope: W } = await globalThis.importAsync("vue"), { onScopeDispose: H } = await globalThis.importAsync("vue"), { customRef: O } = await globalThis.importAsync("vue"), { toValue: A } = await globalThis.importAsync("vue"), { nextTick: I } = await globalThis.importAsync("vue"), { watch: J } = await globalThis.importAsync("vue"), { defineComponent: K } = await globalThis.importAsync("vue"), { computed: X } = await globalThis.importAsync("vue"), { ref: x } = await globalThis.importAsync("vue"), { defineAsyncComponent: k } = await globalThis.importAsync("vue"), { onMounted: Y } = await globalThis.importAsync("vue"), { createBlock: C } = await globalThis.importAsync("vue"), { openBlock: m } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createElementBlock: S } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { createElementVNode: f } = await globalThis.importAsync("vue"), { unref: a } = await globalThis.importAsync("vue"), { createTextVNode: w } = await globalThis.importAsync("vue"), { toDisplayString: h } = await globalThis.importAsync("vue"), { createCommentVNode: V } = await globalThis.importAsync("vue"), { withModifiers: Z } = await globalThis.importAsync("vue"), { isRef: tt } = await globalThis.importAsync("vue"), { Fragment: F } = await globalThis.importAsync("vue"), { renderList: B } = await globalThis.importAsync("vue"), { resolveDynamicComponent: et } = await globalThis.importAsync("vue"), { useRoute: M } = await globalThis.importAsync("vue-router"), { useRouter: ot } = await globalThis.importAsync("vue-router"), { useForm: at } = await globalThis.importAsync("vee-validate"), { toast: nt } = await globalThis.importAsync("vue-sonner"), G = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), it = G.default || G, { Card: lt } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: ct } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: rt } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: ut } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: mt } = await globalThis.importAsync("#client/components/ui/card"), { Tabs: pt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: dt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: yt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: ft } = await globalThis.importAsync("#client/components/ui/tabs"), { Skeleton: $ } = await globalThis.importAsync("#client/components/ui/skeleton"), N = await globalThis.importAsync("#client/components/PageTitle.vue"), bt = N.default || N, R = await globalThis.importAsync("#client/components/PageSubtitle.vue"), gt = R.default || R, q = await globalThis.importAsync("#client/components/FormTextField.vue"), E = q.default || q, L = await globalThis.importAsync("#client/components/Button.vue"), wt = L.default || L, { $fetch: P } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: ht } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
function _t(b, p) {
  return W() ? (H(b, p), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const D = /* @__PURE__ */ new WeakMap();
function At(b, p, v = {}) {
  const { mode: l = "replace", route: u = M(), router: c = ot(), transform: i } = v;
  let d = (t) => t, _ = (t) => t;
  typeof i == "function" ? d = i : i && (i.get && (d = i.get), i.set && (_ = i.set)), D.has(c) || D.set(c, /* @__PURE__ */ new Map());
  const g = D.get(c);
  let r = u.query[b];
  _t(() => {
    r = void 0;
  });
  let T;
  const e = O((t, s) => (T = s, {
    get() {
      return t(), d(r !== void 0 ? r : A(p));
    },
    set(y) {
      y = _(y), r !== y && (r = y === A(p) ? void 0 : y, g.set(b, y === A(p) ? void 0 : y), s(), I(() => {
        if (g.size === 0) return;
        const U = Object.fromEntries(g.entries());
        g.clear();
        const { params: j, query: z, hash: Q } = u;
        c[A(l)]({
          params: j,
          query: {
            ...z,
            ...U
          },
          hash: Q
        });
      }));
    }
  }));
  return J(() => u.query[b], (t) => {
    r !== d(t) && (r = t, T());
  }, { flush: "sync" }), e;
}
const Ct = {
  key: 0,
  class: "flex flex-col space-y-3"
}, St = { class: "space-y-2" }, xt = {
  key: 1,
  class: "flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
}, kt = { class: "w-full flex items-center justify-between" }, Dt = { class: "w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6" }, Vt = { class: "flex gap-3 pt-4 justify-end" }, Ft = { class: "w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6" }, Rt = /* @__PURE__ */ K({
  __name: "[id]",
  setup(b) {
    const p = M(), v = X(() => p.params.id), l = x(), u = x(!0), c = x(!1), i = At("tab", "config"), d = [
      {
        id: "config",
        label: $t("Configuration"),
        component: k(() => import("./GatewayConfig-C_LP4r90.js"))
      },
      {
        id: "customers",
        label: $t("Customers"),
        component: k(() => import("./GatewayCustomers-C7GU7PDc.js"))
      },
      {
        id: "subscriptions",
        label: $t("Subscriptions"),
        component: k(() => import("./GatewaySubscriptions-BN-3319F.js"))
      }
    ], { handleSubmit: _, setValues: g } = at({
      validationSchema: st(vt.gateway.update)
    });
    async function r() {
      u.value = !0;
      const [e, t] = await ht(() => P(`/api/zpayments/gateways/${v.value}`, { method: "GET" }));
      if (e) {
        console.error("Failed to load gateway:", e), u.value = !1;
        return;
      }
      l.value = Tt.from(t), g({
        name: t?.name || "",
        description: t?.description || ""
      }), setTimeout(() => {
        u.value = !1;
      }, 500);
    }
    const T = _(async (e) => {
      c.value = !0;
      const [t] = await P.try(`/api/zpayments/gateways/${v.value}`, {
        method: "PUT",
        data: e
      });
      if (t) {
        c.value = !1;
        return;
      }
      l.value && (l.value.name = e.name, l.value.description = e.description), setTimeout(() => {
        nt.success($t("Updated successfully.")), c.value = !1;
      }, 500);
    });
    return Y(r), (e, t) => (m(), C(it, {
      breadcrumbs: [
        { label: e.$t("Gateways"), to: "/admin/gateways" },
        { label: l.value?.name || "..." }
      ]
    }, {
      default: n(() => [
        u.value ? (m(), S("div", Ct, [
          o(a($), { class: "h-[125px] w- rounded-xl" }),
          f("div", St, [
            o(a($), { class: "h-4 w-[80%]" }),
            o(a($), { class: "h-4 w-[60%]" })
          ])
        ])) : (m(), S("div", xt, [
          f("div", kt, [
            f("div", null, [
              o(bt, null, {
                default: n(() => [
                  w(h(e.$t("Edit Gateway")), 1)
                ]),
                _: 1
              }),
              o(gt, null, {
                default: n(() => [
                  w(h(e.$t("Update the gateway information below")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          f("div", Dt, [
            l.value ? (m(), C(a(lt), { key: 0 }, {
              default: n(() => [
                o(a(ct), null, {
                  default: n(() => [
                    o(a(rt), null, {
                      default: n(() => [
                        w(h(e.$t("Details")), 1)
                      ]),
                      _: 1
                    }),
                    o(a(ut), null, {
                      default: n(() => [
                        w(h(e.$t("Gateway general information")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                o(a(mt), null, {
                  default: n(() => [
                    f("form", {
                      class: "space-y-4 w-full",
                      onSubmit: t[0] || (t[0] = Z(
                        //@ts-ignore
                        (...s) => a(T) && a(T)(...s),
                        ["prevent"]
                      ))
                    }, [
                      o(E, {
                        name: "name",
                        label: e.$t("Name")
                      }, null, 8, ["label"]),
                      o(E, {
                        name: "description",
                        label: e.$t("Description")
                      }, null, 8, ["label"]),
                      f("div", Vt, [
                        o(wt, {
                          type: "submit",
                          loading: c.value
                        }, {
                          default: n(() => [
                            w(h(e.$t("Save")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ], 32)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : V("", !0)
          ]),
          f("div", Ft, [
            l.value ? (m(), C(a(pt), {
              key: 0,
              modelValue: a(i),
              "onUpdate:modelValue": t[1] || (t[1] = (s) => tt(i) ? i.value = s : null),
              class: "w-full"
            }, {
              default: n(() => [
                o(a(dt), null, {
                  default: n(() => [
                    (m(), S(F, null, B(d, (s) => o(a(yt), {
                      key: s.id,
                      value: s.id
                    }, {
                      default: n(() => [
                        w(h(s.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"])), 64))
                  ]),
                  _: 1
                }),
                (m(), S(F, null, B(d, (s) => o(a(ft), {
                  key: s.id,
                  value: s.id
                }, {
                  default: n(() => [
                    (m(), C(et(s.component), { gateway: l.value }, null, 8, ["gateway"]))
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }, 8, ["modelValue"])) : V("", !0)
          ])
        ]))
      ]),
      _: 1
    }, 8, ["breadcrumbs"]));
  }
});
export {
  Rt as default
};
