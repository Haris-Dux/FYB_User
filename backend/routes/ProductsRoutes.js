import express from "express";
import {
  getLatestPRoducts,
  getProductById,
  getProducts,
} from "../controllers/ProductsController.js";

const productRouter = express.Router();

productRouter.post("/products/getLatestPRoducts", getLatestPRoducts);
productRouter.post("/products/getProducts", getProducts);
productRouter.post("/products/getProductById", getProductById);

export default productRouter;
