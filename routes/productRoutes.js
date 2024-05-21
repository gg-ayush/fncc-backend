const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// Create a new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Update a product
router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
});

// Delete a product
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ message: 'Product deleted' });
});

module.exports = router;
