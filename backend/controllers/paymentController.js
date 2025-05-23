const PaymentBooking = require('../models/PaymentBooking');
const Order = require('../models/Order');
const crypto = require('crypto');
const RAZORPAY_KEY_ID="rzp_live_QGKPJT93oFKlUl"
const RAZORPAY_KEY_SECRET="gNW7RHWrM1lMjEC4jCPlJCLf"
// Booking creation
exports.createBooking = async (req, res) => {
  try {
    const booking = new PaymentBooking(req.body);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// Order creation (e.g., Razorpay order step)
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET
});

exports.createOrder = async (req, res) => {
  try {
    const { bookingId } = req.body;

    console.log('📥 Received bookingId:', bookingId);

    const booking = await PaymentBooking.findById(bookingId);
    console.log('📄 Fetched Booking:', booking);

    if (!booking) {
      console.warn('⚠️ Booking not found!');
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Determine amount
    let amountInPaise;
    if (booking.total_price && !isNaN(booking.total_price)) {
      amountInPaise = parseInt(booking.total_price) * 100;
      console.log('💰 Using booking.total_price:', booking.total_price);
    } else if (req.body.amount && !isNaN(req.body.amount)) {
      amountInPaise = parseInt(req.body.amount) * 100;
      console.log('💰 Using req.body.amount fallback:', req.body.amount);
    } else {
      console.error('❌ Missing amount in booking and request.');
      return res.status(400).json({ success: false, message: 'Amount missing in booking and request.' });
    }

    // Create Razorpay Order
    console.log('📦 Creating Razorpay order with amount:', amountInPaise);
    const razorpayOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${bookingId}`,
      notes: {
        bookingId: bookingId
      }
    });

    console.log('✅ Razorpay order created:', razorpayOrder.id);

    // Save to DB
    const order = new Order({
      orderId: razorpayOrder.id,
      amount: amountInPaise,
      currency: 'INR',
      paymentGateway: 'razorpay',
      booking: booking._id,
      status: 'created'
    });

    await order.save();
    booking.order = order._id;
    await booking.save();

    console.log('🗃️ Order saved in DB:', order._id);

    res.status(201).json({
      success: true,
      orderId: razorpayOrder.id,
      amount: amountInPaise,
      currency: 'INR',
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (err) {
    console.error('❌ Error in createOrder:', err);
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    console.log('🔍 Verifying payment...');
    console.log('🧾 orderId:', orderId);
    console.log('💳 paymentId:', paymentId);
    console.log('🖊️ signature:', signature);

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    console.log('🔐 Generated Signature:', generatedSignature);

    if (generatedSignature !== signature) {
      console.warn('❌ Signature mismatch!');
      return res.status(400).json({ success: false, message: 'Invalid signature. Payment verification failed.' });
    }

    const order = await Order.findOne({ orderId }).populate('booking');
    if (!order) {
      console.warn('⚠️ Order not found for verification.');
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    console.log('✅ Order found for verification:', order._id);

    order.paymentId = paymentId;
    order.status = 'paid';
    await order.save();

    const booking = await PaymentBooking.findById(order.booking._id);
    if (booking) {
      booking.payment_status = 'paid';
      await booking.save();
      console.log('✅ Booking payment_status updated to paid:', booking._id);
    }

    return res.status(200).json({ success: true, message: 'Payment verified successfully.' });
  } catch (err) {
    console.error('❌ Payment verification error:', err);
    res.status(500).json({ success: false, message: 'Server error during payment verification.' });
  }
};


// Get booking with payment details
exports.getBookingById = async (req, res) => {
  try {
    const booking = await PaymentBooking.findById(req.params.id).populate('order');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
