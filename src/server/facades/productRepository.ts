import { database } from "@sidekick-coder/zenith-kit/server";
import ProductRespotory from "../repositories/ProductRepository.ts";

const productRepository = new ProductRespotory(database)

export default productRepository
