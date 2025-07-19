import mongoose, { Schema, Types } from "mongoose";
const { ObjectId } = mongoose.Schema;

export interface IProduct {
    name: string;
    description: string;
    price: number;
    category: Types.ObjectId;
    stock: number;
    images: string[];
    ratings: {
        average: number;
        count: number;
    };
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
            maxlength: [1000, 'Description cannot exceed 1000 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price must be at least 0'],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Referencing the Category model
            required: [true, 'Product category is required'],
            enum: {
                values: ['electronics', 'clothing', 'home', 'books', 'other'],
                message: 'Please select correct category for product',
            },
        },
        stock: {
            type: Number,
            required: [true, 'Product stock quantity is required'],
            min: [0, 'Stock cannot be negative'],
        },
        images: {
            type: [String],
            required: [true, 'At least one product image is required'],
            validate: {
                validator: (images: string[]) => images.length > 0,
                message: 'At least one product image is required',
            },
        },
        ratings: {
            average: {
                type: Number,
                default: 0,
                min: [0, 'Rating must be at least 0'],
                max: [5, 'Rating cannot exceed 5'],
            },
            count: {
                type: Number,
                default: 0,
            },
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt automatically
    }
);

// Text index for search functionality
// ProductSchema.index({ name: 'text', description: 'text' })

// In development, frameworks like Next.js hot-reload frequently. That means your model files might get 
// re-imported multiple times. Mongoose throws an error if you try to define a model more than once with the same name:

// The code: mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)
// Checks if the model already exists in mongoose.models.Product.
// If it exists, it reuses the existing one.
// If it doesn't exist, it creates a new one using mongoose.model(...).
// This prevents the model from being registered multiple times across reloads.

// export default mongoose.model<IProduct>('Product', ProductSchema)
// Will work only once—after which re-importing or re-running (e.g. during development) can crash the app 
// with OverwriteModelError.

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)

