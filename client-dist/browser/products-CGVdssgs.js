const { createBlock: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { defineComponent: n } = await globalThis.importAsync("vue"), { openBlock: r } = await globalThis.importAsync("vue"), { unref: i } = await globalThis.importAsync("vue"), { withCtx: a } = await globalThis.importAsync("vue"), { defineColumns: o } = await globalThis.importAsync("#client/components/DataTable.vue"), { defineFormFields: s } = await globalThis.importAsync("#client/components/DialogForm.vue"), c = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), l = c.default || c, u = await globalThis.importAsync("#client/components/PageCrud.vue"), d = u.default || u;
//#endregion
//#region modules/mod/client/pages/admin/products/index.vue
var f = /* @__PURE__ */ n({
	__name: "index",
	setup(n) {
		let c = s({ name: {
			component: "text-field",
			label: $t("Name")
		} }), u = o([
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
		return (n, o) => (r(), e(l, null, {
			default: a(() => [t(d, {
				title: n.$t("Products"),
				description: n.$t("Manage your products here."),
				fields: i(c),
				columns: i(u),
				fetch: "/api/zpayments/products",
				"view-to": "/admin/zpayments/products/:id"
			}, null, 8, [
				"title",
				"description",
				"fields",
				"columns"
			])]),
			_: 1
		}));
	}
});
//#endregion
export { f as default };
