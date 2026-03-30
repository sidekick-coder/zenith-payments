const { createBlock: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { defineComponent: n } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { unref: i } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { defineColumns: o } = await globalThis.importAsync("#client/components/DataTable.vue"), s = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), c = s.default || s, l = await globalThis.importAsync("#client/components/PageCrud.vue"), u = l.default || l, d = await globalThis.importAsync("#shared/entities/user.entity.ts"), f = d.default || d;
//#endregion
//#region modules/mod/client/pages/admin/users/index.vue
var p = /* @__PURE__ */ n({
	__name: "index",
	setup(n) {
		let s = o([
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
		return (n, o) => (r(), e(c, null, {
			default: a(() => [t(u, {
				title: n.$t("Customers"),
				description: n.$t("View customer records here."),
				columns: i(s),
				serialize: (e) => i(f).from(e),
				actions: [],
				"view-to": "/admin/zpayments/users/:id",
				fetch: "/api/users"
			}, null, 8, [
				"title",
				"description",
				"columns",
				"serialize"
			])]),
			_: 1
		}));
	}
});
//#endregion
export { p as default };
