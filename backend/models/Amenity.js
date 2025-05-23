const mongoose = require('mongoose');

const AmenitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  // icon: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Amenity', AmenitySchema);
