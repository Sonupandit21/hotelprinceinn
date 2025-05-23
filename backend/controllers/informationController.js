const Information = require('../models/Information');

// Create booking
exports.createInformation = async (req, res) => {
  try {
    const { bookingDetails, orderId, total } = req.body;
    if (!bookingDetails || !orderId || total === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newInfo = new Information(req.body);
    await newInfo.save();
    res.status(201).json({ message: 'Booking created successfully!', data: newInfo });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking', error });
  }
};

// Get all bookings
exports.getAllInformation = async (req, res) => {
  try {
    const data = await Information.find().sort({ createdAt: -1 });
    res.status(200).json({ message: 'Bookings fetched successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error });
  }
};

// Update booking by ID
exports.updateInformation = async (req, res) => {
  try {
    const updated = await Information.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking updated', data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update booking', error });
  }
};

// Delete booking by ID
exports.deleteInformation = async (req, res) => {
  try {
    const deleted = await Information.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted', data: deleted });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking', error });
  }
};
