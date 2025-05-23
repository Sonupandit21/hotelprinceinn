// const PaymentBooking = require('../models/paymentBooking');

// // Create a new payment booking
// // exports.createPaymentBooking = async (req, res) => {
// //   try {
// //     const booking = new PaymentBooking(req.body);
// //     const savedBooking = await booking.save();
// //     res.status(201).json(savedBooking);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // Get all payment bookings
// exports.getAllPaymentBookings = async (req, res) => {
//   try {
//     const bookings = await PaymentBooking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get payment booking by ID
// exports.getPaymentBookingById = async (req, res) => {
//   try {
//     const booking = await PaymentBooking.findById(req.params.id);
//     if (!booking) return res.status(404).json({ message: 'Booking not found' });
//     res.json(booking);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update payment booking by ID
// exports.updatePaymentBooking = async (req, res) => {
//   try {
//     const updatedBooking = await PaymentBooking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
//     res.json(updatedBooking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete payment booking by ID
// exports.deletePaymentBooking = async (req, res) => {
//   try {
//     const deletedBooking = await PaymentBooking.findByIdAndDelete(req.params.id);
//     if (!deletedBooking) return res.status(404).json({ message: 'Booking not found' });
//     res.json({ message: 'Booking deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
