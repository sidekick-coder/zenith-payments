import K from "./index-C5jCdUgN.js";
import A from "./gatewayConfig.entity-DUywytzM.js";
const { defineComponent: x } = await globalThis.importAsync("vue"), { ref: m } = await globalThis.importAsync("vue"), { createBlock: z } = await globalThis.importAsync("vue"), { openBlock: B } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createElementVNode: i } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { toDisplayString: f } = await globalThis.importAsync("vue"), { normalizeClass: F } = await globalThis.importAsync("vue"), { unref: s } = await globalThis.importAsync("vue"), { createTextVNode: N } = await globalThis.importAsync("vue"), { toast: E } = await globalThis.importAsync("vue-sonner"), _ = await globalThis.importAsync("#client/components/DataTable.vue"), I = _.default || _, { defineColumns: k } = await globalThis.importAsync("#client/components/DataTable.vue"), y = await globalThis.importAsync("#client/layouts/AppLayout.vue"), V = y.default || y, { $fetch: O } = await globalThis.importAsync("#client/utils/fetcher.ts"), g = await globalThis.importAsync("#client/components/ClientOnly.vue"), G = g.default || g, b = await globalThis.importAsync("#client/components/Button.vue"), u = b.default || b, h = await globalThis.importAsync("#client/components/Icon.vue"), r = h.default || h, w = await globalThis.importAsync("#client/components/AlertButton.vue"), L = w.default || w, v = await globalThis.importAsync("#client/components/DialogForm.vue"), S = v.default || v, { defineFormFields: R } = await globalThis.importAsync("#client/components/DialogForm.vue"), j = { class: "flex" }, P = { class: "text-2xl font-bold mb-4 text-foreground flex-1" }, U = { class: "flex items-center gap-2" }, W = { class: "flex items-center gap-2 justify-end" }, M = /* @__PURE__ */ x({
  __name: "index",
  setup(Y) {
    const n = m(!1), c = m(), d = m([]), T = k([
      {
        id: "id",
        label: "ID",
        field: "id",
        width: 200
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "description",
        label: $t("Description"),
        field: "description"
      },
      { id: "actions" }
    ]), C = R({
      id: {
        component: "text-field",
        label: "ID"
      },
      gateway: {
        component: "select",
        label: $t("Gateway"),
        options: A.GATEWAY_OPTIONS,
        labelKey: "label",
        valueKey: "id"
      },
      name: {
        component: "text-field",
        label: $t("Name")
      },
      description: {
        component: "text-field",
        label: $t("Description")
      }
    });
    function p() {
      c.value?.load();
    }
    function D() {
      c.value?.reset();
    }
    async function $(o) {
      d.value.push(o);
      const [l] = await O.try(`/api/zpayments/gateways/${o}`, {
        method: "DELETE"
      });
      if (l) {
        d.value = [];
        return;
      }
      setTimeout(() => {
        E.success($t("Deleted successfully.")), D();
      }, 1e3);
    }
    return (o, l) => (B(), z(V, null, {
      default: e(() => [
        i("div", j, [
          i("h1", P, f(o.$t("Gateways")), 1),
          i("div", U, [
            t(u, {
              variant: "outline",
              size: "icon",
              disabled: n.value,
              onClick: p
            }, {
              default: e(() => [
                t(r, {
                  name: "RotateCcw",
                  class: F({ "animate-spin": n.value })
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["disabled"]),
            t(G, null, {
              default: e(() => [
                t(S, {
                  fetch: "/api/zpayments/gateways",
                  title: o.$t("Add new"),
                  description: o.$t("Fill in the details below to add a new gateway"),
                  schema: s(K).gateway.create,
                  fields: s(C),
                  onSubmit: p
                }, {
                  default: e(() => [
                    t(u, null, {
                      default: e(() => [
                        N(f(o.$t("Add new")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title", "description", "schema", "fields"])
              ]),
              _: 1
            })
          ])
        ]),
        t(I, {
          ref_key: "tableRef",
          ref: c,
          loading: n.value,
          "onUpdate:loading": l[0] || (l[0] = (a) => n.value = a),
          columns: s(T),
          serialize: (a) => s(A).from(a),
          fetch: "/api/zpayments/gateways"
        }, {
          "row-actions": e(({ row: a }) => [
            i("div", W, [
              t(u, {
                size: "icon",
                variant: "ghost",
                to: `/admin/zpayments/gateways/${a.id}`
              }, {
                default: e(() => [
                  t(r, { name: "Edit" })
                ]),
                _: 1
              }, 8, ["to"]),
              t(L, {
                variant: "ghost",
                size: "sm",
                loading: d.value.includes(a.id),
                onConfirm: (q) => $(a.id)
              }, {
                default: e(() => [
                  t(r, { name: "trash" })
                ]),
                _: 1
              }, 8, ["loading", "onConfirm"])
            ])
          ]),
          _: 1
        }, 8, ["loading", "columns", "serialize"])
      ]),
      _: 1
    }));
  }
});
export {
  M as default
};
