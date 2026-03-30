import { t as e } from "./format-8zA-Gl6X.js";
import "./gatewayEntity.entity-BLW5x_M3.js";
import { t } from "./GatewayEntityTable-B6dX7I5k.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createElementVNode: r } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { defineComponent: o } = await globalThis.importAsync("vue"), { openBlock: s } = await globalThis.importAsync("vue"), { ref: c } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { withCtx: u } = await globalThis.importAsync("vue");
(await globalThis.importAsync("#client/components/Button.vue")).default, (await globalThis.importAsync("#client/components/Icon.vue")).default, (await globalThis.importAsync("#client/components/DataTable.vue")).default;
const { defineColumns: d } = await globalThis.importAsync("#client/components/DataTable.vue");
(await globalThis.importAsync("#client/components/ObjectInspect.vue")).default;
const f = await globalThis.importAsync("#client/components/PageTitle.vue"), p = f.default || f, m = await globalThis.importAsync("#client/components/PageSubtitle.vue"), h = m.default || m, g = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), _ = g.default || g;
//#region modules/mod/client/pages/admin/gateway-entities/index.vue?vue&type=script&setup=true&lang.ts
var v = { class: "flex flex-col mb-4" }, y = /* @__PURE__ */ o({
	__name: "index",
	setup(o) {
		let f = c(!1), m = c();
		return d([
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
				id: "type",
				label: $t("Type"),
				field: "type"
			},
			{
				id: "external_id",
				label: $t("External ID"),
				field: "external_id"
			},
			{
				id: "data",
				label: $t("Data")
			},
			{
				id: "updated_at",
				label: $t("Updated At"),
				field: (t) => e(new Date(t.updated_at), "PP p"),
				width: 150
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (t) => e(new Date(t.created_at), "PP p"),
				width: 150
			},
			{
				id: "actions",
				width: 150
			}
		]), (e, o) => (s(), n(_, null, {
			default: u(() => [r("div", v, [a(p, null, {
				default: u(() => [i(l(e.$t("Entities")), 1)]),
				_: 1
			}), a(h, null, {
				default: u(() => [i(l(e.$t("Data related to gateway")), 1)]),
				_: 1
			})]), a(t, {
				ref_key: "tableRef",
				ref: m,
				loading: f.value,
				"onUpdate:loading": o[0] ||= (e) => f.value = e
			}, null, 8, ["loading"])]),
			_: 1
		}));
	}
});
//#endregion
export { y as default };
