import { a as e, i as t, l as n, o as r, r as i } from "./dist-CuicyNAX.js";
import { t as a } from "./ProductMetasTable-GIgk9Ho0.js";
import { t as o } from "./ProductPaymentsTable-CCDAihJx.js";
import { t as s } from "./ProductPricesTable-t19_jA_4.js";
import { t as c } from "./vee-validate-valibot-CeDj_Hww.js";
const { computed: l } = await globalThis.importAsync("vue"), { createBlock: ee } = await globalThis.importAsync("vue"), { createCommentVNode: u } = await globalThis.importAsync("vue"), { createElementBlock: d } = await globalThis.importAsync("vue"), { createElementVNode: f } = await globalThis.importAsync("vue"), { createTextVNode: p } = await globalThis.importAsync("vue"), { createVNode: m } = await globalThis.importAsync("vue"), { defineComponent: h } = await globalThis.importAsync("vue"), { onMounted: g } = await globalThis.importAsync("vue"), { openBlock: _ } = await globalThis.importAsync("vue"), { ref: v } = await globalThis.importAsync("vue"), { toDisplayString: y } = await globalThis.importAsync("vue"), { unref: b } = await globalThis.importAsync("vue"), { withCtx: x } = await globalThis.importAsync("vue"), { withModifiers: S } = await globalThis.importAsync("vue"), { useForm: C } = await globalThis.importAsync("vee-validate"), { toast: w } = await globalThis.importAsync("vue-sonner"), T = await globalThis.importAsync("#client/components/Button.vue"), E = T.default || T, { $fetch: D } = await globalThis.importAsync("#client/utils/fetcher.ts"), O = await globalThis.importAsync("#client/components/ui/card/Card.vue"), te = O.default || O, k = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), A = k.default || k, j = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), M = j.default || j, N = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), P = N.default || N, F = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), I = F.default || F, { useRoute: L } = await globalThis.importAsync("vue-router"), { useRouter: R } = await globalThis.importAsync("vue-router"), z = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), B = z.default || z, { TabsContent: V } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: H } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: U } = await globalThis.importAsync("#client/components/ui/tabs"), W = await globalThis.importAsync("#client/components/FormTextField.vue"), G = W.default || W, K = await globalThis.importAsync("#client/components/ui/card/CardFooter.vue"), q = K.default || K, J = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue"), Y = J.default || J, X = await globalThis.importAsync("#client/components/FormTextarea.vue"), Z = X.default || X, Q = await globalThis.importAsync("#client/components/TextField.vue"), $ = Q.default || Q;
//#region modules/mod/client/pages/admin/products/[id].vue?vue&type=script&setup=true&lang.ts
var ne = { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, re = { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, ie = { class: "flex-1 flex flex-col" }, ae = /* @__PURE__ */ h({
	__name: "[id]",
	setup(h) {
		let T = L(), O = R(), k = l(() => T.params.id), j = v(null), N = v(!1), { handleSubmit: F, setValues: z } = C({ validationSchema: c(t({
			name: r(n(), i(2, $t("Name is required"))),
			description: e(n())
		})) });
		async function W() {
			let [e, t] = await D.try(`/api/zpayments/products/${k.value}`, { method: "GET" });
			if (e) {
				console.error("Failed to load product:", k.value), console.error(e);
				return;
			}
			j.value = t, z({
				name: t.name,
				description: t.description || ""
			});
		}
		g(W);
		let K = l({
			get: () => T.query.tab || "prices",
			set: (e) => {
				O.replace({
					path: T.path,
					query: { tab: e }
				});
			}
		}), J = (e) => e ? new Intl.DateTimeFormat("pt-BR", {
			dateStyle: "short",
			timeStyle: "short"
		}).format(new Date(e)) : $t("N/A"), X = F(async (e) => {
			N.value = !0;
			let [t] = await D.try(`/api/zpayments/products/${k.value}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(e)
			});
			if (t) {
				console.error("Failed to save product:", t), w.error($t("Failed to update.")), N.value = !1;
				return;
			}
			w.success($t("Updated successfully.")), N.value = !1, await W();
		});
		return (e, t) => (_(), ee(B, null, {
			default: x(() => [f("div", ne, [f("div", re, [j.value ? (_(), d("form", {
				key: 0,
				onSubmit: t[0] ||= S((...e) => b(X) && b(X)(...e), ["prevent"])
			}, [m(te, null, {
				default: x(() => [
					m(A, null, {
						default: x(() => [m(M, null, {
							default: x(() => [p(y(e.$t("Product Details")), 1)]),
							_: 1
						}), m(P, null, {
							default: x(() => [p(y(e.$t("Edit product information")), 1)]),
							_: 1
						})]),
						_: 1
					}),
					m(I, { class: "space-y-6" }, {
						default: x(() => [
							m(G, {
								name: "name",
								label: e.$t("Name")
							}, null, 8, ["label"]),
							m(Z, {
								name: "description",
								label: e.$t("Description")
							}, null, 8, ["label"]),
							m($, {
								label: e.$t("Created At"),
								"model-value": J(j.value.created_at),
								readonly: ""
							}, null, 8, ["label", "model-value"]),
							m($, {
								label: e.$t("Updated At"),
								"model-value": J(j.value.updated_at),
								readonly: ""
							}, null, 8, ["label", "model-value"])
						]),
						_: 1
					}),
					m(q, { class: "flex justify-end" }, {
						default: x(() => [m(E, {
							type: "submit",
							loading: N.value
						}, {
							default: x(() => [p(y(e.$t("Update")), 1)]),
							_: 1
						}, 8, ["loading"])]),
						_: 1
					})
				]),
				_: 1
			})], 32)) : u("", !0)]), f("div", ie, [m(Y, {
				modelValue: K.value,
				"onUpdate:modelValue": t[1] ||= (e) => K.value = e,
				"default-value": "prices"
			}, {
				default: x(() => [
					m(b(H), null, {
						default: x(() => [
							m(b(U), { value: "prices" }, {
								default: x(() => [p(y(e.$t("Prices")), 1)]),
								_: 1
							}),
							m(b(U), { value: "metas" }, {
								default: x(() => [p(y(e.$t("Metas")), 1)]),
								_: 1
							}),
							m(b(U), { value: "payments" }, {
								default: x(() => [p(y(e.$t("Payments")), 1)]),
								_: 1
							})
						]),
						_: 1
					}),
					m(b(V), { value: "prices" }, {
						default: x(() => [m(s, { "product-id": k.value }, null, 8, ["product-id"])]),
						_: 1
					}),
					m(b(V), { value: "metas" }, {
						default: x(() => [m(a, { "product-id": k.value }, null, 8, ["product-id"])]),
						_: 1
					}),
					m(b(V), { value: "payments" }, {
						default: x(() => [m(o, { "product-id": k.value }, null, 8, ["product-id"])]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["modelValue"])])])]),
			_: 1
		}));
	}
});
//#endregion
export { ae as default };
