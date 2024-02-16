import { z } from "zod";

const CouponValidationSchema = z.object({
  body: z.object({
    code: z.string({
      invalid_type_error: "code must be a string",
      required_error: "code is required",
    }),
    discount: z.number({
      invalid_type_error: "percentage must be number",
      required_error: "discount is required",
    }),
  }),
});

export const ProductValidation = {
  CouponValidationSchema,
};
