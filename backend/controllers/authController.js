const crypto = require('crypto');
const User = require('../models/userModel');

// Utility to hash password with salt
const hashPassword = (password, salt) => {
  return crypto.createHmac('sha256', salt).update(password).digest('hex');
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt);

    const newUser = new User({ email, passwordHash, salt });
    await newUser.save();

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const hashedInput = hashPassword(password, user.salt);
    if (hashedInput !== user.passwordHash)
      return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
