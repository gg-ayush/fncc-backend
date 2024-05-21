const express = require('express');
const router = express.Router();
const Distributor = require('../models/distributorModel.js');

// Create a new distributor
router.post('/', async (req, res) => {
  const distributor = new Distributor(req.body);
  await distributor.save();
  res.send(distributor);
});

// Get all distributors
router.get('/', async (req, res) => {
  const distributors = await Distributor.find();
  res.send(distributors);
});

// Update a distributor
router.put('/:id', async (req, res) => {
  const distributor = await Distributor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(distributor);
});

// Delete a distributor
router.delete('/:id', async (req, res) => {
  await Distributor.findByIdAndDelete(req.params.id);
  res.send({ message: 'Distributor deleted' });
});

module.exports = router;
