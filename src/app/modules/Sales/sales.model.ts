import mongoose, { Schema } from "mongoose";
import { TSales } from "./sales.interface";

const salesSchema = new Schema<TSales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    quantity: { type: String, required: true },
    buyer: { type: String, required: true },
    date: { type: String, required: true },
    sellDate: { type: Number, required: true },
    coupon: { type: String },
    discountPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
    seller: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Sales = mongoose.model<TSales>("Sales", salesSchema);
