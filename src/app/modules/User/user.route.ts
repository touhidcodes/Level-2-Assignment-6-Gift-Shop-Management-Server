import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import { UserControllers } from "./user.controller";

const router = express.Router();
//  user routes
router.post(
  "/register",
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserControllers.createUser
);

export const UserRoutes = router;
