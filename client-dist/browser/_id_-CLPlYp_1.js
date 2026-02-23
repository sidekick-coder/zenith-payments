import { t as nt } from "./vee-validate-valibot-D31hhJmQ.js";
import vt from "./gatewayConfig.entity-DUywytzM.js";
import _t from "./index-C5jCdUgN.js";
const { getCurrentScope: H } = await globalThis.importAsync("vue"), { onScopeDispose: O } = await globalThis.importAsync("vue"), { customRef: I } = await globalThis.importAsync("vue"), { toValue: C } = await globalThis.importAsync("vue"), { nextTick: J } = await globalThis.importAsync("vue"), { watch: K } = await globalThis.importAsync("vue"), { defineComponent: X } = await globalThis.importAsync("vue"), { computed: Y } = await globalThis.importAsync("vue"), { ref: k } = await globalThis.importAsync("vue"), { defineAsyncComponent: D } = await globalThis.importAsync("vue"), { onMounted: Z } = await globalThis.importAsync("vue"), { createBlock: x } = await globalThis.importAsync("vue"), { openBlock: p } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { withCtx: s } = await globalThis.importAsync("vue"), { createElementBlock: S } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { createElementVNode: b } = await globalThis.importAsync("vue"), { createTextVNode: h } = await globalThis.importAsync("vue"), { toDisplayString: T } = await globalThis.importAsync("vue"), { createCommentVNode: B } = await globalThis.importAsync("vue"), { withModifiers: tt } = await globalThis.importAsync("vue"), { isRef: et } = await globalThis.importAsync("vue"), { Fragment: G } = await globalThis.importAsync("vue"), { renderList: N } = await globalThis.importAsync("vue"), { resolveDynamicComponent: ot } = await globalThis.importAsync("vue"), { useRoute: U } = await globalThis.importAsync("vue-router"), { useRouter: at } = await globalThis.importAsync("vue-router"), { useForm: st } = await globalThis.importAsync("vee-validate"), { toast: it } = await globalThis.importAsync("vue-sonner"), R = await globalThis.importAsync("#client/layouts/AppLayout.vue"), lt = R.default || R, { Card: ct } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: rt } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: ut } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: mt } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: pt } = await globalThis.importAsync("#client/components/ui/card"), { Tabs: dt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: yt } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: ft } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: bt } = await globalThis.importAsync("#client/components/ui/tabs"), { Skeleton: V } = await globalThis.importAsync("#client/components/ui/skeleton"), q = await globalThis.importAsync("#client/components/PageTitle.vue"), gt = q.default || q, E = await globalThis.importAsync("#client/components/PageSubtitle.vue"), wt = E.default || E, L = await globalThis.importAsync("#client/components/FormTextField.vue"), P = L.default || L, $ = await globalThis.importAsync("#client/components/Button.vue"), ht = $.default || $, { $fetch: M } = await globalThis.importAsync("#client/utils/fetcher.ts"), { tryCatch: Tt } = await globalThis.importAsync("#shared/utils/tryCatch.ts"), { $t: n } = await globalThis.importAsync("#shared/lang");
function At(g, d) {
  return H() ? (O(g, d), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const F = /* @__PURE__ */ new WeakMap();
function Ct(g, d, _ = {}) {
  const { mode: l = "replace", route: m = U(), router: c = at(), transform: i } = _;
  let y = (e) => e, A = (e) => e;
  typeof i == "function" ? y = i : i && (i.get && (y = i.get), i.set && (A = i.set)), F.has(c) || F.set(c, /* @__PURE__ */ new Map());
  const w = F.get(c);
  let r = m.query[g];
  At(() => {
    r = void 0;
  });
  let v;
  const u = I((e, a) => (v = a, {
    get() {
      return e(), y(r !== void 0 ? r : C(d));
    },
    set(f) {
      f = A(f), r !== f && (r = f === C(d) ? void 0 : f, w.set(g, f === C(d) ? void 0 : f), a(), J(() => {
        if (w.size === 0) return;
        const j = Object.fromEntries(w.entries());
        w.clear();
        const { params: z, query: Q, hash: W } = m;
        c[C(l)]({
          params: z,
          query: {
            ...Q,
            ...j
          },
          hash: W
        });
      }));
    }
  }));
  return K(() => m.query[g], (e) => {
    r !== y(e) && (r = e, v());
  }, { flush: "sync" }), u;
}
const xt = {
  key: 0,
  class: "flex flex-col space-y-3"
}, St = { class: "space-y-2" }, kt = {
  key: 1,
  class: "flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
}, Dt = { class: "w-full flex items-center justify-between" }, Vt = { class: "w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6" }, Ft = { class: "flex gap-3 pt-4 justify-end" }, Bt = { class: "w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6" }, qt = /* @__PURE__ */ X({
  __name: "[id]",
  setup(g) {
    const d = U(), _ = Y(() => d.params.id), l = k(), m = k(!0), c = k(!1), i = Ct("tab", "config"), y = [
      {
        id: "config",
        label: n("Configuration"),
        component: D(() => import("./GatewayConfig-CTgTUmQJ.js"))
      },
      {
        id: "customers",
        label: n("Customers"),
        component: D(() => import("./GatewayCustomers-BAopvjmk.js"))
      },
      {
        id: "subscriptions",
        label: n("Subscriptions"),
        component: D(() => import("./GatewaySubscriptions-BNL3hLWE.js"))
      }
    ], { handleSubmit: A, setValues: w } = st({
      validationSchema: nt(_t.gateway.update)
    });
    async function r() {
      m.value = !0;
      const [u, e] = await Tt(() => M(`/api/zpayments/gateways/${_.value}`, { method: "GET" }));
      if (u) {
        console.error("Failed to load gateway:", u), m.value = !1;
        return;
      }
      l.value = vt.from(e), w({
        name: e?.name || "",
        description: e?.description || ""
      }), setTimeout(() => {
        m.value = !1;
      }, 500);
    }
    const v = A(async (u) => {
      c.value = !0;
      const [e] = await M.try(`/api/zpayments/gateways/${_.value}`, {
        method: "PUT",
        data: u
      });
      if (e) {
        c.value = !1;
        return;
      }
      l.value && (l.value.name = u.name, l.value.description = u.description), setTimeout(() => {
        it.success(n("Updated successfully.")), c.value = !1;
      }, 500);
    });
    return Z(r), (u, e) => (p(), x(lt, {
      breadcrumbs: [
        { label: t(n)("Gateways"), to: "/admin/gateways" },
        { label: l.value?.name || "..." }
      ]
    }, {
      default: s(() => [
        m.value ? (p(), S("div", xt, [
          o(t(V), { class: "h-[125px] w- rounded-xl" }),
          b("div", St, [
            o(t(V), { class: "h-4 w-[80%]" }),
            o(t(V), { class: "h-4 w-[60%]" })
          ])
        ])) : (p(), S("div", kt, [
          b("div", Dt, [
            b("div", null, [
              o(gt, null, {
                default: s(() => [
                  h(T(t(n)("Edit Gateway")), 1)
                ]),
                _: 1
              }),
              o(wt, null, {
                default: s(() => [
                  h(T(t(n)("Update the gateway information below")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          b("div", Vt, [
            l.value ? (p(), x(t(ct), { key: 0 }, {
              default: s(() => [
                o(t(rt), null, {
                  default: s(() => [
                    o(t(ut), null, {
                      default: s(() => [
                        h(T(t(n)("Details")), 1)
                      ]),
                      _: 1
                    }),
                    o(t(mt), null, {
                      default: s(() => [
                        h(T(t(n)("Gateway general information")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                o(t(pt), null, {
                  default: s(() => [
                    b("form", {
                      class: "space-y-4 w-full",
                      onSubmit: e[0] || (e[0] = tt(
                        //@ts-ignore
                        (...a) => t(v) && t(v)(...a),
                        ["prevent"]
                      ))
                    }, [
                      o(P, {
                        name: "name",
                        label: t(n)("Name")
                      }, null, 8, ["label"]),
                      o(P, {
                        name: "description",
                        label: t(n)("Description")
                      }, null, 8, ["label"]),
                      b("div", Ft, [
                        o(ht, {
                          type: "submit",
                          loading: c.value
                        }, {
                          default: s(() => [
                            h(T(t(n)("Save")), 1)
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
            })) : B("", !0)
          ]),
          b("div", Bt, [
            l.value ? (p(), x(t(dt), {
              key: 0,
              modelValue: t(i),
              "onUpdate:modelValue": e[1] || (e[1] = (a) => et(i) ? i.value = a : null),
              class: "w-full"
            }, {
              default: s(() => [
                o(t(yt), null, {
                  default: s(() => [
                    (p(), S(G, null, N(y, (a) => o(t(ft), {
                      key: a.id,
                      value: a.id
                    }, {
                      default: s(() => [
                        h(T(a.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"])), 64))
                  ]),
                  _: 1
                }),
                (p(), S(G, null, N(y, (a) => o(t(bt), {
                  key: a.id,
                  value: a.id
                }, {
                  default: s(() => [
                    (p(), x(ot(a.component), { gateway: l.value }, null, 8, ["gateway"]))
                  ]),
                  _: 2
                }, 1032, ["value"])), 64))
              ]),
              _: 1
            }, 8, ["modelValue"])) : B("", !0)
          ])
        ]))
      ]),
      _: 1
    }, 8, ["breadcrumbs"]));
  }
});
export {
  qt as default
};
