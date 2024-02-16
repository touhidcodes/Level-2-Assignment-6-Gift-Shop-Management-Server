import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CouponValidation } from "./coupon.validation";
import { CouponControllers } from "./coupon.controller";
import auth from "../../middlewares/auth";
import { userRoles } from "../User/user.interface";

const router = express.Router();
//  coupon routes
router.post(
  "/",
  auth(userRoles.superAdmin, userRoles.manager),
  validateRequest(CouponValidation.CouponValidationSchema),
  CouponControllers.createCoupon
);

router.get(
  "/",
  auth(userRoles.superAdmin, userRoles.manager, userRoles.seller),
  CouponControllers.getCoupon
);

router.delete(
  "/:couponId",
  auth(userRoles.superAdmin, userRoles.manager),
  CouponControllers.deleteCoupon
);

export const CouponRoutes = router;
