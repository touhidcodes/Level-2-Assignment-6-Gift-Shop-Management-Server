import { Model, Types } from "mongoose";
/* eslint-disable no-unused-vars */

export type TUser = {
  _id?: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role: "superAdmin" | "manager" | "seller" | "user";
  createdAt?: Date;
  updatedAt?: Date;
};

export const userRoles = {
  superAdmin: "superAdmin",
  manager: "manager",
  seller: "seller",
  user: "user",
} as const;

export type TUserRole = keyof typeof userRoles;

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByUsername(username: string): Promise<TUser>;
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
