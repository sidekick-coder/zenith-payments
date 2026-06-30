import { database } from "@sidekick-coder/zenith-kit/server";
import OrderItemRepository from "../repositories/OrderItemRepository.ts";

const orderItemRepository = new OrderItemRepository(database)

export default orderItemRepository
