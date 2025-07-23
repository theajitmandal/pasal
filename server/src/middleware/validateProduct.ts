// src/middleware/validateProduct.ts
import { Request, Response, NextFunction } from 'express';
import { productSchema } from '../validators/productValidator';
import { fromZodError } from 'zod-validation-error';
import * as z from "zod";

export const validateProduct = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    // Validate request body against schema
    productSchema.parse({ body: req.body });
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Format Zod error for client
      const validationError = fromZodError(error, {
        prefix: null,
        includePath: true
      });
      
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationError.details
      });
    }
    next(error);
  }
};