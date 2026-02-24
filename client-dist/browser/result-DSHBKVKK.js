const { defineComponent: w } = await globalThis.importAsync("vue"), { computed: a } = await globalThis.importAsync("vue"), { createElementBlock: f } = await globalThis.importAsync("vue"), { openBlock: g } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { unref: o } = await globalThis.importAsync("vue"), { withCtx: n } = await globalThis.importAsync("vue"), { createElementVNode: C } = await globalThis.importAsync("vue"), { normalizeClass: _ } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { useRoute: T } = await globalThis.importAsync("vue-router"), { useRouter: b } = await globalThis.importAsync("vue-router"), { Card: v } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: x } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: A } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: $ } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: k } = await globalThis.importAsync("#client/components/ui/card/index.ts"), r = await globalThis.importAsync("#client/components/ui/button/Button.vue"), B = r.default || r, u = await globalThis.importAsync("#client/components/Icon.vue"), d = u.default || u, N = { class: "flex min-h-screen items-center justify-center p-4" }, P = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary" }, D = /* @__PURE__ */ w({
  __name: "result",
  setup(V) {
    const l = T(), m = b(), p = a(() => l.query.result || "unknown"), y = a(() => l.query.message || ""), s = a(() => {
      const e = p.value.toLowerCase();
      return e === "approved" ? {
        icon: "CheckCircle",
        iconClass: "text-green-500",
        title: $t("Payment Successful"),
        description: $t("Your payment has been processed successfully.")
      } : e === "failed" ? {
        icon: "XCircle",
        iconClass: "text-red-500",
        title: $t("Payment Failed"),
        description: $t("Unfortunately, your payment could not be processed.")
      } : e === "pending" ? {
        icon: "Clock",
        iconClass: "text-yellow-500",
        title: $t("Payment Pending"),
        description: $t("Your payment is being processed. Please wait.")
      } : e === "cancelled" ? {
        icon: "Ban",
        iconClass: "text-orange-500",
        title: $t("Payment Cancelled"),
        description: $t("The payment was cancelled.")
      } : {
        icon: "AlertCircle",
        iconClass: "text-gray-500",
        title: $t("Unknown Status"),
        description: $t("The payment status is unknown.")
      };
    });
    function h() {
      m.push("/");
    }
    return (e, H) => (g(), f("div", N, [
      t(o(v), { class: "w-full max-w-md" }, {
        default: n(() => [
          t(o(x), { class: "text-center" }, {
            default: n(() => [
              C("div", P, [
                t(d, {
                  name: s.value.icon,
                  class: _(["h-8 w-8", s.value.iconClass])
                }, null, 8, ["name", "class"])
              ]),
              t(o(A), { class: "text-2xl" }, {
                default: n(() => [
                  i(c(s.value.title), 1)
                ]),
                _: 1
              }),
              t(o($), { class: "text-base" }, {
                default: n(() => [
                  i(c(y.value || s.value.description), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          t(o(k), { class: "flex justify-center" }, {
            default: n(() => [
              t(B, {
                variant: "default",
                onClick: h
              }, {
                default: n(() => [
                  t(d, {
                    name: "Home",
                    class: "mr-2 h-4 w-4"
                  }),
                  i(" " + c(e.$t("Go to Home")), 1)
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
  D as default
};
