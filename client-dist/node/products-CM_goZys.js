const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const { defineFormFields } = await globalThis.importAsync("#client/components/DialogForm.vue");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
//#region modules/mod/client/pages/admin/products/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const fields = defineFormFields({ name: {
			component: "text-field",
			label: $t("Name")
		} });
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
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(PageCrud, {
						title: _ctx.$t("Products"),
						description: _ctx.$t("Manage your products here."),
						fields: unref(fields),
						columns: unref(columns),
						fetch: "/api/zpayments/products",
						"view-to": "/admin/zpayments/products/:id"
					}, null, _parent, _scopeId));
					else return [createVNode(PageCrud, {
						title: _ctx.$t("Products"),
						description: _ctx.$t("Manage your products here."),
						fields: unref(fields),
						columns: unref(columns),
						fetch: "/api/zpayments/products",
						"view-to": "/admin/zpayments/products/:id"
					}, null, 8, [
						"title",
						"description",
						"fields",
						"columns"
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/products/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/products/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { products_default as default };
