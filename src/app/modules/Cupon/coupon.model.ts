import mongoose, { Query, Schema } from "mongoose";
import { TCoupon } from "./coupon.interface";

const couponSchema = new Schema<TCoupon>(
  {
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true, min: 0, max: 100 },
    isExpired: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

couponSchema.pre(/^find/, function (this: Query<TCoupon, Document>, next) {
  this.find({ isExpired: { $ne: true } });
  next();
});

export const Coupon = mongoose.model<TCoupon>("Coupon", couponSchema);
