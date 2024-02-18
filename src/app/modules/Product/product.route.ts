import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { userRoles } from "../User/user.interface";
import auth from "../../middlewares/auth";

const router = express.Router();
router.post(
  "/",
  auth(userRoles.manager, userRoles.superAdmin),
  validateRequest(ProductValidation.ProductValidationSchema),
  ProductControllers.createProduct
);
router.get(
  "/",
  auth(userRoles.manager, userRoles.superAdmin, userRoles.seller),
  ProductControllers.getProduct
);
router.get(
  "/:productId",
  auth(userRoles.manager, userRoles.superAdmin),
  ProductControllers.getSingleProduct
);
router.put(
  "/:productId",
  auth(userRoles.manager, userRoles.superAdmin),
  validateRequest(ProductValidation.UpdateProductValidationSchema),
  ProductControllers.updateProduct
);
router.delete(
  "/:productId",
  auth(userRoles.manager, userRoles.superAdmin),
  ProductControllers.deleteProduct
);
router.delete(
  "/",
  auth(userRoles.manager, userRoles.superAdmin),
  ProductControllers.deleteMultipleProduct
);

export const ProductRoutes = router;
