import "./gatewayEntity.entity-DWRIlNyc.js";
import { _ as A } from "./GatewayEntityTable.vue_vue_type_script_setup_true_lang-5KTG0kO9.js";
import { f as r } from "./format-8PJ5SmHp.js";
const { defineComponent: _ } = await globalThis.importAsync("vue"), { ref: i } = await globalThis.importAsync("vue"), { createBlock: f } = await globalThis.importAsync("vue"), { openBlock: b } = await globalThis.importAsync("vue"), { withCtx: e } = await globalThis.importAsync("vue"), { createElementVNode: g } = await globalThis.importAsync("vue"), { createVNode: a } = await globalThis.importAsync("vue"), { createTextVNode: n } = await globalThis.importAsync("vue"), { toDisplayString: s } = await globalThis.importAsync("vue"), { defineColumns: y } = await globalThis.importAsync("#client/components/DataTable.vue"), c = await globalThis.importAsync("#client/layouts/AppLayout.vue"), w = c.default || c;
await globalThis.importAsync("#client/components/Button.vue");
await globalThis.importAsync("#client/components/Icon.vue");
const d = await globalThis.importAsync("#client/components/PageTitle.vue"), T = d.default || d, p = await globalThis.importAsync("#client/components/PageSubtitle.vue"), h = p.default || p;
await globalThis.importAsync("#client/components/ObjectInspect.vue");
const v = { class: "flex flex-col mb-4" }, C = /* @__PURE__ */ _({
  __name: "index",
  setup(x) {
    const l = i(!1), u = i();
    return y([
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
        field: (t) => r(new Date(t.updated_at), "PP p"),
        width: 150
      },
      {
        id: "created_at",
        label: $t("Created At"),
        field: (t) => r(new Date(t.created_at), "PP p"),
        width: 150
      },
      {
        id: "actions",
        width: 150
      }
    ]), (t, o) => (b(), f(w, null, {
      default: e(() => [
        g("div", v, [
          a(T, null, {
            default: e(() => [
              n(s(t.$t("Entities")), 1)
            ]),
            _: 1
          }),
          a(h, null, {
            default: e(() => [
              n(s(t.$t("Data related to gateway")), 1)
            ]),
            _: 1
          })
        ]),
        a(A, {
          ref_key: "tableRef",
          ref: u,
          loading: l.value,
          "onUpdate:loading": o[0] || (o[0] = (m) => l.value = m)
        }, null, 8, ["loading"])
      ]),
      _: 1
    }));
  }
});
export {
  C as default
};
