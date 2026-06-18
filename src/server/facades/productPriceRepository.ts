import { database } from "@sidekick-coder/zenith-kit/server";
import ProductPriceRespotory from "../repositories/ProductPriceRepository.ts";

const productPriceRepository = new ProductPriceRespotory(database)

export default productPriceRepository
