const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

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

module.exports = router;