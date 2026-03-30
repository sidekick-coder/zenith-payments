const { createElementBlock: e } = await globalThis.importAsync("vue"), { createTextVNode: t } = await globalThis.importAsync("vue"), { createVNode: n } = await globalThis.importAsync("vue"), { defineComponent: r } = await globalThis.importAsync("vue"), { openBlock: i } = await globalThis.importAsync("vue"), { ref: a } = await globalThis.importAsync("vue"), { toDisplayString: o } = await globalThis.importAsync("vue"), { unref: s } = await globalThis.importAsync("vue"), { watch: c } = await globalThis.importAsync("vue"), { withCtx: l } = await globalThis.importAsync("vue"), { withModifiers: u } = await globalThis.importAsync("vue"), { useForm: d } = await globalThis.importAsync("vee-validate"), { toast: f } = await globalThis.importAsync("vue-sonner"), { Card: p } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: m } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: h } = await globalThis.importAsync("#client/components/ui/card"), { CardFooter: g } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: _ } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: v } = await globalThis.importAsync("#client/components/ui/card"), y = await globalThis.importAsync("#client/components/FormAutoFieldList.vue"), b = y.default || y, x = await globalThis.importAsync("#client/components/Button.vue"), S = x.default || x, { $fetch: C } = await globalThis.importAsync("#client/utils/fetcher.ts");
//#endregion
//#region modules/mod/client/components/GatewayConfig.vue
var w = /* @__PURE__ */ r({
	__name: "GatewayConfig",
	props: { gateway: {} },
	setup(r) {
		let y = r, x = a(!1), { handleSubmit: w, setValues: T } = d();
		async function E(e) {
			x.value = !0;
			let [t] = await C.try(`/api/zpayments/gateways/${y.gateway.id}`, {
				method: "PUT",
				data: { config: e }
			});
			if (t) {
				x.value = !1;
				return;
			}
			setTimeout(() => {
				f.success($t("Updated successfully.")), x.value = !1;
			}, 500);
		}
		let D = w(E);
		return c(() => y.gateway, (e) => {
			e && T(e.config || {});
		}, { immediate: !0 }), (a, c) => (i(), e("form", { onSubmit: c[0] ||= u((...e) => s(D) && s(D)(...e), ["prevent"]) }, [n(s(p), null, {
			default: l(() => [
				n(s(_), null, {
					default: l(() => [n(s(v), null, {
						default: l(() => [t(o(a.$t("Gateway Configuration")), 1)]),
						_: 1
					}), n(s(h), null, {
						default: l(() => [t(o(a.$t("Edit gateway-specific configuration")), 1)]),
						_: 1
					})]),
					_: 1
				}),
				n(s(m), { class: "space-y-4" }, {
					default: l(() => [n(b, { fields: r.gateway.configFields }, null, 8, ["fields"])]),
					_: 1
				}),
				n(s(g), { class: "flex justify-end" }, {
					default: l(() => [n(S, {
						type: "submit",
						loading: x.value
					}, {
						default: l(() => [t(o(a.$t("Save")), 1)]),
						_: 1
					}, 8, ["loading"])]),
					_: 1
				})
			]),
			_: 1
		})], 32));
	}
});
//#endregion
export { w as default };
