const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },           // From Razorpay/Paytm
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: { 
    type: String, 
    enum: ['created', 'paid', 'failed', 'refunded'], 
    default: 'created' 
  },
  paymentId: { type: String },                         // Razorpay/Paytm payment ID
  signature: { type: String },                         // Razorpay signature (for verification)
  paymentGateway: { type: String, enum: ['razorpay', 'paytm', 'stripe'], required: true },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentBooking' }, // back-link
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
