const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

// Get All Products
router.get('/', getProducts);

// Get Product by ID
router.get('/:id', getProductById);

// Create Product
router.post('/', auth, createProduct);

// Update Product
router.put('/:id', auth, updateProduct);

// Delete Product
router.delete('/:id', auth, deleteProduct);

module.exports = router;