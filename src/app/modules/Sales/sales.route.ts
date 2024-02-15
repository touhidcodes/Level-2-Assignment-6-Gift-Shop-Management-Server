import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { SalesValidation } from "./sales.validation";
import { SalesControllers } from "./sales.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(SalesValidation.SalesValidationSchema),
  SalesControllers.createSales
);
router.get("/", SalesControllers.getSales);

export const SalesRoutes = router;
