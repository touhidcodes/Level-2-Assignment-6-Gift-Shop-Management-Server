import { TCoupon } from "./coupon.interface";
import { Coupon } from "./coupon.model";

const createCoupon = async (payload: TCoupon) => {
  const result = await Coupon.create(payload);
  return result;
};

const getCoupon = async () => {
  const result = await Coupon.find();
  return result;
};

const deleteCoupon = async (id: string) => {
  const result = await Coupon.findByIdAndUpdate(
    id,
    { isExpired: true },
    {
      new: true,
    }
  );
  return result;
};

export const CouponServices = {
  createCoupon,
  getCoupon,
  deleteCoupon,
};
