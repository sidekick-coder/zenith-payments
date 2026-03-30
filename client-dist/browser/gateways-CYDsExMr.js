import { t as e } from "./validators-D3Fh_uJo.js";
import { t } from "./gatewayConfig.entity-CU54VVHj.js";
const { createBlock: n } = await globalThis.importAsync("vue"), { createElementVNode: r } = await globalThis.importAsync("vue"), { createTextVNode: i } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { defineComponent: o } = await globalThis.importAsync("vue"), { normalizeClass: s } = await globalThis.importAsync("vue"), { openBlock: c } = await globalThis.importAsync("vue"), { ref: l } = await globalThis.importAsync("vue"), { toDisplayString: u } = await globalThis.importAsync("vue"), { unref: d } = await globalThis.importAsync("vue"), { withCtx: f } = await globalThis.importAsync("vue"), { toast: p } = await globalThis.importAsync("vue-sonner"), m = await globalThis.importAsync("#client/components/Button.vue"), h = m.default || m, { $fetch: g } = await globalThis.importAsync("#client/utils/fetcher.ts"), _ = await globalThis.importAsync("#client/components/Icon.vue"), v = _.default || _, y = await globalThis.importAsync("#client/components/DataTable.vue"), b = y.default || y, { defineColumns: x } = await globalThis.importAsync("#client/components/DataTable.vue"), S = await globalThis.importAsync("#client/components/DialogForm.vue"), C = S.default || S, { defineFormFields: w } = await globalThis.importAsync("#client/components/DialogForm.vue"), T = await globalThis.importAsync("#client/components/ClientOnly.vue"), E = T.default || T, D = await globalThis.importAsync("#client/components/AlertButton.vue"), O = D.default || D, k = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), A = k.default || k;
//#region modules/mod/client/pages/admin/gateways/index.vue?vue&type=script&setup=true&lang.ts
var j = { class: "flex" }, M = { class: "text-2xl font-bold mb-4 text-foreground flex-1" }, N = { class: "flex items-center gap-2" }, P = { class: "flex items-center gap-2 justify-end" }, F = /* @__PURE__ */ o({
	__name: "index",
	setup(o) {
		let m = l(!1), _ = l(), y = l([]), S = x([
			{
				id: "id",
				label: "ID",
				field: "id",
				width: 200
			},
			{
				id: "name",
				label: $t("Name"),
				field: "name"
			},
			{
				id: "description",
				label: $t("Description"),
				field: "description"
			},
			{ id: "actions" }
		]), T = w({
			id: {
				component: "text-field",
				label: "ID"
			},
			gateway: {
				component: "select",
				label: $t("Gateway"),
				options: t.GATEWAY_OPTIONS,
				labelKey: "label",
				valueKey: "id"
			},
			name: {
				component: "text-field",
				label: $t("Name")
			},
			description: {
				component: "text-field",
				label: $t("Description")
			}
		});
		function D() {
			_.value?.load();
		}
		function k() {
			_.value?.reset();
		}
		async function F(e) {
			y.value.push(e);
			let [t] = await g.try(`/api/zpayments/gateways/${e}`, { method: "DELETE" });
			if (t) {
				y.value = [];
				return;
			}
			setTimeout(() => {
				p.success($t("Deleted successfully.")), k();
			}, 1e3);
		}
		return (o, l) => (c(), n(A, null, {
			default: f(() => [r("div", j, [r("h1", M, u(o.$t("Gateways")), 1), r("div", N, [a(h, {
				variant: "outline",
				size: "icon",
				disabled: m.value,
				onClick: D
			}, {
				default: f(() => [a(v, {
					name: "RotateCcw",
					class: s({ "animate-spin": m.value })
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["disabled"]), a(E, null, {
				default: f(() => [a(C, {
					fetch: "/api/zpayments/gateways",
					title: o.$t("Add new"),
					description: o.$t("Fill in the details below to add a new gateway"),
					schema: d(e).gateway.create,
					fields: d(T),
					onSubmit: D
				}, {
					default: f(() => [a(h, null, {
						default: f(() => [i(u(o.$t("Add new")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, [
					"title",
					"description",
					"schema",
					"fields"
				])]),
				_: 1
			})])]), a(b, {
				ref_key: "tableRef",
				ref: _,
				loading: m.value,
				"onUpdate:loading": l[0] ||= (e) => m.value = e,
				columns: d(S),
				serialize: (e) => d(t).from(e),
				fetch: "/api/zpayments/gateways"
			}, {
				"row-actions": f(({ row: e }) => [r("div", P, [a(h, {
					size: "icon",
					variant: "ghost",
					to: `/admin/zpayments/gateways/${e.id}`
				}, {
					default: f(() => [a(v, { name: "Edit" })]),
					_: 1
				}, 8, ["to"]), a(O, {
					variant: "ghost",
					size: "sm",
					loading: y.value.includes(e.id),
					onConfirm: (t) => F(e.id)
				}, {
					default: f(() => [a(v, { name: "trash" })]),
					_: 1
				}, 8, ["loading", "onConfirm"])])]),
				_: 1
			}, 8, [
				"loading",
				"columns",
				"serialize"
			])]),
			_: 1
		}));
	}
});
//#endregion
export { F as default };
