import { z } from "zod";

const ProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "gift name must be a string",
      required_error: "gift name is required",
    }),
    price: z.string({
      invalid_type_error: "gift price must be a string",
      required_error: "gift price is required",
    }),
    quantity: z.string({
      invalid_type_error: "gift quantity must be a string",
      required_error: "gift quantity is required",
    }),
    occasion: z.string(),
    recipient: z.string().optional(),
    category: z.string(),
    theme: z.string(),
    brand: z.string(),
    material: z.string(),
    color: z.string(),
  }),
});
const UpdateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.string().optional(),
    quantity: z.string().optional(),
    occasion: z.string().optional(),
    recipient: z.string().optional(),
    category: z.string().optional(),
    theme: z.string().optional(),
    brand: z.string().optional(),
    material: z.string().optional(),
    color: z.string().optional(),
  }),
});

export const ProductValidation = {
  ProductValidationSchema,
  UpdateProductValidationSchema,
};
