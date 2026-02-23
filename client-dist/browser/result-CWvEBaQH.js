const { defineComponent: w } = await globalThis.importAsync("vue"), { computed: i } = await globalThis.importAsync("vue"), { createElementBlock: f } = await globalThis.importAsync("vue"), { openBlock: C } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { unref: n } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createElementVNode: _ } = await globalThis.importAsync("vue"), { normalizeClass: T } = await globalThis.importAsync("vue"), { createTextVNode: c } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { useRoute: b } = await globalThis.importAsync("vue-router"), { useRouter: v } = await globalThis.importAsync("vue-router"), { $t: e } = await globalThis.importAsync("#shared/lang"), { Card: x } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: A } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: k } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: B } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: N } = await globalThis.importAsync("#client/components/ui/card/index.ts"), u = await globalThis.importAsync("#client/components/ui/button/Button.vue"), P = u.default || u, d = await globalThis.importAsync("#client/components/Icon.vue"), m = d.default || d, V = { class: "flex min-h-screen items-center justify-center p-4" }, H = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary" }, R = /* @__PURE__ */ w({
  __name: "result",
  setup(D) {
    const r = b(), p = v(), y = i(() => r.query.result || "unknown"), h = i(() => r.query.message || ""), a = i(() => {
      const s = y.value.toLowerCase();
      return s === "approved" ? {
        icon: "CheckCircle",
        iconClass: "text-green-500",
        title: e("Payment Successful"),
        description: e("Your payment has been processed successfully.")
      } : s === "failed" ? {
        icon: "XCircle",
        iconClass: "text-red-500",
        title: e("Payment Failed"),
        description: e("Unfortunately, your payment could not be processed.")
      } : s === "pending" ? {
        icon: "Clock",
        iconClass: "text-yellow-500",
        title: e("Payment Pending"),
        description: e("Your payment is being processed. Please wait.")
      } : s === "cancelled" ? {
        icon: "Ban",
        iconClass: "text-orange-500",
        title: e("Payment Cancelled"),
        description: e("The payment was cancelled.")
      } : {
        icon: "AlertCircle",
        iconClass: "text-gray-500",
        title: e("Unknown Status"),
        description: e("The payment status is unknown.")
      };
    });
    function g() {
      p.push("/");
    }
    return (s, E) => (C(), f("div", V, [
      t(n(x), { class: "w-full max-w-md" }, {
        default: o(() => [
          t(n(A), { class: "text-center" }, {
            default: o(() => [
              _("div", H, [
                t(m, {
                  name: a.value.icon,
                  class: T(["h-8 w-8", a.value.iconClass])
                }, null, 8, ["name", "class"])
              ]),
              t(n(k), { class: "text-2xl" }, {
                default: o(() => [
                  c(l(a.value.title), 1)
                ]),
                _: 1
              }),
              t(n(B), { class: "text-base" }, {
                default: o(() => [
                  c(l(h.value || a.value.description), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          t(n(N), { class: "flex justify-center" }, {
            default: o(() => [
              t(P, {
                variant: "default",
                onClick: g
              }, {
                default: o(() => [
                  t(m, {
                    name: "Home",
                    class: "mr-2 h-4 w-4"
                  }),
                  c(" " + l(n(e)("Go to Home")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
});
export {
  R as default
};
