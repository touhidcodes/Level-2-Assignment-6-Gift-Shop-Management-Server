import { z } from "zod";

const SalesValidationSchema = z.object({
  body: z.object({
    productName: z.string({
      invalid_type_error: "name must be a string",
      required_error: "name is required",
    }),
    quantity: z.string({
      invalid_type_error: "gift quantity must be a string",
      required_error: "gift quantity is required",
    }),
    productPrice: z.string({
      invalid_type_error: "price must be a string",
      required_error: "price is required",
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
    seller: z.string({
      invalid_type_error: "seller must be a string",
      required_error: "seller is required",
    }),
    role: z.string({
      invalid_type_error: "role must be a string",
      required_error: "role is required",
    }),
  }),
});

export const SalesValidation = {
  SalesValidationSchema,
};
