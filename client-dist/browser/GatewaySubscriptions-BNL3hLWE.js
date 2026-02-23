import { _ as N } from "./GatewayEntityTable.vue_vue_type_script_setup_true_lang-5KTG0kO9.js";
const { defineComponent: T } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: _ } = await globalThis.importAsync("vue"), { openBlock: v } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { normalizeClass: A } = await globalThis.importAsync("vue"), { toast: C } = await globalThis.importAsync("vue-sonner"), { Card: k } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: x } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: B } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: S } = await globalThis.importAsync("#client/components/ui/card"), { CardAction: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: z } = await globalThis.importAsync("#client/components/ui/card"), m = await globalThis.importAsync("#client/components/Button.vue"), y = m.default || m, g = await globalThis.importAsync("#client/components/Icon.vue"), D = g.default || g, { $fetch: V } = await globalThis.importAsync("#client/utils/fetcher.ts"), { $t: s } = await globalThis.importAsync("#shared/lang"), R = /* @__PURE__ */ T({
  __name: "GatewaySubscriptions",
  props: {
    gateway: {}
  },
  setup(r) {
    const f = r, o = i(!1), e = i(!1), u = i();
    async function w() {
      o.value = !0;
      const [d] = await V.try(`/api/zpayments/gateways/${f.gateway.id}/subscriptions/sync`, {
        method: "POST"
      });
      if (d) {
        o.value = !1;
        return;
      }
      C.success(s("Subscriptions synced successfully.")), setTimeout(() => {
        o.value = !1;
      }, 1e3);
    }
    async function b() {
      u.value?.load();
    }
    return (d, p) => (v(), _(t(k), null, {
      default: n(() => [
        a(t(x), null, {
          default: n(() => [
            a(t(B), null, {
              default: n(() => [
                l(c(t(s)("Subscriptions")), 1)
              ]),
              _: 1
            }),
            a(t(S), null, {
              default: n(() => [
                l(c(t(s)("Manage subscriptions associated with this gateway.")), 1)
              ]),
              _: 1
            }),
            a(t($), { class: "flex items-center gap-2" }, {
              default: n(() => [
                a(y, {
                  variant: "outline",
                  size: "icon",
                  disabled: e.value,
                  onClick: b
                }, {
                  default: n(() => [
                    a(D, {
                      name: "RotateCcw",
                      class: A({ "animate-spin": e.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                a(y, {
                  loading: o.value,
                  onClick: w
                }, {
                  default: n(() => [
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
        a(t(z), null, {
          default: n(() => [
            a(N, {
              ref_key: "tableRef",
              ref: u,
              loading: e.value,
              "onUpdate:loading": p[0] || (p[0] = (h) => e.value = h),
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
  R as default
};
