const { defineComponent } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { createVNode } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
const __module__AppLayout__ = await globalThis.importAsync("#client/layouts/AppLayout.vue");
const AppLayout = __module__AppLayout__.default || __module__AppLayout__;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = defineFormFields({
      name: {
        component: "text-field",
        label: $t("Name")
      }
    });
    const columns = defineColumns([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      { id: "actions" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PageCrud, {
              title: _ctx.$t("Products"),
              description: _ctx.$t("Manage your products here."),
              fields: unref(fields),
              columns: unref(columns),
              fetch: "/api/zpayments/products",
              "view-to": "/admin/zpayments/products/:id"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PageCrud, {
                title: _ctx.$t("Products"),
                description: _ctx.$t("Manage your products here."),
                fields: unref(fields),
                columns: unref(columns),
                fetch: "/api/zpayments/products",
                "view-to": "/admin/zpayments/products/:id"
              }, null, 8, ["title", "description", "fields", "columns"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
