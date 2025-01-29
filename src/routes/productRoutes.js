// filepath: /C:/Users/Usuario/OneDrive/Documentos/GitHub/E-Commerce-Fullstack/src/routes/productRoutes.js
const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router;