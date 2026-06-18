import { database } from "@sidekick-coder/zenith-kit/server";
import ProductMetaRespotory from "../repositories/ProductMetaRepository.ts";

const productMetaRepository = new ProductMetaRespotory(database)

export default productMetaRepository
