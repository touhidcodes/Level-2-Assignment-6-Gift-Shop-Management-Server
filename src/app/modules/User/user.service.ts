/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const user = await User.create(payload);
  const { _id, username, email, createdAt, updatedAt } = user;
  const result = {
    _id,
    username,
    email,
    createdAt,
    updatedAt,
  };
  return result;
};

export const UserServices = {
  createUser,
};
