const { defineComponent: l } = await globalThis.importAsync("vue"), { createBlock: c } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { withCtx: u } = await globalThis.importAsync("vue"), { createVNode: m } = await globalThis.importAsync("vue"), { unref: t } = await globalThis.importAsync("vue"), { defineColumns: d } = await globalThis.importAsync("#client/components/DataTable.vue"), i = await globalThis.importAsync("#client/components/PageCrud.vue"), _ = i.default || i, a = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), p = a.default || a, o = await globalThis.importAsync("#shared/entities/user.entity.ts"), f = o.default || o, b = /* @__PURE__ */ l({
  __name: "index",
  setup(h) {
    const n = d([
      {
        id: "id",
        label: "ID",
        field: "id",
        width: 50
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "username",
        label: $t("Username"),
        field: "username"
      },
      {
        id: "email",
        label: "Email",
        field: "email"
      },
      { id: "actions" }
    ]);
    return (e, y) => (r(), c(p, null, {
      default: u(() => [
        m(_, {
          title: e.$t("Customers"),
          description: e.$t("View customer records here."),
          columns: t(n),
          serialize: (s) => t(f).from(s),
          actions: [],
          "view-to": "/admin/zpayments/users/:id",
          fetch: "/api/users"
        }, null, 8, ["title", "description", "columns", "serialize"])
      ]),
      _: 1
    }));
  }
});
export {
  b as default
};
