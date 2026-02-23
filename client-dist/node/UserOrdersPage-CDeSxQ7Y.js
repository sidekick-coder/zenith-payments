const { defineComponent } = await globalThis.importAsync("vue");
const { mergeModels } = await globalThis.importAsync("vue");
const { ref } = await globalThis.importAsync("vue");
const { useModel } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
import _sfc_main$1 from "./UserOrdersTable-Cj_ZwdT1.js";
await globalThis.importAsync("#client/components/ui/card/index.ts");
const __module__Button__ = await globalThis.importAsync("#client/components/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const __module__PageTitle__ = await globalThis.importAsync("#client/components/PageTitle.vue");
const PageTitle = __module__PageTitle__.default || __module__PageTitle__;
const __module__PageSubtitle__ = await globalThis.importAsync("#client/components/PageSubtitle.vue");
const PageSubtitle = __module__PageSubtitle__.default || __module__PageSubtitle__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserOrdersPage",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    userId: {
      type: Number,
      required: true
    }
  }, {
    "loading": {
      type: Boolean,
      default: false
    },
    "loadingModifiers": {}
  }),
  emits: ["update:loading"],
  setup(__props) {
    const props = __props;
    const tableRef = ref();
    const loading = useModel(__props, "loading");
    function load() {
      return tableRef.value?.load();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6" }, _attrs))}><div class="flex items-center"><div class="flex-1">`);
      _push(ssrRenderComponent(PageTitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Orders"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Orders")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PageSubtitle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("List of orders"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("List of orders")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(Button, {
        variant: "outline",
        size: "icon",
        disabled: loading.value,
        onClick: load
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "RotateCcw",
              class: { "animate-spin": loading.value }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Icon, {
                name: "RotateCcw",
                class: { "animate-spin": loading.value }
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        ref_key: "tableRef",
        ref: tableRef,
        loading: loading.value,
        "onUpdate:loading": ($event) => loading.value = $event,
        "user-id": props.userId
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/components/UserOrdersPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
