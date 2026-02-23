import { a as A, b as _, g as x, c as S, d as q } from "./index-BbS7PpO3.js";
const { isNotNestedPath: m } = await globalThis.importAsync("vee-validate"), { cleanupNonNestedPath: N } = await globalThis.importAsync("vee-validate");
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
const a = (t) => t !== null && !!t && typeof t == "object" && !Array.isArray(t);
function P(t) {
  return Number(t) >= 0;
}
function T(t) {
  return typeof t == "object" && t !== null;
}
function w(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
function y(t) {
  if (!T(t) || w(t) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(t) === null)
    return !0;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function j(t, e) {
  return Object.keys(e).forEach((r) => {
    if (y(e[r]) && y(t[r])) {
      t[r] || (t[r] = {}), j(t[r], e[r]);
      return;
    }
    t[r] = e[r];
  }), t;
}
function B(t) {
  const e = t.split(".");
  if (!e.length)
    return "";
  let r = String(e[0]);
  for (let n = 1; n < e.length; n++) {
    if (P(e[n])) {
      r += `[${e[n]}]`;
      continue;
    }
    r += `.${e[n]}`;
  }
  return r;
}
function D(t, e) {
  return {
    __type: "VVTypedSchema",
    async parse(n) {
      const i = await _(t, n, e);
      if (i.success)
        return {
          value: i.output,
          errors: []
        };
      const o = {};
      return g(i.issues, o), {
        errors: Object.values(o)
      };
    },
    cast(n) {
      if (t.async)
        return n;
      const i = A(t, n, e);
      if (i.success)
        return i.output;
      const o = S(q(t));
      return a(o) && a(n) ? j(o, n) : n;
    },
    describe(n) {
      try {
        if (!n)
          return {
            required: !O(t),
            exists: !0
          };
        const i = p(n, t);
        return i ? {
          required: !O(i),
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
function g(t, e) {
  t.forEach((r) => {
    const n = B(x(r) || "");
    r.issues && (g(r.issues.flatMap((i) => i.issues || []), e), !n) || (e[n] || (e[n] = { errors: [], path: n }), e[n].errors.push(r.message));
  });
}
function p(t, e) {
  var r, n, i, o;
  if (b(e))
    return (r = e.options.map((u) => p(t, u)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (h(e))
    return (n = e.options.map((u) => p(t, u)).find(Boolean)) !== null && n !== void 0 ? n : null;
  if (!l(e))
    return null;
  if (m(t))
    return e.entries[N(t)];
  const d = (t || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = e;
  for (let u = 0; u <= d.length; u++) {
    const f = d[u];
    if (!f || !s)
      return s;
    if (b(s) && (s = (i = s.options.find((c) => l(c) && c.entries[f])) !== null && i !== void 0 ? i : s), h(s) && (s = (o = s.options.find((c) => l(c) && c.entries[f])) !== null && o !== void 0 ? o : s), l(s)) {
      s = s.entries[f] || null;
      continue;
    }
    P(f) && I(s) && (s = s.item);
  }
  return null;
}
function O(t) {
  return t.type === "optional";
}
function I(t) {
  return a(t) && "item" in t;
}
function l(t) {
  return a(t) && "entries" in t;
}
function b(t) {
  return t.type === "intersect";
}
function h(t) {
  return t.type === "variant";
}
export {
  D as t
};
