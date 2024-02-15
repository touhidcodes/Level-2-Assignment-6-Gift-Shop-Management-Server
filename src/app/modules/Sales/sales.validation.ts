import { z } from "zod";

const SalesValidationSchema = z.object({
  body: z.object({
    quantity: z.string({
      invalid_type_error: "gift quantity must be a string",
      required_error: "gift quantity is required",
    }),
    buyer: z.string({
      invalid_type_error: " name must be a string",
      required_error: " name is required",
    }),
    date: z.string({
      invalid_type_error: " date must be a string",
      required_error: " date is required",
    }),
    sellDate: z.number({
      invalid_type_error: " date must be a number",
      required_error: " date is required",
    }),
  }),
});

export const SalesValidation = {
  SalesValidationSchema,
};
