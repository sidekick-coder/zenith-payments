import { _ as S } from "./GatewayEntityTable.vue_vue_type_script_setup_true_lang-5KTG0kO9.js";
const { defineComponent: C } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: _ } = await globalThis.importAsync("vue"), { openBlock: b } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { normalizeClass: v } = await globalThis.importAsync("vue"), { toast: A } = await globalThis.importAsync("vue-sonner"), { Card: k } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: x } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: B } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardAction: z } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: D } = await globalThis.importAsync("#client/components/ui/card"), p = await globalThis.importAsync("#client/components/Button.vue"), y = p.default || p, g = await globalThis.importAsync("#client/components/Icon.vue"), N = g.default || g, { $fetch: V } = await globalThis.importAsync("#client/utils/fetcher.ts"), { $t: s } = await globalThis.importAsync("#shared/lang"), R = /* @__PURE__ */ C({
  __name: "GatewayCustomers",
  props: {
    gateway: {}
  },
  setup(r) {
    const f = r, o = i(!1), n = i(!1), u = i();
    async function w() {
      o.value = !0;
      const [d] = await V.try(`/api/zpayments/gateways/${f.gateway.id}/customers/sync`, {
        method: "POST"
      });
      if (d) {
        o.value = !1;
        return;
      }
      A.success(s("Customers synced successfully.")), setTimeout(() => {
        o.value = !1;
      }, 1e3);
    }
    async function h() {
      u.value?.load();
    }
    return (d, m) => (b(), _(t(k), null, {
      default: e(() => [
        a(t(x), null, {
          default: e(() => [
            a(t(B), null, {
              default: e(() => [
                l(c(t(s)("Customers")), 1)
              ]),
              _: 1
            }),
            a(t($), null, {
              default: e(() => [
                l(c(t(s)("Manage customers associated with this gateway.")), 1)
              ]),
              _: 1
            }),
            a(t(z), { class: "flex items-center gap-2" }, {
              default: e(() => [
                a(y, {
                  variant: "outline",
                  size: "icon",
                  disabled: n.value,
                  onClick: h
                }, {
                  default: e(() => [
                    a(N, {
                      name: "RotateCcw",
                      class: v({ "animate-spin": n.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                a(y, {
                  loading: o.value,
                  onClick: w
                }, {
                  default: e(() => [
                    l(c(t(s)("Sync")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a(t(D), null, {
          default: e(() => [
            a(S, {
              ref_key: "tableRef",
              ref: u,
              loading: n.value,
              "onUpdate:loading": m[0] || (m[0] = (T) => n.value = T),
              "gateway-id": r.gateway?.id,
              "entity-type": "customer"
            }, null, 8, ["loading", "gateway-id"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  R as default
};
