// src/validators/productValidator.ts
import * as z from "zod";

// Helper for decimal numbers with 2 decimal places
// const decimal = z.number().positive().multipleOf(0.01);
const decimal = z.number().positive();

// Image URL validation
// const imageUrlSchema = z.string().url().startsWith('https://');

    // name: string;
    // description: string;
    // price: number;
    // category: Types.ObjectId;
    // stock: number;
    // image: string;

// Product variant schema
// const variantSchema = z.object({
    // name: z.string().min(1, "Name is required").max(15, "Name should be less than 15 characters"),
    // description: z.string().min(1, "Description is required").length(20, "Description should be more than 20").max(50, "Description too long"),
    // category: z.string()
    // price: z.number().nonnegative("Price value cannot be negative"),
    // stock: z.number().nonnegative("Stock value cannot be negative"),

    // image: z.url()
//   color: z.string().min(1, "Color is required"),
//   size: z.string().min(1, "Size is required"),
//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   sku: z.string().min(1, "SKU is required").max(50, "SKU too long")
// });

// Main product schema
export const productSchema = z.object({
  body: z.object({
    name: z.string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name cannot exceed 20 characters")
      .trim(),
    description: z.string()
      .min(20, "Description must be at least 10 characters")
      .max(50, "Description cannot exceed 2000 characters")
      .trim(),
    price: decimal
      .min(0.01, "Price must be at least $0.01")
      .max(10000, "Price cannot exceed $10,000"),
    // discountPrice: decimal
    //   .optional()
    //   .refine(val => !val || val < z.this().price, {
    //     message: "Discount price must be less than regular price"
    //   }),
    // category: z.enum([
    //   'electronics', 
    //   'clothing', 
    //   'home', 
    //   'books', 
    //   'other'
    // ]),
//     tags: z.array(z.string().min(1).max(20))
//       .max(10, "Maximum 10 tags allowed")
//       .optional(),
//     images: z.array(imageUrlSchema)
//       .min(1, "At least one image is required")
//       .max(8, "Maximum 8 images allowed"),
//     variants: z.array(variantSchema)
//       .min(1, "At least one variant is required")
//       .optional(),
//     isFeatured: z.boolean().default(false),
//     isActive: z.boolean().default(true),
//     meta: z.object({
//       weight: decimal.optional(),
//       dimensions: z.object({
//         length: decimal.optional(),
//         width: decimal.optional(),
//         height: decimal.optional()
//       }).optional()
//     }).optional()
//   }).strict() // No extra fields allowed
  })
});

// Types for TypeScript
export type ProductInput = z.infer<typeof productSchema>['body'];
// export type ProductVariant = z.infer<typeof variantSchema>;