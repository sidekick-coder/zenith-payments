import S from "./gatewayConfig.entity-DUywytzM.js";
const { defineComponent: v } = await globalThis.importAsync("vue"), { computed: T } = await globalThis.importAsync("vue"), { useModel: _ } = await globalThis.importAsync("vue"), { onMounted: A } = await globalThis.importAsync("vue"), { createBlock: p } = await globalThis.importAsync("vue"), { openBlock: i } = await globalThis.importAsync("vue"), { withCtx: t } = await globalThis.importAsync("vue"), { createElementVNode: c } = await globalThis.importAsync("vue"), { createCommentVNode: y } = await globalThis.importAsync("vue"), { unref: a } = await globalThis.importAsync("vue"), { createVNode: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { createElementBlock: C } = await globalThis.importAsync("vue"), { Fragment: x } = await globalThis.importAsync("vue"), { renderList: $ } = await globalThis.importAsync("vue"), { renderSlot: k } = await globalThis.importAsync("vue"), { useRoute: B } = await globalThis.importAsync("vue-router"), { Card: N } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: V } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: L } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: z } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: D } = await globalThis.importAsync("#client/components/ui/card"), w = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), M = w.default || w, { $fetch: E } = await globalThis.importAsync("#client/utils"), g = await globalThis.importAsync("#client/components/Button.vue"), F = g.default || g, j = { class: "flex [&>*]:px-4 -mx-4" }, G = { class: "w-full md:w-6/12 lg:w-4/12 xl:w-3/12" }, H = { class: "w-full md:w-6/12 lg:w-8/12 xl:w-9/12" }, O = /* @__PURE__ */ v({
  __name: "GatewayLayout",
  props: {
    gateway: {
      type: Object
    },
    gatewayModifiers: {}
  },
  emits: ["update:gateway"],
  setup(h) {
    const d = B(), e = T(() => d.params.id), o = _(h, "gateway"), b = [
      {
        label: $t("Details"),
        to: `/admin/zpayments/gateways/${e.value}/details`
      },
      {
        label: $t("Subscriptions"),
        to: `/admin/zpayments/gateways/${e.value}/subscriptions`
      },
      {
        label: $t("Customers"),
        to: `/admin/zpayments/gateways/${e.value}/customers`
      },
      {
        label: $t("Configuration"),
        to: `/admin/zpayments/gateways/${e.value}/config`
      }
    ];
    async function f() {
      const [s, m] = await E.try(`/api/zpayments/gateways/${e.value}`);
      if (s) {
        console.error("Failed to load gateway config", s);
        return;
      }
      o.value = S.from(m);
    }
    return A(f), (s, m) => (i(), p(M, null, {
      default: t(() => [
        c("div", j, [
          c("div", G, [
            o.value ? (i(), p(a(N), { key: 0 }, {
              default: t(() => [
                n(a(V), null, {
                  default: t(() => [
                    n(a(L), null, {
                      default: t(() => [
                        r(u(o.value.name), 1)
                      ]),
                      _: 1
                    }),
                    n(a(z), null, {
                      default: t(() => [
                        r(u(o.value.gateway), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                n(a(D), { class: "flex flex-col" }, {
                  default: t(() => [
                    (i(), C(x, null, $(b, (l) => n(F, {
                      key: l.label,
                      to: l.to,
                      variant: l.to === a(d).path ? "default" : "ghost",
                      class: "w-full justify-start"
                    }, {
                      default: t(() => [
                        r(u(l.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "variant"])), 64))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0)
          ]),
          c("div", H, [
            o.value ? k(s.$slots, "default", { key: 0 }) : y("", !0)
          ])
        ])
      ]),
      _: 3
    }));
  }
});
export {
  O as default
};
