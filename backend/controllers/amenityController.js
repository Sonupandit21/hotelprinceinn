const Amenity = require('../models/Amenity');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Setup image upload directory
const uploadPath = path.join(__dirname, '..', 'public', 'amenities');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Create a new amenity with image upload
exports.createAmenity = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { body, file } = req;
      if (file) {
        body.image = file.filename;
      }

      const amenity = new Amenity(body);
      await amenity.save();

      const imageUrl = file ? `${req.protocol}://${req.get('host')}/amenities/${file.filename}` : null;

      res.status(201).json({
        ...amenity.toObject(),
        image: imageUrl
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
];

// Get all amenities with full image URL
exports.getAllAmenities = async (req, res) => {
  try {
    const amenities = await Amenity.find();
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    const result = amenities.map(item => ({
      ...item.toObject(),
      image: item.image ? `${baseUrl}/amenities/${item.image}` : null
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single amenity by ID with image URL
exports.getAmenityById = async (req, res) => {
  try {
    const amenity = await Amenity.findById(req.params.id);
    if (!amenity) return res.status(404).json({ message: 'Amenity not found' });

    const imageUrl = amenity.image ? `${req.protocol}://${req.get('host')}/amenities/${amenity.image}` : null;

    res.json({
      ...amenity.toObject(),
      image: imageUrl
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update amenity with optional new image
exports.updateAmenity = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { body, file } = req;
      if (file) {
        body.image = file.filename;
      }

      const amenity = await Amenity.findByIdAndUpdate(req.params.id, body, {
        new: true,
        runValidators: true
      });

      if (!amenity) return res.status(404).json({ message: 'Amenity not found' });

      const imageUrl = amenity.image ? `${req.protocol}://${req.get('host')}/amenities/${amenity.image}` : null;

      res.json({
        ...amenity.toObject(),
        image: imageUrl
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
];

// Delete an amenity
exports.deleteAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.findByIdAndDelete(req.params.id);
    if (!amenity) return res.status(404).json({ message: 'Amenity not found' });

    // Optional: delete associated image file
    if (amenity.image) {
      const filePath = path.join(uploadPath, amenity.image);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    res.json({ message: 'Amenity deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export the multer instance (optional)
exports.uploadAmenityImage = upload;
