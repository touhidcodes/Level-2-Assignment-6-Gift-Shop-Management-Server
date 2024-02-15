import { Types } from "mongoose";

export type TSales = {
  productId: Types.ObjectId;
  quantity: string;
  buyer: string;
  date: string;
  sellDate: number;
};
