const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  rooms: { 
    type: String, // ✅ Changed from Number to String
    required: true 
  },
  email: { type: String }, // Optionally, you can add a regex for email validation
  message: { type: String }
});
module.exports = mongoose.model('Booking', bookingSchema);

