import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Obtener todos los productos
router.get('/', getProducts);

// Obtener un producto por ID
router.get('/:id', getProductById);

// Crear un nuevo producto (requiere autenticación)
router.post('/', protect, createProduct);

// Actualizar un producto por ID (requiere autenticación)
router.put('/:id', protect, updateProduct);

// Eliminar un producto por ID (requiere autenticación)
router.delete('/:id', protect, deleteProduct);

export default router;