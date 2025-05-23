const express = require('express');
const router = express.Router();
const {
  createInformation,
  getAllInformation,
  updateInformation,
  deleteInformation
} = require('../controllers/informationController');

// POST: Create booking
router.post('/', createInformation);

// GET: Fetch all bookings
router.get('/', getAllInformation);

// PUT: Update booking by ID
router.put('/:id', updateInformation);

// DELETE: Delete booking by ID
router.delete('/:id', deleteInformation);

module.exports = router;
