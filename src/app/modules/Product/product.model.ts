import mongoose, { Query, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    occasion: { type: String, required: true },
    recipient: { type: String },
    category: { type: String, required: true },
    theme: { type: String, required: true },
    brand: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

productSchema.pre(/^find/, function (this: Query<TProduct, Document>, next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Product = mongoose.model<TProduct>("Product", productSchema);
