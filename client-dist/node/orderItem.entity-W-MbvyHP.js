const { BaseEntity } = await globalThis.importAsync("#shared/mixins/index.ts");
const { compose } = await globalThis.importAsync("#shared/utils/compose.ts");
//#region modules/mod/shared/entities/orderItem.entity.ts
var OrderItem = class extends compose(BaseEntity) {
	id;
	order_id;
	item_type;
	item_id;
	quantity;
	unit_amount;
	currency;
};
//#endregion
export { OrderItem as default };
