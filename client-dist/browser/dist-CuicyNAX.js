//#region node_modules/valibot/dist/index.mjs
var e;
/* @__NO_SIDE_EFFECTS__ */
function t(t) {
	return {
		lang: t?.lang ?? e?.lang,
		message: t?.message,
		abortEarly: t?.abortEarly ?? e?.abortEarly,
		abortPipeEarly: t?.abortPipeEarly ?? e?.abortPipeEarly
	};
}
var n;
/* @__NO_SIDE_EFFECTS__ */
function r(e) {
	return n?.get(e);
}
var i;
/* @__NO_SIDE_EFFECTS__ */
function a(e) {
	return i?.get(e);
}
var o;
/* @__NO_SIDE_EFFECTS__ */
function s(e, t) {
	return o?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function c(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function l(e, t, n, i, o) {
	let l = o && "input" in o ? o.input : n.value, u = o?.expected ?? e.expects ?? null, d = o?.received ?? /* @__PURE__ */ c(l), f = {
		kind: e.kind,
		type: e.type,
		input: l,
		expected: u,
		received: d,
		message: `Invalid ${t}: ${u ? `Expected ${u} but r` : "R"}eceived ${d}`,
		requirement: e.requirement,
		path: o?.path,
		issues: o?.issues,
		lang: i.lang,
		abortEarly: i.abortEarly,
		abortPipeEarly: i.abortPipeEarly
	}, p = e.kind === "schema", m = o?.message ?? e.message ?? /* @__PURE__ */ s(e.reference, f.lang) ?? (p ? /* @__PURE__ */ a(f.lang) : null) ?? i.message ?? /* @__PURE__ */ r(f.lang);
	m !== void 0 && (f.message = typeof m == "function" ? m(f) : m), p && (n.typed = !1), n.issues ? n.issues.push(f) : n.issues = [f];
}
/* @__NO_SIDE_EFFECTS__ */
function u(e) {
	return {
		version: 1,
		vendor: "valibot",
		validate(n) {
			return e["~run"]({ value: n }, /* @__PURE__ */ t());
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function d(e) {
	if (e.path) {
		let t = "";
		for (let n of e.path) if (typeof n.key == "string" || typeof n.key == "number") t ? t += `.${n.key}` : t += n.key;
		else return null;
		return t;
	}
	return null;
}
/* @__NO_SIDE_EFFECTS__ */
function f(e, t) {
	return {
		kind: "validation",
		type: "min_length",
		reference: f,
		async: !1,
		expects: `>=${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && e.value.length < this.requirement && l(this, "length", e, t, { received: `${e.value.length}` }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function p(e, t, n) {
	return typeof e.fallback == "function" ? e.fallback(t, n) : e.fallback;
}
/* @__NO_SIDE_EFFECTS__ */
function m(e, t, n) {
	return typeof e.default == "function" ? e.default(t, n) : e.default;
}
/* @__NO_SIDE_EFFECTS__ */
function h(e, t) {
	return {
		kind: "schema",
		type: "object",
		reference: h,
		expects: "Object",
		async: !1,
		entries: e,
		message: t,
		get "~standard"() {
			return /* @__PURE__ */ u(this);
		},
		"~run"(e, t) {
			let n = e.value;
			if (n && typeof n == "object") {
				e.typed = !0, e.value = {};
				for (let r in this.entries) {
					let i = this.entries[r];
					if (r in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
						let a = r in n ? n[r] : /* @__PURE__ */ m(i), o = i["~run"]({ value: a }, t);
						if (o.issues) {
							let i = {
								type: "object",
								origin: "value",
								input: n,
								key: r,
								value: a
							};
							for (let t of o.issues) t.path ? t.path.unshift(i) : t.path = [i], e.issues?.push(t);
							if (e.issues ||= o.issues, t.abortEarly) {
								e.typed = !1;
								break;
							}
						}
						o.typed || (e.typed = !1), e.value[r] = o.value;
					} else if (i.fallback !== void 0) e.value[r] = /* @__PURE__ */ p(i);
					else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (l(this, "key", e, t, {
						input: void 0,
						expected: `"${r}"`,
						path: [{
							type: "object",
							origin: "key",
							input: n,
							key: r,
							value: n[r]
						}]
					}), t.abortEarly)) break;
				}
			} else l(this, "type", e, t);
			return e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function g(e, t) {
	return {
		kind: "schema",
		type: "optional",
		reference: g,
		expects: `(${e.expects} | undefined)`,
		async: !1,
		wrapped: e,
		default: t,
		get "~standard"() {
			return /* @__PURE__ */ u(this);
		},
		"~run"(e, t) {
			return e.value === void 0 && (this.default !== void 0 && (e.value = /* @__PURE__ */ m(this, e, t)), e.value === void 0) ? (e.typed = !0, e) : this.wrapped["~run"](e, t);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function _(e) {
	return {
		kind: "schema",
		type: "string",
		reference: _,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ u(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : l(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function v(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ u(this);
		},
		"~run"(t, n) {
			for (let r of e) if (r.kind !== "metadata") {
				if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
					t.typed = !1;
					break;
				}
				(!t.issues || !n.abortEarly && !n.abortPipeEarly) && (t = r["~run"](t, n));
			}
			return t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function y(e, n, r) {
	let i = e["~run"]({ value: n }, /* @__PURE__ */ t(r));
	return {
		typed: i.typed,
		success: !i.issues,
		output: i.value,
		issues: i.issues
	};
}
/* @__NO_SIDE_EFFECTS__ */
async function b(e, n, r) {
	let i = await e["~run"]({ value: n }, /* @__PURE__ */ t(r));
	return {
		typed: i.typed,
		success: !i.issues,
		output: i.value,
		issues: i.issues
	};
}
//#endregion
export { g as a, b as c, h as i, _ as l, d as n, v as o, f as r, y as s, m as t };
