import { a as e, c as t, n, s as r, t as i } from "./dist-CuicyNAX.js";
const { cleanupNonNestedPath: a } = await globalThis.importAsync("vee-validate"), { isNotNestedPath: o } = await globalThis.importAsync("vee-validate");
//#region node_modules/@vee-validate/valibot/dist/vee-validate-valibot.mjs
var s = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function c(e) {
	return Number(e) >= 0;
}
function l(e) {
	return typeof e == "object" && !!e;
}
function u(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function d(e) {
	if (!l(e) || u(e) !== "[object Object]") return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function f(e, t) {
	return Object.keys(t).forEach((n) => {
		if (d(t[n]) && d(e[n])) {
			e[n] || (e[n] = {}), f(e[n], t[n]);
			return;
		}
		e[n] = t[n];
	}), e;
}
function p(e) {
	let t = e.split(".");
	if (!t.length) return "";
	let n = String(t[0]);
	for (let e = 1; e < t.length; e++) {
		if (c(t[e])) {
			n += `[${t[e]}]`;
			continue;
		}
		n += `.${t[e]}`;
	}
	return n;
}
function m(n, a) {
	return {
		__type: "VVTypedSchema",
		async parse(e) {
			let r = await t(n, e, a);
			if (r.success) return {
				value: r.output,
				errors: []
			};
			let i = {};
			return h(r.issues, i), { errors: Object.values(i) };
		},
		cast(t) {
			if (n.async) return t;
			let o = r(n, t, a);
			if (o.success) return o.output;
			let c = i(e(n));
			return s(c) && s(t) ? f(c, t) : t;
		},
		describe(e) {
			try {
				if (!e) return {
					required: !_(n),
					exists: !0
				};
				let t = g(e, n);
				return t ? {
					required: !_(t),
					exists: !0
				} : {
					required: !1,
					exists: !1
				};
			} catch {
				return {
					required: !1,
					exists: !1
				};
			}
		}
	};
}
function h(e, t) {
	e.forEach((e) => {
		let r = p(n(e) || "");
		e.issues && (h(e.issues.flatMap((e) => e.issues || []), t), !r) || (t[r] || (t[r] = {
			errors: [],
			path: r
		}), t[r].errors.push(e.message));
	});
}
function g(e, t) {
	if (b(t) || x(t)) return t.options.map((t) => g(e, t)).find(Boolean) ?? null;
	if (!y(t)) return null;
	if (o(e)) return t.entries[a(e)];
	let n = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean), r = t;
	for (let e = 0; e <= n.length; e++) {
		let t = n[e];
		if (!t || !r) return r;
		if (b(r) && (r = r.options.find((e) => y(e) && e.entries[t]) ?? r), x(r) && (r = r.options.find((e) => y(e) && e.entries[t]) ?? r), y(r)) {
			r = r.entries[t] || null;
			continue;
		}
		c(t) && v(r) && (r = r.item);
	}
	return null;
}
function _(e) {
	return e.type === "optional";
}
function v(e) {
	return s(e) && "item" in e;
}
function y(e) {
	return s(e) && "entries" in e;
}
function b(e) {
	return e.type === "intersect";
}
function x(e) {
	return e.type === "variant";
}
//#endregion
export { m as t };
