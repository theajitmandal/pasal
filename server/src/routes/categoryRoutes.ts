import express from 'express';

import { postCategory, showCategoryList, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController';

const router = express.Router();

router.post('/', postCategory);
router.get('/', showCategoryList);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
// router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;