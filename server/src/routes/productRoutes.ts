import express from 'express';
import { deleteProduct, getProductById, postProduct, showProductList, updateProduct} from '../controllers/productController';
import upload from '../middleware/multerMiddleware';

const router = express.Router();

router.post('/', upload.single('image'), postProduct);
router.get('/', showProductList);
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;