import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";

const router = express.Router();
router.post(
  "/",
  validateRequest(ProductValidation.ProductValidationSchema),
  ProductControllers.createProduct
);
router.get("/", ProductControllers.getProduct);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put(
  "/:productId",
  validateRequest(ProductValidation.UpdateProductValidationSchema),
  ProductControllers.updateProduct
);
router.delete("/:productId", ProductControllers.deleteProduct);
router.delete("/", ProductControllers.deleteMultipleProduct);

export const ProductRoutes = router;
