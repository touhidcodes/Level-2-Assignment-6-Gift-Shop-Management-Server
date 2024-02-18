import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import { UserControllers } from "./user.controller";
import { userRoles } from "./user.interface";
import auth from "../../middlewares/auth";

const router = express.Router();
//  user routes
router.post(
  "/register",
  auth(userRoles.manager, userRoles.superAdmin),
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserControllers.createUser
);

export const UserRoutes = router;
