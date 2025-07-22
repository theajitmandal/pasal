import Product, { IProduct } from "../models/productModel";
import { Request, Response } from "express";

// Create new product (or to store new product in database)
export const postProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No file uploaded' });
    }
    // console.log(req.body);
    // const {image} = req.body;
    const imagePath = req.file?.path;
    // console.log(imagePath);
    // console.log(req.file);

    const newProduct: IProduct = await Product.create({ ...req.body, image: imagePath });
    res.status(201).json({ message: "New Product Added Successfully", newProduct });
  } catch (error) {
    res.status(400).json({ message: "Error creating Product", error });
  }
};

// 
// get all products
export const showProductList = async (req: Request, res: Response): Promise<void> => {
  try {
    // const products: IProduct[] = await Product.find();
    // to show the category name in the result, previously we were getting category id
    const products: IProduct[] = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error })
  }
}

// get single product
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product: IProduct | null = await Product.findById(req.params.id).populate('category');
    if (!product) {
      res.status(400).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error })
  }
}

// update product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });

  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error });
  }
}

// delete product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct: IProduct | null = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting product', error });
  }
}






