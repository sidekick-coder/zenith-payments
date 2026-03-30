const { createVNode } = await globalThis.importAsync("vue");
const { defineComponent } = await globalThis.importAsync("vue");
const { unref } = await globalThis.importAsync("vue");
const { useSSRContext } = await globalThis.importAsync("vue");
const { withCtx } = await globalThis.importAsync("vue");
const { ssrRenderComponent } = await globalThis.importAsync("vue/server-renderer");
import "date-fns";
const { defineColumns } = await globalThis.importAsync("#client/components/DataTable.vue");
const __module__AdminLayout__ = await globalThis.importAsync("#client/layouts/AdminLayout.vue");
const AdminLayout = __module__AdminLayout__.default || __module__AdminLayout__;
const __module__PageCrud__ = await globalThis.importAsync("#client/components/PageCrud.vue");
const PageCrud = __module__PageCrud__.default || __module__PageCrud__;
const __module__User__ = await globalThis.importAsync("#shared/entities/user.entity.ts");
const User = __module__User__.default || __module__User__;
//#region modules/mod/client/pages/admin/users/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const columns = defineColumns([
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(PageCrud, {
						title: _ctx.$t("Customers"),
						description: _ctx.$t("View customer records here."),
						columns: unref(columns),
						serialize: (row) => unref(User).from(row),
						actions: [],
						"view-to": "/admin/zpayments/users/:id",
						fetch: "/api/users"
					}, null, _parent, _scopeId));
					else return [createVNode(PageCrud, {
						title: _ctx.$t("Customers"),
						description: _ctx.$t("View customer records here."),
						columns: unref(columns),
						serialize: (row) => unref(User).from(row),
						actions: [],
						"view-to": "/admin/zpayments/users/:id",
						fetch: "/api/users"
					}, null, 8, [
						"title",
						"description",
						"columns",
						"serialize"
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region modules/mod/client/pages/admin/users/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/mod/client/pages/admin/users/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var users_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { users_default as default };
