const mongoose = require('mongoose');

const bookingDetailsSchema = new mongoose.Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  adults: { type: Number, required: true, min: 1 },
  children: { type: Number, default: 0, min: 0 },
  firstName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  room: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  state: { type: String, required: true },
  notes: { type: String, trim: true },
  payment_method: { type: String, required: true },
}, { timestamps: true });

const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);

module.exports = BookingDetails;


// const informationSchema = new mongoose.Schema({
//   orderId: String,
//   paymentMode: String,
//   total: Number,
//   bookingDetails: bookingDetailsSchema,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Information', informationSchema);
