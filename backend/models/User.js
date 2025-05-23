
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true,
    default: 'user',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

