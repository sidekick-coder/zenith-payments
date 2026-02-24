const { defineComponent } = await globalThis.importAsync("vue");
const { computed } = await globalThis.importAsync("vue");
const { mergeProps } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { createTextVNode } = await globalThis.importAsync("vue");
const { toDisplayString } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderAttrs } = await globalThis.importAsync("vue/server-renderer");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { ssrInterpolate } = await globalThis.importAsync("vue/server-renderer");
const { useRoute } = await globalThis.importAsync("vue-router");
const { useRouter } = await globalThis.importAsync("vue-router");
const { Card } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardHeader } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardTitle } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardDescription } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const { CardContent } = await globalThis.importAsync("#client/components/ui/card/index.ts");
const __module__Button__ = await globalThis.importAsync("#client/components/ui/button/Button.vue");
const Button = __module__Button__.default || __module__Button__;
const __module__Icon__ = await globalThis.importAsync("#client/components/Icon.vue");
const Icon = __module__Icon__.default || __module__Icon__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "result",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const result = computed(() => route.query.result || "unknown");
    const message = computed(() => route.query.message || "");
    const config = computed(() => {
      const resultType = result.value.toLowerCase();
      if (resultType === "approved") {
        return {
          icon: "CheckCircle",
          iconClass: "text-green-500",
          title: $t("Payment Successful"),
          description: $t("Your payment has been processed successfully.")
        };
      }
      if (resultType === "failed") {
        return {
          icon: "XCircle",
          iconClass: "text-red-500",
          title: $t("Payment Failed"),
          description: $t("Unfortunately, your payment could not be processed.")
        };
      }
      if (resultType === "pending") {
        return {
          icon: "Clock",
          iconClass: "text-yellow-500",
          title: $t("Payment Pending"),
          description: $t("Your payment is being processed. Please wait.")
        };
      }
      if (resultType === "cancelled") {
        return {
          icon: "Ban",
          iconClass: "text-orange-500",
          title: $t("Payment Cancelled"),
          description: $t("The payment was cancelled.")
        };
      }
      return {
        icon: "AlertCircle",
        iconClass: "text-gray-500",
        title: $t("Unknown Status"),
        description: $t("The payment status is unknown.")
      };
    });
    function goToHome() {
      router.push("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen items-center justify-center p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Card), { class: "w-full max-w-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CardHeader), { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Icon, {
                    name: config.value.icon,
                    class: ["h-8 w-8", config.value.iconClass]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(CardTitle), { class: "text-2xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(config.value.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(config.value.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CardDescription), { class: "text-base" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(message.value || config.value.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(message.value || config.value.description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary" }, [
                      createVNode(Icon, {
                        name: config.value.icon,
                        class: ["h-8 w-8", config.value.iconClass]
                      }, null, 8, ["name", "class"])
                    ]),
                    createVNode(unref(CardTitle), { class: "text-2xl" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(config.value.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CardDescription), { class: "text-base" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(message.value || config.value.description), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(CardContent), { class: "flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Button, {
                    variant: "default",
                    onClick: goToHome
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Icon, {
                          name: "Home",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(_ctx.$t("Go to Home"))}`);
                      } else {
                        return [
                          createVNode(Icon, {
                            name: "Home",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("Go to Home")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Button, {
                      variant: "default",
                      onClick: goToHome
                    }, {
                      default: withCtx(() => [
                        createVNode(Icon, {
                          name: "Home",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("Go to Home")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CardHeader), { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary" }, [
                    createVNode(Icon, {
                      name: config.value.icon,
                      class: ["h-8 w-8", config.value.iconClass]
                    }, null, 8, ["name", "class"])
                  ]),
                  createVNode(unref(CardTitle), { class: "text-2xl" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(config.value.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CardDescription), { class: "text-base" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(message.value || config.value.description), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(CardContent), { class: "flex justify-center" }, {
                default: withCtx(() => [
                  createVNode(Button, {
                    variant: "default",
                    onClick: goToHome
                  }, {
                    default: withCtx(() => [
                      createVNode(Icon, {
                        name: "Home",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("Go to Home")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
