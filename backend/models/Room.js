const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
  features: [{ type: String }],
  image: { type: String }, // Store image URL or path
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
