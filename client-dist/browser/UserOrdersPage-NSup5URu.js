import { _ as x } from "./UserOrdersTable.vue_vue_type_script_setup_true_lang-BsCEXJnL.js";
const { defineComponent: v } = await globalThis.importAsync("vue"), { mergeModels: b } = await globalThis.importAsync("vue"), { ref: y } = await globalThis.importAsync("vue"), { useModel: T } = await globalThis.importAsync("vue"), { createElementBlock: h } = await globalThis.importAsync("vue"), { openBlock: w } = await globalThis.importAsync("vue"), { createElementVNode: o } = await globalThis.importAsync("vue"), { createVNode: e } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { createTextVNode: c } = await globalThis.importAsync("vue"), { toDisplayString: r } = await globalThis.importAsync("vue"), { normalizeClass: A } = await globalThis.importAsync("vue");
await globalThis.importAsync("#client/components/ui/card/index.ts");
const u = await globalThis.importAsync("#client/components/Button.vue"), B = u.default || u, d = await globalThis.importAsync("#client/components/Icon.vue"), C = d.default || d, m = await globalThis.importAsync("#client/components/PageTitle.vue"), N = m.default || m, p = await globalThis.importAsync("#client/components/PageSubtitle.vue"), P = p.default || p, k = { class: "flex flex-col gap-6" }, V = { class: "flex items-center" }, I = { class: "flex-1" }, S = /* @__PURE__ */ v({
  __name: "UserOrdersPage",
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
  setup(l) {
    const g = l, n = y(), t = T(l, "loading");
    function _() {
      return n.value?.load();
    }
    return (s, i) => (w(), h("div", k, [
      o("div", V, [
        o("div", I, [
          e(N, null, {
            default: a(() => [
              c(r(s.$t("Orders")), 1)
            ]),
            _: 1
          }),
          e(P, null, {
            default: a(() => [
              c(r(s.$t("List of orders")), 1)
            ]),
            _: 1
          })
        ]),
        o("div", null, [
          e(B, {
            variant: "outline",
            size: "icon",
            disabled: t.value,
            onClick: _
          }, {
            default: a(() => [
              e(C, {
                name: "RotateCcw",
                class: A({ "animate-spin": t.value })
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      e(x, {
        ref_key: "tableRef",
        ref: n,
        loading: t.value,
        "onUpdate:loading": i[0] || (i[0] = (f) => t.value = f),
        "user-id": g.userId
      }, null, 8, ["loading", "user-id"])
    ]));
  }
});
export {
  S as default
};
