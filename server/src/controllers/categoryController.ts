import Category, { ICategory } from "../models/categoryModel";
import { Request, Response } from "express";

// Create new category
export const postCategory = async (req: Request, res: Response) : Promise<void> => {
  try {
    // from the incoming data it only takes category name and description and omits rest
    // because _id, createdAt, updateAt are automatically added by mongoose
    const categoryData: Omit<ICategory, "_id" | "createdAt" | "updatedAt"> = req.body;
    // console.log(categoryData);
    const existing: ICategory | null = await Category.findOne({
      name: categoryData.name,
    });
    if (existing) {
      res.status(400).json({ message: "Category Already Exists" });
    }
    // use Category.create() here instead of .save() because you are creating new Model here
    const newCategory: ICategory = await Category.create(categoryData);
    res.status(201).json({ message: "Category Created Successfully", newCategory });
  } catch (error) {
    res.status(400).json({ message: "Error creating Category", error });
  }
};

// get all categories
export const showCategoryList = async (req: Request, res: Response) : Promise<void> => {
  try{
    const categories: ICategory[] = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error})
  }
}

// get single category
export const getCategoryById = async (req: Request, res: Response) : Promise<void> => {
  try{
    const category: ICategory | null = await Category.findById(req.params.id);
    if(!category){
      res.status(400).json({ message: 'Category not found'});
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error})
  }
}

// update category
export const updateCategory = async (req: Request, res: Response) : Promise<void> => {
  try{
    // findByIdAndUpdate takes 3 parameters, req.params.id, req.body, {new: true}
    // req.params.id means id of category we are updating, re.body are datas we are updating & new:true means
    // to show the updated data in the database
    const updatedCategory: ICategory | null = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      // instead of req.body -> this can also be written -> {category_name: req.body.category_name}
      // means those fields which we are updating
      {new: true}
    );
    if(!updatedCategory){
      res.status(404).json({ message: 'Category not found'});
      return;
    }
    res.status(200).json({ message: 'Category updated successfully', updatedCategory});


  } catch (error) {
    res.status(400).json({ message: 'Error updating category', error});
  }
}

// delete category
export const deleteCategory = async (req: Request, res: Response) : Promise<void> => {
  try{
    const deletedCategory: ICategory | null = await Category.findByIdAndDelete(req.params.id);
    if(!deletedCategory){
      res.status(404).json({ message: 'Category not found'});
      return;
    }
    res.status(200).json({ message: 'Category deleted successfully'});
  } catch (error) {
    res.status(400).json({ message: 'Error deleting category', error});
  }
}
