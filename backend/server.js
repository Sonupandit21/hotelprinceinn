const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const amenityRoutes = require('./routes/amenityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const singleRoutes = require('./routes/singleRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const informationRoutes = require('./routes/informationRoutes');
// const paymentBookingRoutes = require('./routes/paymentBookingRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

require('dotenv').config();

// dotenv.config();
const app = express();

// Add this to set your view engine, e.g. EJS
app.set('view engine', 'ejs');

// (Optional) Set views directory if not default
app.set('views', __dirname + '/views');


// Initialize Razorpay
const Razorpay = require('razorpay');
exports.razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});


// Middleware
app.use(cors());
app.use(express.json());
// app.use('/static', express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));




// Routes
// app.use('/api/rooms', roomRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/amenities', amenityRoutes);
// app.use('/api/', bookingRoutes);
// app.use('/api/', singleRoutes);
// app.use('/api/', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/amenities', amenityRoutes);
app.use('/api/bookings', bookingRoutes);  // changed from '/api/'
app.use('/api/singles', singleRoutes);    // changed from '/api/'
app.use('/api/users', userRoutes); 
app.use('/api/information', informationRoutes); 
// app.use('/api/paymentbookings', paymentBookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);


// Connect to DB and start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
