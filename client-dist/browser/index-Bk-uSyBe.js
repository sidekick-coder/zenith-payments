const { defineComponent: l } = await globalThis.importAsync("vue"), { createBlock: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { withCtx: d } = await globalThis.importAsync("vue"), { createVNode: u } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { defineColumns: m } = await globalThis.importAsync("#client/components/DataTable.vue"), { defineFormFields: r } = await globalThis.importAsync("#client/components/DialogForm.vue"), o = await globalThis.importAsync("#client/components/PageCrud.vue"), p = o.default || o, n = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), f = n.default || n, g = /* @__PURE__ */ l({
  __name: "index",
  setup(_) {
    const i = r({
      name: {
        component: "text-field",
        label: $t("Name")
      }
    }), a = m([
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
    return (e, y) => (c(), s(f, null, {
      default: d(() => [
        u(p, {
          title: e.$t("Products"),
          description: e.$t("Manage your products here."),
          fields: t(i),
          columns: t(a),
          fetch: "/api/zpayments/products",
          "view-to": "/admin/zpayments/products/:id"
        }, null, 8, ["title", "description", "fields", "columns"])
      ]),
      _: 1
    }));
  }
});
export {
  g as default
};
