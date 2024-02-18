import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { SalesValidation } from "./sales.validation";
import { SalesControllers } from "./sales.controller";
import auth from "../../middlewares/auth";
import { userRoles } from "../User/user.interface";

const router = express.Router();
router.post(
  "/",
  auth(userRoles.manager, userRoles.seller),
  validateRequest(SalesValidation.SalesValidationSchema),
  SalesControllers.createSales
);

router.get(
  "/",
  auth(userRoles.manager, userRoles.seller, userRoles.superAdmin),
  SalesControllers.getSales
);

router.get(
  "/:salesId",
  auth(userRoles.seller, userRoles.manager, userRoles.superAdmin),
  SalesControllers.getSingleSales
);

router.get(
  "/user/:username",
  auth(userRoles.seller),
  SalesControllers.getUserSales
);

export const SalesRoutes = router;
