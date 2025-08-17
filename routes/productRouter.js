import express from "express";
import { createProduct, DeleteProduct, getProduct, UpdateProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProduct)
productRouter.delete("/:productId",DeleteProduct)
productRouter.put("/:productId",UpdateProduct)

export default productRouter;