import { Types } from "mongoose";

export type TLoginUser = {
  username: string;
  password: string;
};

export type TJWTPayload = {
  _id: Types.ObjectId;
  username: string;
  role: string;
};
