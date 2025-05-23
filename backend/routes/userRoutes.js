const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ✅ STATIC route first
router.get('/get-user', userController.getAllUsers);

// ✅ DYNAMIC route second
router.get('/:id', userController.getUserById);

// ✅ Register route (or POST)
router.post('/register', userController.registerUser);

module.exports = router;






