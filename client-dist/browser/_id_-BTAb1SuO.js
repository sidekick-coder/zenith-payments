import { t as e } from "./validators-D3Fh_uJo.js";
import { t } from "./gatewayConfig.entity-CU54VVHj.js";
import { t as n } from "./vee-validate-valibot-CeDj_Hww.js";
const { Fragment: r } = await globalThis.importAsync("vue"), { computed: i } = await globalThis.importAsync("vue"), { createBlock: a } = await globalThis.importAsync("vue"), { createCommentVNode: o } = await globalThis.importAsync("vue"), { createElementBlock: s } = await globalThis.importAsync("vue"), { createElementVNode: c } = await globalThis.importAsync("vue"), { createTextVNode: l } = await globalThis.importAsync("vue"), { createVNode: u } = await globalThis.importAsync("vue"), { customRef: d } = await globalThis.importAsync("vue"), { defineAsyncComponent: f } = await globalThis.importAsync("vue"), { defineComponent: p } = await globalThis.importAsync("vue"), { getCurrentScope: m } = await globalThis.importAsync("vue"), { isRef: h } = await globalThis.importAsync("vue"), { nextTick: g } = await globalThis.importAsync("vue"), { onMounted: _ } = await globalThis.importAsync("vue"), { onScopeDispose: v } = await globalThis.importAsync("vue"), { openBlock: y } = await globalThis.importAsync("vue"), { ref: b } = await globalThis.importAsync("vue"), { renderList: x } = await globalThis.importAsync("vue"), { resolveDynamicComponent: S } = await globalThis.importAsync("vue"), { toDisplayString: C } = await globalThis.importAsync("vue"), { toValue: w } = await globalThis.importAsync("vue"), { unref: T } = await globalThis.importAsync("vue"), { watch: E } = await globalThis.importAsync("vue"), { withCtx: D } = await globalThis.importAsync("vue"), { withModifiers: O } = await globalThis.importAsync("vue"), { useForm: k } = await globalThis.importAsync("vee-validate"), { toast: A } = await globalThis.importAsync("vue-sonner"), { Card: j } = await globalThis.importAsync("#client/components/ui/card"), { CardContent: M } = await globalThis.importAsync("#client/components/ui/card"), { CardDescription: N } = await globalThis.importAsync("#client/components/ui/card"), { CardHeader: P } = await globalThis.importAsync("#client/components/ui/card"), { CardTitle: ee } = await globalThis.importAsync("#client/components/ui/card"), F = await globalThis.importAsync("#client/components/Button.vue"), I = F.default || F, { $fetch: L } = await globalThis.importAsync("#client/utils/fetcher.ts"), R = await globalThis.importAsync("#client/components/PageTitle.vue"), z = R.default || R, B = await globalThis.importAsync("#client/components/PageSubtitle.vue"), V = B.default || B, { useRoute: H } = await globalThis.importAsync("vue-router"), { useRouter: U } = await globalThis.importAsync("vue-router"), W = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), G = W.default || W, { Tabs: K } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsContent: q } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: J } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: Y } = await globalThis.importAsync("#client/components/ui/tabs"), { Skeleton: X } = await globalThis.importAsync("#client/components/ui/skeleton"), Z = await globalThis.importAsync("#client/components/FormTextField.vue"), Q = Z.default || Z, { tryCatch: te } = await globalThis.importAsync("#shared/utils/tryCatch.ts");
//#region node_modules/@vueuse/router/node_modules/@vueuse/shared/dist/index.js
function ne(e, t) {
	return m() ? (v(e, t), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var $ = /* @__PURE__ */ new WeakMap();
function re(e, t, n = {}) {
	let { mode: r = "replace", route: i = H(), router: a = U(), transform: o } = n, s = (e) => e, c = (e) => e;
	typeof o == "function" ? s = o : o && (o.get && (s = o.get), o.set && (c = o.set)), $.has(a) || $.set(a, /* @__PURE__ */ new Map());
	let l = $.get(a), u = i.query[e];
	ne(() => {
		u = void 0;
	});
	let f, p = d((n, o) => (f = o, {
		get() {
			return n(), s(u === void 0 ? w(t) : u);
		},
		set(n) {
			n = c(n), u !== n && (u = n === w(t) ? void 0 : n, l.set(e, n === w(t) ? void 0 : n), o(), g(() => {
				if (l.size === 0) return;
				let e = Object.fromEntries(l.entries());
				l.clear();
				let { params: t, query: n, hash: o } = i;
				a[w(r)]({
					params: t,
					query: {
						...n,
						...e
					},
					hash: o
				});
			}));
		}
	}));
	return E(() => i.query[e], (e) => {
		u !== s(e) && (u = e, f());
	}, { flush: "sync" }), p;
}
//#endregion
//#region modules/mod/client/pages/admin/gateways/[id].vue?vue&type=script&setup=true&lang.ts
var ie = {
	key: 0,
	class: "flex flex-col space-y-3"
}, ae = { class: "space-y-2" }, oe = {
	key: 1,
	class: "flex flex-wrap [&>*]:px-4 gap-y-4 -mx-4"
}, se = { class: "w-full flex items-center justify-between" }, ce = { class: "w-full xl:w-4/12 2xl:w-3/12 flex flex-col space-y-6" }, le = { class: "flex gap-3 pt-4 justify-end" }, ue = { class: "w-full xl:w-8/12 2xl:w-9/12 flex flex-col space-y-6" }, de = /* @__PURE__ */ p({
	__name: "[id]",
	setup(d) {
		let p = H(), m = i(() => p.params.id), g = b(), v = b(!0), w = b(!1), E = re("tab", "config"), F = [
			{
				id: "config",
				label: $t("Configuration"),
				component: f(() => import("./GatewayConfig-D1POPdPN.js"))
			},
			{
				id: "customers",
				label: $t("Customers"),
				component: f(() => import("./GatewayCustomers-C-nprIGT.js"))
			},
			{
				id: "subscriptions",
				label: $t("Subscriptions"),
				component: f(() => import("./GatewaySubscriptions-D0EtDuu7.js"))
			}
		], { handleSubmit: R, setValues: B } = k({ validationSchema: n(e.gateway.update) });
		async function U() {
			v.value = !0;
			let [e, n] = await te(() => L(`/api/zpayments/gateways/${m.value}`, { method: "GET" }));
			if (e) {
				console.error("Failed to load gateway:", e), v.value = !1;
				return;
			}
			g.value = t.from(n), B({
				name: n?.name || "",
				description: n?.description || ""
			}), setTimeout(() => {
				v.value = !1;
			}, 500);
		}
		let W = R(async (e) => {
			w.value = !0;
			let [t] = await L.try(`/api/zpayments/gateways/${m.value}`, {
				method: "PUT",
				data: e
			});
			if (t) {
				w.value = !1;
				return;
			}
			g.value && (g.value.name = e.name, g.value.description = e.description), setTimeout(() => {
				A.success($t("Updated successfully.")), w.value = !1;
			}, 500);
		});
		return _(U), (e, t) => (y(), a(G, { breadcrumbs: [{
			label: e.$t("Gateways"),
			to: "/admin/gateways"
		}, { label: g.value?.name || "..." }] }, {
			default: D(() => [v.value ? (y(), s("div", ie, [u(T(X), { class: "h-[125px] w- rounded-xl" }), c("div", ae, [u(T(X), { class: "h-4 w-[80%]" }), u(T(X), { class: "h-4 w-[60%]" })])])) : (y(), s("div", oe, [
				c("div", se, [c("div", null, [u(z, null, {
					default: D(() => [l(C(e.$t("Edit Gateway")), 1)]),
					_: 1
				}), u(V, null, {
					default: D(() => [l(C(e.$t("Update the gateway information below")), 1)]),
					_: 1
				})])]),
				c("div", ce, [g.value ? (y(), a(T(j), { key: 0 }, {
					default: D(() => [u(T(P), null, {
						default: D(() => [u(T(ee), null, {
							default: D(() => [l(C(e.$t("Details")), 1)]),
							_: 1
						}), u(T(N), null, {
							default: D(() => [l(C(e.$t("Gateway general information")), 1)]),
							_: 1
						})]),
						_: 1
					}), u(T(M), null, {
						default: D(() => [c("form", {
							class: "space-y-4 w-full",
							onSubmit: t[0] ||= O((...e) => T(W) && T(W)(...e), ["prevent"])
						}, [
							u(Q, {
								name: "name",
								label: e.$t("Name")
							}, null, 8, ["label"]),
							u(Q, {
								name: "description",
								label: e.$t("Description")
							}, null, 8, ["label"]),
							c("div", le, [u(I, {
								type: "submit",
								loading: w.value
							}, {
								default: D(() => [l(C(e.$t("Save")), 1)]),
								_: 1
							}, 8, ["loading"])])
						], 32)]),
						_: 1
					})]),
					_: 1
				})) : o("", !0)]),
				c("div", ue, [g.value ? (y(), a(T(K), {
					key: 0,
					modelValue: T(E),
					"onUpdate:modelValue": t[1] ||= (e) => h(E) ? E.value = e : null,
					class: "w-full"
				}, {
					default: D(() => [u(T(J), null, {
						default: D(() => [(y(), s(r, null, x(F, (e) => u(T(Y), {
							key: e.id,
							value: e.id
						}, {
							default: D(() => [l(C(e.label), 1)]),
							_: 2
						}, 1032, ["value"])), 64))]),
						_: 1
					}), (y(), s(r, null, x(F, (e) => u(T(q), {
						key: e.id,
						value: e.id
					}, {
						default: D(() => [(y(), a(S(e.component), { gateway: g.value }, null, 8, ["gateway"]))]),
						_: 2
					}, 1032, ["value"])), 64))]),
					_: 1
				}, 8, ["modelValue"])) : o("", !0)])
			]))]),
			_: 1
		}, 8, ["breadcrumbs"]));
	}
});
//#endregion
export { de as default };
