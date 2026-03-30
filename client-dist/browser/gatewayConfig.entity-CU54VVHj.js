import { t as e } from "./chunk-DmhlhrBa.js";
const { compose: t } = await globalThis.importAsync("#shared/utils/compose.ts"), { BaseEntity: n } = await globalThis.importAsync("#shared/mixins/baseEntity.mixin.ts");
//#region modules/mod/shared/entities/gatewayConfig.entity.ts
var r = /* @__PURE__ */ e({
	GATEWAY_OPTIONS: () => i,
	default: () => a
}), i = [{
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
}], a = class e extends t(n) {
	static GATEWAY_OPTIONS = i;
	id;
	name;
	description;
	gateway;
	config;
	get configFields() {
		let t = e.GATEWAY_OPTIONS.find((e) => e.id === this.gateway);
		return t ? t.config_fields : {};
	}
};
//#endregion
export { r as n, a as t };
