import mongoose, { Schema } from "mongoose";

export interface ICategory {
  name: string;
  description: string;
}

const CategorySchema: Schema<ICategory> = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema)

// const Category = mongoose.model<ICategory>("Category", categorySchema);
// export default Category

