import { _ as A } from "./UserOrdersTable.vue_vue_type_script_setup_true_lang-BsCEXJnL.js";
const { defineComponent: f } = await globalThis.importAsync("vue"), { mergeModels: b } = await globalThis.importAsync("vue"), { ref: y } = await globalThis.importAsync("vue"), { useModel: T } = await globalThis.importAsync("vue"), { createBlock: _ } = await globalThis.importAsync("vue"), { openBlock: w } = await globalThis.importAsync("vue"), { unref: o } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { createTextVNode: c } = await globalThis.importAsync("vue"), { toDisplayString: r } = await globalThis.importAsync("vue"), { normalizeClass: C } = await globalThis.importAsync("vue"), { Card: h } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: v } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: x } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: B } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: k } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: I } = await globalThis.importAsync("#client/components/ui/card/index.ts"), d = await globalThis.importAsync("#client/components/Button.vue"), M = d.default || d, u = await globalThis.importAsync("#client/components/Icon.vue"), N = u.default || u, V = /* @__PURE__ */ f({
  __name: "UserOrdersCard",
  props: /* @__PURE__ */ b({
    userId: {
      type: Number,
      required: !0
    }
  }, {
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {}
  }),
  emits: ["update:loading"],
  setup(n) {
    const p = n, i = y(), a = T(n, "loading");
    function m() {
      return i.value?.load();
    }
    return (s, l) => (w(), _(o(h), null, {
      default: e(() => [
        t(o(v), null, {
          default: e(() => [
            t(o(x), null, {
              default: e(() => [
                c(r(s.$t("Orders")), 1)
              ]),
              _: 1
            }),
            t(o(B), null, {
              default: e(() => [
                c(r(s.$t("List of orders")), 1)
              ]),
              _: 1
            }),
            t(o(k), null, {
              default: e(() => [
                t(M, {
                  variant: "outline",
                  size: "icon",
                  disabled: a.value,
                  onClick: m
                }, {
                  default: e(() => [
                    t(N, {
                      name: "RotateCcw",
                      class: C({ "animate-spin": a.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(o(I), null, {
          default: e(() => [
            t(A, {
              ref_key: "tableRef",
              ref: i,
              loading: a.value,
              "onUpdate:loading": l[0] || (l[0] = (g) => a.value = g),
              "user-id": p.userId
            }, null, 8, ["loading", "user-id"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  V as _
};
