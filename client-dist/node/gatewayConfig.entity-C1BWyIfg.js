import { t as __exportAll } from "./chunk-pbuEa-1d.js";
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
const { BaseEntity } = await globalThis.importAsync("#shared/mixins/baseEntity.mixin.ts");
//#region modules/mod/shared/entities/gatewayConfig.entity.ts
var gatewayConfig_entity_exports = /* @__PURE__ */ __exportAll({
	GATEWAY_OPTIONS: () => GATEWAY_OPTIONS,
	default: () => GatewayConfig
});
var GATEWAY_OPTIONS = [{
	id: "stripe",
	label: "Stripe",
	config_fields: { api_key: {
		component: "text-field",
		label: "API Key"
	} }
}, {
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
}];
var GatewayConfig = class GatewayConfig extends compose(BaseEntity) {
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
};
//#endregion
export { gatewayConfig_entity_exports as n, GatewayConfig as t };
