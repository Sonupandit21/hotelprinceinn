const mongoose = require('mongoose');

const paymentBookingSchema = new mongoose.Schema({
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  adults: { type: Number, required: true, min: 1 },
  children: { type: Number, default: 0, min: 0 },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  room: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  state: { type: String, required: true },
  notes: { type: String, trim: true },
  payment_method: { 
    type: String, 
    enum: ['razorpay', 'paytm', 'stripe', 'cod'], 
    required: true 
  },
  payment_status: { 
    type: String, 
    enum: ['paid', 'unpaid', 'failed', 'pending'], 
    default: 'unpaid' 
  },
  total_price: { type: Number, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // foreign key
}, { timestamps: true });

module.exports = mongoose.model('PaymentBooking', paymentBookingSchema);
