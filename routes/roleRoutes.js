const express = require('express');
const router = express.Router();
const Role = require('../models/roleModel.js');

// Create a new role
router.post('/', async (req, res) => {
  const role = new Role(req.body);
  await role.save();
  res.send(role);
});

// Get all roles
router.get('/', async (req, res) => {
  const roles = await Role.find();
  res.send(roles);
});

// Update a role
router.put('/:id', async (req, res) => {
  const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(role);
});

// Delete a role
router.delete('/:id', async (req, res) => {
  await Role.findByIdAndDelete(req.params.id);
  res.send({ message: 'Role deleted' });
});

module.exports = router;
