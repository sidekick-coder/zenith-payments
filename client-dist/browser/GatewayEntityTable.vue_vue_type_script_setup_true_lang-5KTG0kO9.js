import B from "./gatewayEntity.entity-DWRIlNyc.js";
import { f as m } from "./format-8PJ5SmHp.js";
const { defineComponent: g } = await globalThis.importAsync("vue"), { ref: a } = await globalThis.importAsync("vue"), { createBlock: T } = await globalThis.importAsync("vue"), { openBlock: v } = await globalThis.importAsync("vue"), { unref: c } = await globalThis.importAsync("vue"), { withCtx: o } = await globalThis.importAsync("vue"), { createVNode: d } = await globalThis.importAsync("vue"), { createTextVNode: h } = await globalThis.importAsync("vue"), { toDisplayString: A } = await globalThis.importAsync("vue"), r = await globalThis.importAsync("#client/components/DataTable.vue"), D = r.default || r, { defineColumns: x } = await globalThis.importAsync("#client/components/DataTable.vue"), p = await globalThis.importAsync("#client/components/ObjectInspect.vue"), C = p.default || p, u = await globalThis.importAsync("#client/components/Button.vue"), I = u.default || u, N = /* @__PURE__ */ g({
  __name: "GatewayEntityTable",
  props: {
    gatewayId: {
      type: String,
      default: void 0
    },
    entityType: {
      type: String,
      default: void 0
    }
  },
  setup(y, { expose: f }) {
    const n = y, i = a(!1), l = a(), _ = a({
      gateway_id: n.gatewayId,
      type: n.entityType
    }), b = x([
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
        id: "type",
        label: $t("Type"),
        field: "type"
      },
      {
        id: "external_id",
        label: $t("External ID"),
        field: "external_id"
      },
      {
        id: "data",
        label: $t("Data")
      },
      {
        id: "updated_at",
        label: $t("Updated At"),
        field: (t) => m(new Date(t.updated_at), "PP p"),
        width: 150
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (t) => m(new Date(t.created_at), "PP p"),
        width: 150
      },
      {
        id: "actions",
        width: 150
      }
    ]);
    function w() {
      l.value?.load();
    }
    return f({
      load: w
    }), (t, s) => (v(), T(D, {
      ref_key: "tableRef",
      ref: l,
      loading: i.value,
      "onUpdate:loading": s[0] || (s[0] = (e) => i.value = e),
      columns: c(b),
      serialize: (e) => c(B).from(e),
      "fetch-query": _.value,
      fetch: "/api/zpayments/gateway-entities"
    }, {
      "row-actions": o(({ row: e }) => [
        d(C, {
          "model-value": e.raw,
          "content-class": "sm:max-w-[1200px]"
        }, {
          default: o(() => [
            d(I, { variant: "outline" }, {
              default: o(() => [
                h(A(t.$t("Data")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model-value"])
      ]),
      _: 1
    }, 8, ["loading", "columns", "serialize", "fetch-query"]));
  }
});
export {
  N as _
};
