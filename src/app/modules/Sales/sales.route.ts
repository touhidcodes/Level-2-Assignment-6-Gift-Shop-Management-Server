import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { SalesValidation } from "./sales.validation";
import { SalesControllers } from "./sales.controller";
import auth from "../../middlewares/auth";
import { userRoles } from "../User/user.interface";

const router = express.Router();
router.post(
  "/",
  auth("manager", "seller"),
  validateRequest(SalesValidation.SalesValidationSchema),
  SalesControllers.createSales
);
router.get(
  "/",
  auth(userRoles.manager, userRoles.seller),
  SalesControllers.getSales
);

export const SalesRoutes = router;
