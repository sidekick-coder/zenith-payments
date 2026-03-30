const { BaseEntity: e } = await globalThis.importAsync("#shared/mixins/index.ts"), { compose: t } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/orderItem.entity.ts
var n = class extends t(e) {
	id;
	order_id;
	item_type;
	item_id;
	quantity;
	unit_amount;
	currency;
};
//#endregion
export { n as default };
