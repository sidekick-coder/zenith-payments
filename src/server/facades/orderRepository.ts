import { database } from "@sidekick-coder/zenith-kit/server";
import OrderRepository from "../repositories/OrderRepository.ts";

const orderRepository = new OrderRepository(database)

export default orderRepository
