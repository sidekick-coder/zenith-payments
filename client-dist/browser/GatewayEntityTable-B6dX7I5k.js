import { t as e } from "./chunk-DmhlhrBa.js";
import { t } from "./format-8zA-Gl6X.js";
import { t as n } from "./gatewayEntity.entity-BLW5x_M3.js";
const { createBlock: r } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { defineComponent: o } = await globalThis.importAsync("vue"), { openBlock: s } = await globalThis.importAsync("vue"), { ref: c } = await globalThis.importAsync("vue"), { toDisplayString: l } = await globalThis.importAsync("vue"), { unref: u } = await globalThis.importAsync("vue"), { withCtx: d } = await globalThis.importAsync("vue"), f = await globalThis.importAsync("#client/components/Button.vue"), p = f.default || f, m = await globalThis.importAsync("#client/components/DataTable.vue"), h = m.default || m, { defineColumns: g } = await globalThis.importAsync("#client/components/DataTable.vue"), _ = await globalThis.importAsync("#client/components/ObjectInspect.vue"), v = _.default || _;
//#region modules/mod/client/components/GatewayEntityTable.vue?vue&type=script&setup=true&lang.ts
var y = /* @__PURE__ */ o({
	__name: "GatewayEntityTable",
	props: {
		gatewayId: {
			type: String,
			default: void 0
		},
		entityType: {
			type: String,
			default: void 0
		}
	},
	setup(e, { expose: o }) {
		let f = e, m = c(!1), _ = c(), y = c({
			gateway_id: f.gatewayId,
			type: f.entityType
		}), b = g([
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
				field: (e) => t(new Date(e.updated_at), "PP p"),
				width: 150
			},
			{
				id: "created_at",
				label: $t("Created At"),
				field: (e) => t(new Date(e.created_at), "PP p"),
				width: 150
			},
			{
				id: "actions",
				width: 150
			}
		]);
		function x() {
			_.value?.load();
		}
		return o({ load: x }), (e, t) => (s(), r(h, {
			ref_key: "tableRef",
			ref: _,
			loading: m.value,
			"onUpdate:loading": t[0] ||= (e) => m.value = e,
			columns: u(b),
			serialize: (e) => u(n).from(e),
			"fetch-query": y.value,
			fetch: "/api/zpayments/gateway-entities"
		}, {
			"row-actions": d(({ row: t }) => [a(v, {
				"model-value": t.raw,
				"content-class": "sm:max-w-[1200px]"
			}, {
				default: d(() => [a(p, { variant: "outline" }, {
					default: d(() => [i(l(e.$t("Data")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["model-value"])]),
			_: 1
		}, 8, [
			"loading",
			"columns",
			"serialize",
			"fetch-query"
		]));
	}
}), b = /* @__PURE__ */ e({ default: () => x }), x = y;
//#endregion
export { b as n, x as t };
