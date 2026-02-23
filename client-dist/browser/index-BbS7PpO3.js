var y;
// @__NO_SIDE_EFFECTS__
function v(e) {
  return {
    lang: e?.lang ?? y?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? y?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? y?.abortPipeEarly
  };
}
var b;
// @__NO_SIDE_EFFECTS__
function d(e) {
  return b?.get(e);
}
var h;
// @__NO_SIDE_EFFECTS__
function m(e) {
  return h?.get(e);
}
var k;
// @__NO_SIDE_EFFECTS__
function E(e, t) {
  return k?.get(e)?.get(t);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function p(e, t, n, s, r) {
  const u = r && "input" in r ? r.input : n.value, i = r?.expected ?? e.expects ?? null, o = r?.received ?? /* @__PURE__ */ P(u), a = {
    kind: e.kind,
    type: e.type,
    input: u,
    expected: i,
    received: o,
    message: `Invalid ${t}: ${i ? `Expected ${i} but r` : "R"}eceived ${o}`,
    requirement: e.requirement,
    path: r?.path,
    issues: r?.issues,
    lang: s.lang,
    abortEarly: s.abortEarly,
    abortPipeEarly: s.abortPipeEarly
  }, f = e.kind === "schema", l = r?.message ?? e.message ?? /* @__PURE__ */ E(e.reference, a.lang) ?? (f ? /* @__PURE__ */ m(a.lang) : null) ?? s.message ?? /* @__PURE__ */ d(a.lang);
  l !== void 0 && (a.message = typeof l == "function" ? (
    // @ts-expect-error
    l(a)
  ) : l), f && (n.typed = !1), n.issues ? n.issues.push(a) : n.issues = [a];
}
// @__NO_SIDE_EFFECTS__
function c(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ v());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function D(e) {
  if (e.path) {
    let t = "";
    for (const n of e.path)
      if (typeof n.key == "string" || typeof n.key == "number")
        t ? t += `.${n.key}` : t += n.key;
      else
        return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: $,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(n, s) {
      return n.typed && n.value.length < this.requirement && p(this, "length", n, s, {
        received: `${n.value.length}`
      }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function j(e, t, n) {
  return typeof e.fallback == "function" ? (
    // @ts-expect-error
    e.fallback(t, n)
  ) : (
    // @ts-expect-error
    e.fallback
  );
}
// @__NO_SIDE_EFFECTS__
function g(e, t, n) {
  return typeof e.default == "function" ? (
    // @ts-expect-error
    e.default(t, n)
  ) : (
    // @ts-expect-error
    e.default
  );
}
// @__NO_SIDE_EFFECTS__
function x(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: x,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ c(this);
    },
    "~run"(n, s) {
      const r = n.value;
      if (r && typeof r == "object") {
        n.typed = !0, n.value = {};
        for (const u in this.entries) {
          const i = this.entries[u];
          if (u in r || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && // @ts-expect-error
          i.default !== void 0) {
            const o = u in r ? (
              // @ts-expect-error
              r[u]
            ) : /* @__PURE__ */ g(i), a = i["~run"]({ value: o }, s);
            if (a.issues) {
              const f = {
                type: "object",
                origin: "value",
                input: r,
                key: u,
                value: o
              };
              for (const l of a.issues)
                l.path ? l.path.unshift(f) : l.path = [f], n.issues?.push(l);
              if (n.issues || (n.issues = a.issues), s.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            a.typed || (n.typed = !1), n.value[u] = a.value;
          } else if (i.fallback !== void 0)
            n.value[u] = /* @__PURE__ */ j(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (p(this, "key", n, s, {
            input: void 0,
            expected: `"${u}"`,
            path: [
              {
                type: "object",
                origin: "key",
                input: r,
                key: u,
                // @ts-expect-error
                value: r[u]
              }
            ]
          }), s.abortEarly))
            break;
        }
      } else
        p(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: _,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ c(this);
    },
    "~run"(n, s) {
      return n.value === void 0 && (this.default !== void 0 && (n.value = /* @__PURE__ */ g(this, n, s)), n.value === void 0) ? (n.typed = !0, n) : this.wrapped["~run"](n, s);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function S(e) {
  return {
    kind: "schema",
    type: "string",
    reference: S,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ c(this);
    },
    "~run"(t, n) {
      return typeof t.value == "string" ? t.typed = !0 : p(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function I(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ c(this);
    },
    "~run"(t, n) {
      for (const s of e)
        if (s.kind !== "metadata") {
          if (t.issues && (s.kind === "schema" || s.kind === "transformation")) {
            t.typed = !1;
            break;
          }
          (!t.issues || !n.abortEarly && !n.abortPipeEarly) && (t = s["~run"](t, n));
        }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function M(e, t, n) {
  const s = e["~run"]({ value: t }, /* @__PURE__ */ v(n));
  return {
    typed: s.typed,
    success: !s.issues,
    output: s.value,
    issues: s.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function O(e, t, n) {
  const s = await e["~run"](
    { value: t },
    /* @__PURE__ */ v(n)
  );
  return {
    typed: s.typed,
    success: !s.issues,
    output: s.value,
    issues: s.issues
  };
}
export {
  M as a,
  O as b,
  g as c,
  _ as d,
  D as g,
  $ as m,
  x as o,
  I as p,
  S as s
};
