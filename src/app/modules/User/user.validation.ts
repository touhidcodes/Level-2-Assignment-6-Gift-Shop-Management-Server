import { z } from "zod";
// import { roles } from "./user.constant";

const CreateUserValidationSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username must be required",
    }),
    email: z.string({
      required_error: "Email must be required",
    }),
    password: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .min(8, { message: "Password must be minimum 6 characters" })
      .max(20, { message: "Password can not be more than 20 characters" }),
  }),
});

export const UserValidation = {
  CreateUserValidationSchema,
};
