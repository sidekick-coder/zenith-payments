const { computed: e } = await globalThis.importAsync("vue"), { createElementBlock: t } = await globalThis.importAsync("vue"), { createElementVNode: n } = await globalThis.importAsync("vue"), { createTextVNode: r } = await globalThis.importAsync("vue"), { createVNode: i } = await globalThis.importAsync("vue"), { defineComponent: a } = await globalThis.importAsync("vue"), { normalizeClass: o } = await globalThis.importAsync("vue"), { openBlock: s } = await globalThis.importAsync("vue"), { toDisplayString: c } = await globalThis.importAsync("vue"), { unref: l } = await globalThis.importAsync("vue"), { withCtx: u } = await globalThis.importAsync("vue"), d = await globalThis.importAsync("#client/components/Icon.vue"), f = d.default || d, { Card: p } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: m } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardDescription: h } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: g } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardTitle: _ } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { useRoute: v } = await globalThis.importAsync("vue-router"), { useRouter: y } = await globalThis.importAsync("vue-router"), b = await globalThis.importAsync("#client/components/ui/button/Button.vue"), x = b.default || b;
//#region modules/mod/client/pages/result.vue?vue&type=script&setup=true&lang.ts
var S = { class: "flex min-h-screen items-center justify-center p-4" }, C = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary" }, w = /* @__PURE__ */ a({
	__name: "result",
	setup(a) {
		let d = v(), b = y(), w = e(() => d.query.result || "unknown"), T = e(() => d.query.message || ""), E = e(() => {
			let e = w.value.toLowerCase();
			return e === "approved" ? {
				icon: "CheckCircle",
				iconClass: "text-green-500",
				title: $t("Payment Successful"),
				description: $t("Your payment has been processed successfully.")
			} : e === "failed" ? {
				icon: "XCircle",
				iconClass: "text-red-500",
				title: $t("Payment Failed"),
				description: $t("Unfortunately, your payment could not be processed.")
			} : e === "pending" ? {
				icon: "Clock",
				iconClass: "text-yellow-500",
				title: $t("Payment Pending"),
				description: $t("Your payment is being processed. Please wait.")
			} : e === "cancelled" ? {
				icon: "Ban",
				iconClass: "text-orange-500",
				title: $t("Payment Cancelled"),
				description: $t("The payment was cancelled.")
			} : {
				icon: "AlertCircle",
				iconClass: "text-gray-500",
				title: $t("Unknown Status"),
				description: $t("The payment status is unknown.")
			};
		});
		function D() {
			b.push("/");
		}
		return (e, a) => (s(), t("div", S, [i(l(p), { class: "w-full max-w-md" }, {
			default: u(() => [i(l(g), { class: "text-center" }, {
				default: u(() => [
					n("div", C, [i(f, {
						name: E.value.icon,
						class: o(["h-8 w-8", E.value.iconClass])
					}, null, 8, ["name", "class"])]),
					i(l(_), { class: "text-2xl" }, {
						default: u(() => [r(c(E.value.title), 1)]),
						_: 1
					}),
					i(l(h), { class: "text-base" }, {
						default: u(() => [r(c(T.value || E.value.description), 1)]),
						_: 1
					})
				]),
				_: 1
			}), i(l(m), { class: "flex justify-center" }, {
				default: u(() => [i(x, {
					variant: "default",
					onClick: D
				}, {
					default: u(() => [i(f, {
						name: "Home",
						class: "mr-2 h-4 w-4"
					}), r(" " + c(e.$t("Go to Home")), 1)]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		})]));
	}
});
//#endregion
export { w as default };
