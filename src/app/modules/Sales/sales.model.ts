import mongoose, { Schema } from "mongoose";
import { TSales } from "./sales.interface";

const salesSchema = new Schema<TSales>(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
    quantity: { type: String, required: true },
    buyer: { type: String, required: true },
    date: { type: String, required: true },
    sellDate: { type: Number, required: true },
    coupon: { type: String },
    discountPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Sales = mongoose.model<TSales>("Sales", salesSchema);
