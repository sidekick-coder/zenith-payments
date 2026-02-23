const { BaseEntity } = await globalThis.importAsync("#shared/mixins/baseEntity.mixin.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
const GATEWAY_OPTIONS = [
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
class GatewayConfig extends compose(BaseEntity) {
  static GATEWAY_OPTIONS = GATEWAY_OPTIONS;
  id;
  name;
  description;
  gateway;
  config;
  get configFields() {
    const option = GatewayConfig.GATEWAY_OPTIONS.find((o) => o.id === this.gateway);
    return option ? option.config_fields : {};
  }
}
export {
  GATEWAY_OPTIONS,
  GatewayConfig as default
};
