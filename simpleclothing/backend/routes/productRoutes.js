import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

// Obtener todos los productos
router.get('/', getProducts);

// Obtener un producto por ID
router.get('/:id', getProductById);

// Crear un nuevo producto (requiere autenticación)
router.post('/', auth, createProduct);

// Actualizar un producto por ID (requiere autenticación)
router.put('/:id', auth, updateProduct);

// Eliminar un producto por ID (requiere autenticación)
router.delete('/:id', auth, deleteProduct);

export default router;