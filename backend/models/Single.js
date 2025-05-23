const mongoose = require("mongoose");

const singleSchema = new mongoose.Schema({
  checkIn: String,
  checkOut: String,
  adults: Number,
  children: Number,
}, { timestamps: true });

module.exports = mongoose.model("Single", singleSchema);
