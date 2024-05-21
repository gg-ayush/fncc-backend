const express = require('express');
const router = express.Router();
const SalesOrder = require('../models/salesModel.js');

// Create a new sales order
router.post('/', async (req, res) => {
  const salesOrder = new SalesOrder(req.body);
  await salesOrder.save();
  res.send(salesOrder);
});

// Get all sales orders
router.get('/', async (req, res) => {
  const salesOrders = await SalesOrder.find().populate('orders');
  res.send(salesOrders);
});

// Update a sales order
router.put('/:id', async (req, res) => {
  const salesOrder = await SalesOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(salesOrder);
});

// Delete a sales order
router.delete('/:id', async (req, res) => {
  await SalesOrder.findByIdAndDelete(req.params.id);
  res.send({ message: 'Sales order deleted' });
});

module.exports = router;
