const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
  try {
    console.log('📥 Incoming booking request:', req.body);

    const { fullName, phoneNumber, rooms, email, message } = req.body;

    const booking = new Booking({ fullName, phoneNumber, rooms, email, message });

    console.log('📝 Saving booking to database...');
    await booking.save();

    console.log('✅ Booking saved successfully:', booking);

    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    console.error('❌ Error creating booking:', error);
    res.status(500).json({ error: error.message });
  }
};


exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
