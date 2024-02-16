import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";
import { CouponServices } from "./coupon.service";

const createCoupon = catchAsync(async (req, res) => {
  const result = await CouponServices.createCoupon(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Coupon Created successfully",
    data: result,
  });
});

const getCoupon = catchAsync(async (req, res) => {
  const result = await CouponServices.getCoupon();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon retrieved successfully",
    data: result,
  });
});

const deleteCoupon = catchAsync(async (req, res) => {
  const { couponId } = req.params;
  const result = await CouponServices.deleteCoupon(couponId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon deleted successfully",
    data: result,
  });
});

export const CouponControllers = {
  createCoupon,
  getCoupon,
  deleteCoupon,
};
