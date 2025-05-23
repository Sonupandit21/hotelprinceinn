const Room = require('../models/Room');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer storage config
const uploadPath = path.join(__dirname, '..', 'public', 'static');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

exports.createRoom = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { body, file } = req;

      // ✅ Parse JSON fields that are expected to be arrays or objects
      if (body.features && typeof body.features === 'string') {
        try {
          body.features = JSON.parse(body.features);
        } catch (e) {
          return res.status(400).json({ error: 'Invalid JSON in features' });
        }
      }

      // ✅ Add image filename to body
      if (file) {
        body.image = file.filename;
      }

      const room = new Room(body);
      await room.save();

      // Build full image URL
      const host = req.get('host');
      const protocol = req.protocol;

      res.status(201).json({
        ...room.toObject(),
        image: file ? `${protocol}://${host}/static/${file.filename}` : null
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];


// Read All
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    // Add full URL to image path
    const host = req.get('host'); // e.g. localhost:5000
    const protocol = req.protocol; // e.g. http

    const roomsWithFullImageUrl = rooms.map(room => ({
      ...room.toObject(),
      image: room.image ? `${protocol}://${host}/static/${room.image}` : null
    }));

    res.status(200).json(roomsWithFullImageUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read One
exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/static');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });
// exports.uploadImage = [
//   upload.single('image'),
//   (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image uploaded' });
//     }

//     const host = req.get('host');
//     const protocol = req.protocol;

//     res.status(200).json({
//       message: 'Image uploaded successfully',
//       filename: req.file.filename,
//       url: `${protocol}://${host}/static/${req.file.filename}`
//     });
//   }
// ];
