const { BaseEntity: i } = await globalThis.importAsync("#shared/mixins/baseEntity.mixin.ts"), { compose: o } = await globalThis.importAsync("#shared/utils/compose.ts"), a = [
  {
    id: "stripe",
    label: "Stripe",
    config_fields: {
      api_key: {
        component: "text-field",
        label: "API Key"
      }
    }
  },
  {
    id: "mercadopago",
    label: "MercadoPago",
    config_fields: {
      public_key: {
        component: "text-field",
        label: "Public Key",
        type: "password"
      },
      access_token: {
        component: "text-field",
        label: "Access Token",
        type: "password"
      },
      back_url: {
        component: "text-field",
        label: "Callback URL",
        hint: "Used for tests with ngrok or similar services. Default APP_URL/api/zpayments/payments/:id/process"
      }
    }
  }
];
class t extends o(i) {
  static GATEWAY_OPTIONS = a;
  id;
  name;
  description;
  gateway;
  config;
  get configFields() {
    const e = t.GATEWAY_OPTIONS.find((s) => s.id === this.gateway);
    return e ? e.config_fields : {};
  }
}
export {
  a as GATEWAY_OPTIONS,
  t as default
};
