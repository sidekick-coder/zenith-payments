import m from "./payment.entity-DTIYwuVL.js";
const { defineComponent: v } = await globalThis.importAsync("vue"), { ref: w } = await globalThis.importAsync("vue"), { createBlock: A } = await globalThis.importAsync("vue"), { openBlock: T } = await globalThis.importAsync("vue"), { withCtx: l } = await globalThis.importAsync("vue"), { createVNode: o } = await globalThis.importAsync("vue"), { unref: n } = await globalThis.importAsync("vue"), { createTextVNode: c } = await globalThis.importAsync("vue"), { toDisplayString: d } = await globalThis.importAsync("vue"), { normalizeStyle: C } = await globalThis.importAsync("vue"), { createElementVNode: i } = await globalThis.importAsync("vue"), { defineColumns: $ } = await globalThis.importAsync("#client/components/DataTable.vue"), u = await globalThis.importAsync("#client/components/PageCrud.vue"), V = u.default || u, r = await globalThis.importAsync("#client/layouts/AdminLayout.vue"), S = r.default || r, { Badge: k } = await globalThis.importAsync("#client/components/ui/badge/index.ts"), p = await globalThis.importAsync("#client/components/Button.vue"), _ = p.default || p, y = await globalThis.importAsync("#client/components/Select.vue"), x = y.default || y, f = await globalThis.importAsync("#client/components/DatePicker.vue"), b = f.default || f, { Card: D } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: B } = await globalThis.importAsync("#client/components/ui/card/index.ts"), P = { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, z = { class: "flex flex-col gap-2" }, N = { class: "text-sm font-medium" }, L = { class: "flex flex-col gap-2" }, U = { class: "text-sm font-medium" }, E = { class: "flex items-end" }, I = /* @__PURE__ */ v({
  __name: "index",
  setup(q) {
    const g = $([
      {
        id: "id",
        label: $t("ID"),
        field: "id"
      },
      {
        id: "order_id",
        label: $t("Order"),
        field: (e) => `#${e.order_id}`
      },
      {
        id: "gateway_id",
        label: $t("Gateway ID"),
        field: "gateway_id"
      },
      {
        id: "status",
        label: $t("Status"),
        field: "status"
      },
      {
        id: "amount",
        label: $t("Amount"),
        field: "amount"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (e) => $dt(e.created_at)
      },
      { id: "actions" }
    ]), a = w({
      status: "",
      start_date: null,
      end_date: null
    });
    function h() {
      a.value.status = "", a.value.start_date = null, a.value.end_date = null;
    }
    return (e, s) => (T(), A(S, null, {
      default: l(() => [
        o(V, {
          title: e.$t("Payments"),
          description: e.$t("View payment records here."),
          columns: n(g),
          serialize: (t) => n(m).from(t),
          fetch: "/api/zpayments/payments",
          "fetch-query": a.value,
          actions: []
        }, {
          "header-append": l(() => [
            o(n(D), { class: "mb-4" }, {
              default: l(() => [
                o(n(B), { class: "pt-6" }, {
                  default: l(() => [
                    i("div", P, [
                      o(x, {
                        modelValue: a.value.status,
                        "onUpdate:modelValue": s[0] || (s[0] = (t) => a.value.status = t),
                        label: e.$t("Status"),
                        placeholder: e.$t("All"),
                        options: n(m).STATUS,
                        "label-key": "label",
                        "value-key": "id",
                        clearable: ""
                      }, null, 8, ["modelValue", "label", "placeholder", "options"]),
                      i("div", z, [
                        i("label", N, d(e.$t("Start Date")), 1),
                        o(b, {
                          modelValue: a.value.start_date,
                          "onUpdate:modelValue": s[1] || (s[1] = (t) => a.value.start_date = t),
                          mode: "datetime",
                          clearable: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      i("div", L, [
                        i("label", U, d(e.$t("End Date")), 1),
                        o(b, {
                          modelValue: a.value.end_date,
                          "onUpdate:modelValue": s[2] || (s[2] = (t) => a.value.end_date = t),
                          mode: "datetime",
                          clearable: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      i("div", E, [
                        o(_, {
                          variant: "outline",
                          onClick: h
                        }, {
                          default: l(() => [
                            c(d(e.$t("Clear Filters")), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          "row-status": l(({ row: t }) => [
            o(n(k), {
              style: C({ "--color": t.statusColor }),
              class: "bg-[var(--color)] text-white"
            }, {
              default: l(() => [
                c(d(t.statusLabel), 1)
              ]),
              _: 2
            }, 1032, ["style"])
          ]),
          "prepend-actions": l(({ row: t }) => [
            o(_, {
              size: "sm",
              tag: "a",
              href: `/api/zpayments/payments/${t.id}/process`,
              target: "_blank"
            }, {
              default: l(() => [
                c(d(e.$t("Process")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          _: 1
        }, 8, ["title", "description", "columns", "serialize", "fetch-query"])
      ]),
      _: 1
    }));
  }
});
export {
  I as default
};
