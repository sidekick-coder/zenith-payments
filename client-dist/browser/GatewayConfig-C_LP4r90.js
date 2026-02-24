const { defineComponent: w } = await globalThis.importAsync("vue"), { ref: h } = await globalThis.importAsync("vue"), { watch: T } = await globalThis.importAsync("vue"), { createElementBlock: b } = await globalThis.importAsync("vue"), { openBlock: A } = await globalThis.importAsync("vue"), { withModifiers: v } = await globalThis.importAsync("vue"), { unref: a } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createTextVNode: s } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { useForm: C } = await globalThis.importAsync("vee-validate"), { toast: _ } = await globalThis.importAsync("vue-sonner"), { Card: F } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: B } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: S } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: V } = await globalThis.importAsync("#client/components/ui/card"), { CardFooter: k } = await globalThis.importAsync("#client/components/ui/card"), d = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), x = d.default || d, m = await globalThis.importAsync("#client/components/Button.vue"), D = m.default || m, { $fetch: N } = await globalThis.importAsync("#client/utils/fetcher.ts"), E = /* @__PURE__ */ w({
  __name: "GatewayConfig",
  props: {
    gateway: {}
  },
  setup(c) {
    const r = c, i = h(!1), { handleSubmit: p, setValues: f } = C();
    async function g(t) {
      i.value = !0;
      const [n] = await N.try(`/api/zpayments/gateways/${r.gateway.id}`, {
        method: "PUT",
        data: {
          config: t
        }
      });
      if (n) {
        i.value = !1;
        return;
      }
      setTimeout(() => {
        _.success($t("Updated successfully.")), i.value = !1;
      }, 500);
    }
    const u = p(g);
    return T(() => r.gateway, (t) => {
      t && f(t.config || {});
    }, { immediate: !0 }), (t, n) => (A(), b("form", {
      onSubmit: n[0] || (n[0] = v(
        //@ts-ignore
        (...y) => a(u) && a(u)(...y),
        ["prevent"]
      ))
    }, [
      o(a(F), null, {
        default: e(() => [
          o(a(B), null, {
            default: e(() => [
              o(a($), null, {
                default: e(() => [
                  s(l(t.$t("Gateway Configuration")), 1)
                ]),
                _: 1
              }),
              o(a(S), null, {
                default: e(() => [
                  s(l(t.$t("Edit gateway-specific configuration")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          o(a(V), { class: "space-y-4" }, {
            default: e(() => [
              o(x, {
                fields: c.gateway.configFields
              }, null, 8, ["fields"])
            ]),
            _: 1
          }),
          o(a(k), { class: "flex justify-end" }, {
            default: e(() => [
              o(D, {
                type: "submit",
                loading: i.value
              }, {
                default: e(() => [
                  s(l(t.$t("Save")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 32));
  }
});
export {
  E as default
};
