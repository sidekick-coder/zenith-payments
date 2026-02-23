import V from "./productMeta.entity-BGuejWQV.js";
import v from "./index-C5jCdUgN.js";
import { f as U } from "./format-8PJ5SmHp.js";
const { defineComponent: $ } = await globalThis.importAsync("vue"), { ref: c } = await globalThis.importAsync("vue"), { createBlock: D } = await globalThis.importAsync("vue"), { openBlock: F } = await globalThis.importAsync("vue"), { unref: a } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createVNode: t } = await globalThis.importAsync("vue"), { normalizeClass: z } = await globalThis.importAsync("vue"), { createTextVNode: B } = await globalThis.importAsync("vue"), { toDisplayString: I } = await globalThis.importAsync("vue"), { createElementVNode: x } = await globalThis.importAsync("vue");
await globalThis.importAsync("vue-sonner");
const f = await globalThis.importAsync("#client/components/DataTable.vue"), M = f.default || f, { defineColumns: N } = await globalThis.importAsync("#client/components/DataTable.vue"), h = await globalThis.importAsync("#client/components/Button.vue"), d = h.default || h, b = await globalThis.importAsync("#client/components/Icon.vue"), r = b.default || b, g = await globalThis.importAsync("#client/components/AlertButton.vue"), k = g.default || g, _ = await globalThis.importAsync("#client/components/DialogForm.vue"), y = _.default || _, { defineFormFields: P } = await globalThis.importAsync("#client/components/DialogForm.vue");
await globalThis.importAsync("#client/utils/fetcher.ts");
const { Card: S } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardHeader: E } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardAction: R } = await globalThis.importAsync("#client/components/ui/card/index.ts"), { CardContent: H } = await globalThis.importAsync("#client/components/ui/card/index.ts"), j = { class: "flex items-center gap-2 justify-end" }, K = /* @__PURE__ */ $({
  __name: "ProductMetasTable",
  props: {
    productId: {
      type: String,
      required: !0
    }
  },
  setup(l, { expose: w }) {
    const A = l, s = c(!1), u = c(), T = c([]), m = P({
      name: {
        component: "text-field",
        label: $t("Name")
      },
      value: {
        component: "textarea",
        label: $t("Value")
      }
    }), C = N([
      {
        id: "id",
        label: "ID",
        field: "id",
        width: 50
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "value",
        label: $t("Value"),
        field: "value"
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (o) => U(new Date(o.created_at), "PP p"),
        width: 150
      },
      {
        id: "actions",
        width: 200
      }
    ]);
    function n() {
      u.value?.load();
    }
    return w({
      load: n
    }), (o, p) => (F(), D(a(S), null, {
      default: e(() => [
        t(a(E), null, {
          default: e(() => [
            t(a(R), { class: "gap-x-2 flex" }, {
              default: e(() => [
                t(d, {
                  variant: "outline",
                  size: "icon",
                  disabled: s.value,
                  onClick: n
                }, {
                  default: e(() => [
                    t(r, {
                      name: "RotateCcw",
                      class: z({ "animate-spin": s.value })
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                t(y, {
                  fetch: `/api/zpayments/products/${l.productId}/metas`,
                  title: o.$t("Add Meta"),
                  description: o.$t("Fill in the details below to add a new meta"),
                  schema: a(v).productMeta.create,
                  fields: a(m),
                  onSubmit: n
                }, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        B(I(o.$t("Add Meta")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["fetch", "title", "description", "schema", "fields"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(a(H), null, {
          default: e(() => [
            t(M, {
              ref_key: "tableRef",
              ref: u,
              loading: s.value,
              "onUpdate:loading": p[0] || (p[0] = (i) => s.value = i),
              columns: a(C),
              serialize: (i) => a(V).from(i),
              fetch: `/api/zpayments/products/${l.productId}/metas`
            }, {
              "row-actions": e(({ row: i }) => [
                x("div", j, [
                  t(y, {
                    fetch: `/api/zpayments/products/${l.productId}/metas/${i.id}`,
                    title: o.$t("Edit Meta"),
                    description: o.$t("Fill in the details below to edit the meta"),
                    schema: a(v).productMeta.update,
                    fields: a(m),
                    values: i,
                    method: "PUT",
                    onSubmit: n
                  }, {
                    default: e(() => [
                      t(d, {
                        size: "icon",
                        variant: "ghost"
                      }, {
                        default: e(() => [
                          t(r, { name: "Edit" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["fetch", "title", "description", "schema", "fields", "values"]),
                  t(k, {
                    variant: "ghost",
                    title: o.$t("Delete Meta"),
                    description: o.$t("Are you sure you want to delete this meta?"),
                    loading: T.value.includes(i.id),
                    fetch: `/api/zpayments/products/${A.productId}/metas/${i.id}`,
                    onFetched: n
                  }, {
                    default: e(() => [
                      t(r, { name: "Trash" })
                    ]),
                    _: 1
                  }, 8, ["title", "description", "loading", "fetch"])
                ])
              ]),
              _: 1
            }, 8, ["loading", "columns", "serialize", "fetch"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  K as _
};
