import { _ as D } from "./GatewayEntityTable.vue_vue_type_script_setup_true_lang-5KTG0kO9.js";
const { defineComponent: h } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: T } = await globalThis.importAsync("vue"), { openBlock: v } = await globalThis.importAsync("vue"), { unref: n } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { normalizeClass: C } = await globalThis.importAsync("vue"), { toast: _ } = await globalThis.importAsync("vue-sonner"), { Card: A } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: k } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: B } = await globalThis.importAsync("#client/components/ui/card"), { CardAction: S } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: x } = await globalThis.importAsync("#client/components/ui/card"), p = await globalThis.importAsync("#client/components/Button.vue"), m = p.default || p, y = await globalThis.importAsync("#client/components/Icon.vue"), z = y.default || y, { $fetch: N } = await globalThis.importAsync("#client/utils/fetcher.ts"), I = /* @__PURE__ */ h({
  __name: "GatewaySubscriptions",
  props: {
    gateway: {}
  },
  setup(r) {
    const g = r, o = i(!1), s = i(!1), u = i();
    async function f() {
      o.value = !0;
      const [e] = await N.try(`/api/zpayments/gateways/${g.gateway.id}/subscriptions/sync`, {
        method: "POST"
      });
      if (e) {
        o.value = !1;
        return;
      }
      _.success($t("Subscriptions synced successfully.")), setTimeout(() => {
        o.value = !1;
      }, 1e3);
    }
    async function w() {
      u.value?.load();
    }
    return (e, d) => (v(), T(n(A), null, {
      default: a(() => [
        t(n($), null, {
          default: a(() => [
            t(n(k), null, {
              default: a(() => [
                l(c(e.$t("Subscriptions")), 1)
              ]),
              _: 1
            }),
            t(n(B), null, {
              default: a(() => [
                l(c(e.$t("Manage subscriptions associated with this gateway.")), 1)
              ]),
              _: 1
            }),
            t(n(S), { class: "flex items-center gap-2" }, {
              default: a(() => [
                t(m, {
                  variant: "outline",
                  size: "icon",
                  disabled: s.value,
                  onClick: w
                }, {
                  default: a(() => [
                    t(z, {
                      name: "RotateCcw",
                      class: C({ "animate-spin": s.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                t(m, {
                  loading: o.value,
                  onClick: f
                }, {
                  default: a(() => [
                    l(c(e.$t("Sync")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(n(x), null, {
          default: a(() => [
            t(D, {
              ref_key: "tableRef",
              ref: u,
              loading: s.value,
              "onUpdate:loading": d[0] || (d[0] = (b) => s.value = b),
              "gateway-id": r.gateway?.id,
              "entity-type": "subscription"
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
