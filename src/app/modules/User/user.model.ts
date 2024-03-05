/* eslint-disable @typescript-eslint/no-this-alias */
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { TUser, UserModel } from "./user.interface";
import config from "../../config/config";

const UserSchema = new Schema<TUser, UserModel>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ["superAdmin", "manager", "seller", "user"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

UserSchema.statics.isUserExistsByUsername = async function (username: string) {
  return await User.findOne({ username }).select("+password");
};

UserSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

UserSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = mongoose.model<TUser, UserModel>("User", UserSchema);
