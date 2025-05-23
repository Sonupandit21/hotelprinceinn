const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Booking
router.post('/bookings', paymentController.createBooking);
router.get('/bookings/:id', paymentController.getBookingById);

// Order
router.post('/orders', paymentController.createOrder);

// Payment verification
router.post('/verify', paymentController.verifyPayment);

module.exports = router;
