import E from "./gatewayConfig.entity-DUywytzM.js";
const { defineComponent: T } = await globalThis.importAsync("vue"), { computed: A } = await globalThis.importAsync("vue"), { useModel: _ } = await globalThis.importAsync("vue"), { onMounted: C } = await globalThis.importAsync("vue"), { createBlock: y } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { withCtx: t } = await globalThis.importAsync("vue"), { createElementVNode: r } = await globalThis.importAsync("vue"), { createCommentVNode: w } = await globalThis.importAsync("vue"), { unref: a } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { createTextVNode: u } = await globalThis.importAsync("vue"), { toDisplayString: d } = await globalThis.importAsync("vue"), { createElementBlock: x } = await globalThis.importAsync("vue"), { Fragment: $ } = await globalThis.importAsync("vue"), { renderList: k } = await globalThis.importAsync("vue"), { renderSlot: B } = await globalThis.importAsync("vue"), { useRoute: N } = await globalThis.importAsync("vue-router"), { Card: V } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: L } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: z } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: D } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: M } = await globalThis.importAsync("#client/components/ui/card"), g = await globalThis.importAsync("#client/layouts/AppLayout.vue"), S = g.default || g, { $fetch: F } = await globalThis.importAsync("#client/utils"), h = await globalThis.importAsync("#client/components/Button.vue"), j = h.default || h, { $t: i } = await globalThis.importAsync("#shared/lang"), G = { class: "flex [&>*]:px-4 -mx-4" }, H = { class: "w-full md:w-6/12 lg:w-4/12 xl:w-3/12" }, R = { class: "w-full md:w-6/12 lg:w-8/12 xl:w-9/12" }, q = /* @__PURE__ */ T({
  __name: "GatewayLayout",
  props: {
    gateway: {
      type: Object
    },
    gatewayModifiers: {}
  },
  emits: ["update:gateway"],
  setup(b) {
    const m = N(), e = A(() => m.params.id), o = _(b, "gateway"), f = [
      {
        label: i("Details"),
        to: `/admin/zpayments/gateways/${e.value}/details`
      },
      {
        label: i("Subscriptions"),
        to: `/admin/zpayments/gateways/${e.value}/subscriptions`
      },
      {
        label: i("Customers"),
        to: `/admin/zpayments/gateways/${e.value}/customers`
      },
      {
        label: i("Configuration"),
        to: `/admin/zpayments/gateways/${e.value}/config`
      }
    ];
    async function v() {
      const [n, p] = await F.try(`/api/zpayments/gateways/${e.value}`);
      if (n) {
        console.error("Failed to load gateway config", n);
        return;
      }
      o.value = E.from(p);
    }
    return C(v), (n, p) => (c(), y(S, null, {
      default: t(() => [
        r("div", G, [
          r("div", H, [
            o.value ? (c(), y(a(V), { key: 0 }, {
              default: t(() => [
                s(a(L), null, {
                  default: t(() => [
                    s(a(z), null, {
                      default: t(() => [
                        u(d(o.value.name), 1)
                      ]),
                      _: 1
                    }),
                    s(a(D), null, {
                      default: t(() => [
                        u(d(o.value.gateway), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                s(a(M), { class: "flex flex-col" }, {
                  default: t(() => [
                    (c(), x($, null, k(f, (l) => s(j, {
                      key: l.label,
                      to: l.to,
                      variant: l.to === a(m).path ? "default" : "ghost",
                      class: "w-full justify-start"
                    }, {
                      default: t(() => [
                        u(d(l.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "variant"])), 64))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : w("", !0)
          ]),
          r("div", R, [
            o.value ? B(n.$slots, "default", { key: 0 }) : w("", !0)
          ])
        ])
      ]),
      _: 3
    }));
  }
});
export {
  q as default
};
