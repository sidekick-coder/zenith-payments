import { _ as N } from "./GatewayEntityTable.vue_vue_type_script_setup_true_lang-5KTG0kO9.js";
const { defineComponent: C } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: T } = await globalThis.importAsync("vue"), { openBlock: b } = await globalThis.importAsync("vue"), { unref: e } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { normalizeClass: v } = await globalThis.importAsync("vue"), { toast: _ } = await globalThis.importAsync("vue-sonner"), { Card: A } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: k } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: B } = await globalThis.importAsync("#client/components/ui/card"), { CardAction: x } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: z } = await globalThis.importAsync("#client/components/ui/card"), m = await globalThis.importAsync("#client/components/Button.vue"), p = m.default || m, y = await globalThis.importAsync("#client/components/Icon.vue"), D = y.default || y, { $fetch: S } = await globalThis.importAsync("#client/utils/fetcher.ts"), I = /* @__PURE__ */ C({
  __name: "GatewayCustomers",
  props: {
    gateway: {}
  },
  setup(r) {
    const g = r, n = i(!1), s = i(!1), u = i();
    async function f() {
      n.value = !0;
      const [o] = await S.try(`/api/zpayments/gateways/${g.gateway.id}/customers/sync`, {
        method: "POST"
      });
      if (o) {
        n.value = !1;
        return;
      }
      _.success($t("Customers synced successfully.")), setTimeout(() => {
        n.value = !1;
      }, 1e3);
    }
    async function w() {
      u.value?.load();
    }
    return (o, d) => (b(), T(e(A), null, {
      default: a(() => [
        t(e($), null, {
          default: a(() => [
            t(e(k), null, {
              default: a(() => [
                l(c(o.$t("Customers")), 1)
              ]),
              _: 1
            }),
            t(e(B), null, {
              default: a(() => [
                l(c(o.$t("Manage customers associated with this gateway.")), 1)
              ]),
              _: 1
            }),
            t(e(x), { class: "flex items-center gap-2" }, {
              default: a(() => [
                t(p, {
                  variant: "outline",
                  size: "icon",
                  disabled: s.value,
                  onClick: w
                }, {
                  default: a(() => [
                    t(D, {
                      name: "RotateCcw",
                      class: v({ "animate-spin": s.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                t(p, {
                  loading: n.value,
                  onClick: f
                }, {
                  default: a(() => [
                    l(c(o.$t("Sync")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(e(z), null, {
          default: a(() => [
            t(N, {
              ref_key: "tableRef",
              ref: u,
              loading: s.value,
              "onUpdate:loading": d[0] || (d[0] = (h) => s.value = h),
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
  I as default
};
