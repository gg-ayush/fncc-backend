const express = require('express');
const router = express.Router();
const Shop = require('../models/shopModel.js');

// Create a new shop
router.post('/', async (req, res) => {
  const shop = new Shop(req.body);
  await shop.save();
  res.send(shop);
});

// Get all shops
router.get('/', async (req, res) => {
  const shops = await Shop.find();
  res.send(shops);
});

// Update a shop
router.put('/:id', async (req, res) => {
  const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(shop);
});

// Delete a shop
router.delete('/:id', async (req, res) => {
  await Shop.findByIdAndDelete(req.params.id);
  res.send({ message: 'Shop deleted' });
});

module.exports = router;
