import { Types } from "mongoose";

export type TSales = {
  productId: Types.ObjectId;
  quantity: string;
  buyer: string;
  date: string;
  sellDate: number;
  coupon?: string;
  discountPrice: number;
  totalPrice: number;
  grandTotal: number;
  seller: string;
  role: string;
};
