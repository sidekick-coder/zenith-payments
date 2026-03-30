import "./UserOrdersTable-DQxb9jfu.js";
import { t as e } from "./UserOrdersCard-qiHSRmLu.js";
import { t } from "./UserPaymentsTable-Ck-4E8XA.js";
const { computed: n } = await globalThis.importAsync("vue"), { createBlock: r } = await globalThis.importAsync("vue"), { createCommentVNode: i } = await globalThis.importAsync("vue"), { createElementVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: o } = await globalThis.importAsync("vue"), { createVNode: s } = await globalThis.importAsync("vue"), { defineComponent: c } = await globalThis.importAsync("vue"), { onMounted: l } = await globalThis.importAsync("vue"), { openBlock: u } = await globalThis.importAsync("vue"), { ref: d } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { unref: p } = await globalThis.importAsync("vue"), { withCtx: m } = await globalThis.importAsync("vue"), { useForm: h } = await globalThis.importAsync("vee-validate"), { toast: g } = await globalThis.importAsync("vue-sonner");
(await globalThis.importAsync("#client/components/Button.vue")).default;
const { $fetch: _ } = await globalThis.importAsync("#client/utils/fetcher.ts"), v = await globalThis.importAsync("#client/components/ui/card/Card.vue"), y = v.default || v, b = await globalThis.importAsync("#client/components/ui/card/CardHeader.vue"), x = b.default || b, S = await globalThis.importAsync("#client/components/ui/card/CardTitle.vue"), C = S.default || S, w = await globalThis.importAsync("#client/components/ui/card/CardDescription.vue"), T = w.default || w, E = await globalThis.importAsync("#client/components/ui/card/CardContent.vue"), D = E.default || E, { useRoute: O } = await globalThis.importAsync("vue-router"), { useRouter: k } = await globalThis.importAsync("vue-router"), A = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), j = A.default || A, { TabsContent: M } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsList: N } = await globalThis.importAsync("#client/components/ui/tabs"), { TabsTrigger: P } = await globalThis.importAsync("#client/components/ui/tabs");
(await globalThis.importAsync("#client/components/FormTextField.vue")).default, (await globalThis.importAsync("#client/components/ui/card/CardFooter.vue")).default;
const F = await globalThis.importAsync("#client/components/ui/tabs/Tabs.vue"), I = F.default || F;
(await globalThis.importAsync("#client/components/FormTextarea.vue")).default;
const L = await globalThis.importAsync("#client/components/TextField.vue"), R = L.default || L;
//#region modules/mod/client/pages/admin/users/[id].vue?vue&type=script&setup=true&lang.ts
var z = { class: "flex min-h-full w-full [&>*]:px-4 -mx-2" }, B = { class: "w-full lg:w-3/12 min-h-full rounded-none shadow-none gap-y-6 flex flex-col" }, V = { class: "flex-1 flex flex-col" }, H = /* @__PURE__ */ c({
	__name: "[id]",
	setup(c) {
		let h = O(), g = k(), v = n(() => h.params.id), b = d(null);
		d(!1);
		async function S() {
			let [e, t] = await _.try(`/api/users/${v.value}`, { method: "GET" });
			e || (b.value = t);
		}
		l(S);
		let w = n({
			get: () => h.query.tab || "orders",
			set: (e) => {
				g.replace({
					path: h.path,
					query: { tab: e }
				});
			}
		});
		return (n, c) => (u(), r(j, null, {
			default: m(() => [a("div", z, [a("div", B, [s(y, null, {
				default: m(() => [s(x, null, {
					default: m(() => [s(C, null, {
						default: m(() => [o(f(n.$t("Details")), 1)]),
						_: 1
					}), s(T, null, {
						default: m(() => [o(f(n.$t("Customer information")), 1)]),
						_: 1
					})]),
					_: 1
				}), s(D, { class: "space-y-6" }, {
					default: m(() => [
						s(R, {
							label: "ID",
							"model-value": b.value?.id,
							readonly: ""
						}, null, 8, ["model-value"]),
						s(R, {
							label: n.$t("Name"),
							"model-value": b.value?.name,
							readonly: ""
						}, null, 8, ["label", "model-value"]),
						s(R, {
							label: n.$t("Email"),
							"model-value": b.value?.email,
							readonly: ""
						}, null, 8, ["label", "model-value"])
					]),
					_: 1
				})]),
				_: 1
			})]), a("div", V, [b.value ? (u(), r(I, {
				key: 0,
				modelValue: w.value,
				"onUpdate:modelValue": c[0] ||= (e) => w.value = e
			}, {
				default: m(() => [
					s(p(N), null, {
						default: m(() => [s(p(P), { value: "orders" }, {
							default: m(() => [o(f(n.$t("Orders")), 1)]),
							_: 1
						}), s(p(P), { value: "payments" }, {
							default: m(() => [o(f(n.$t("Payments")), 1)]),
							_: 1
						})]),
						_: 1
					}),
					s(p(M), { value: "orders" }, {
						default: m(() => [s(e, { "user-id": b.value.id }, null, 8, ["user-id"])]),
						_: 1
					}),
					s(p(M), { value: "payments" }, {
						default: m(() => [s(t, { "user-id": b.value.id }, null, 8, ["user-id"])]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["modelValue"])) : i("", !0)])])]),
			_: 1
		}));
	}
});
//#endregion
export { H as default };
