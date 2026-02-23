const { defineComponent: h } = await globalThis.importAsync("vue"), { ref: T } = await globalThis.importAsync("vue"), { watch: b } = await globalThis.importAsync("vue"), { createElementBlock: A } = await globalThis.importAsync("vue"), { openBlock: v } = await globalThis.importAsync("vue"), { withModifiers: C } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { useForm: _ } = await globalThis.importAsync("vee-validate"), { toast: F } = await globalThis.importAsync("vue-sonner"), { Card: x } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: B } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: S } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: V } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: $ } = await globalThis.importAsync("#client/components/ui/card"), { CardFooter: k } = await globalThis.importAsync("#client/components/ui/card"), m = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), D = m.default || m, p = await globalThis.importAsync("#client/components/Button.vue"), N = p.default || p, { $fetch: E } = await globalThis.importAsync("#client/utils/fetcher.ts"), { $t: s } = await globalThis.importAsync("#shared/lang"), L = /* @__PURE__ */ h({
  __name: "GatewayConfig",
  props: {
    gateway: {}
  },
  setup(r) {
    const u = r, i = T(!1), { handleSubmit: f, setValues: g } = _();
    async function y(e) {
      i.value = !0;
      const [n] = await E.try(`/api/zpayments/gateways/${u.gateway.id}`, {
        method: "PUT",
        data: {
          config: e
        }
      });
      if (n) {
        i.value = !1;
        return;
      }
      setTimeout(() => {
        F.success(s("Updated successfully.")), i.value = !1;
      }, 500);
    }
    const d = f(y);
    return b(() => u.gateway, (e) => {
      e && g(e.config || {});
    }, { immediate: !0 }), (e, n) => (v(), A("form", {
      onSubmit: n[0] || (n[0] = C(
        //@ts-ignore
        (...w) => t(d) && t(d)(...w),
        ["prevent"]
      ))
    }, [
      a(t(x), null, {
        default: o(() => [
          a(t(B), null, {
            default: o(() => [
              a(t(S), null, {
                default: o(() => [
                  l(c(t(s)("Gateway Configuration")), 1)
                ]),
                _: 1
              }),
              a(t(V), null, {
                default: o(() => [
                  l(c(t(s)("Edit gateway-specific configuration")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          a(t($), { class: "space-y-4" }, {
            default: o(() => [
              a(D, {
                fields: r.gateway.configFields
              }, null, 8, ["fields"])
            ]),
            _: 1
          }),
          a(t(k), { class: "flex justify-end" }, {
            default: o(() => [
              a(N, {
                type: "submit",
                loading: i.value
              }, {
                default: o(() => [
                  l(c(t(s)("Save")), 1)
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
  L as default
};
