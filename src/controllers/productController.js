const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = await Product.create({ name, price, description });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProducts, createProduct };