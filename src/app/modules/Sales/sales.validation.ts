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
    grandTotal: z.number({
      invalid_type_error: "  grand total must be a number",
      required_error: " grand total is required",
    }),
    discountPrice: z.number({
      invalid_type_error: " discount price be a number",
      required_error: " discount is required",
    }),
    totalPrice: z.number({
      invalid_type_error: " total price must be a number",
      required_error: " total price is required",
    }),
  }),
});

export const SalesValidation = {
  SalesValidationSchema,
};
