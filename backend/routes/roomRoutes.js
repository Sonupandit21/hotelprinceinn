const express = require('express');
const router = express.Router();
const {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  // uploadImage,
} = require('../controllers/roomController');

router.post('/', createRoom);       // Create Rooms
router.get('/', getRooms);          // Get All Rooms
router.get('/:id', getRoom);        // Get Room by ID
router.put('/:id', updateRoom);     // Update Room by ID
router.delete('/:id', deleteRoom);  // Delete Room by ID
// router.post('/upload-image', uploadImage);

module.exports = router;
