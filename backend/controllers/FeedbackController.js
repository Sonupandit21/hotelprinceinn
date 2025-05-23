const Feedback = require('../models/Feedback');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer storage config for feedback images
const uploadPath = path.join(__dirname, '..', 'public', 'static');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

exports.createFeedback = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { body, file } = req;

      // If you expect JSON strings, parse here, e.g.:
      // if (body.someField && typeof body.someField === 'string') {
      //   body.someField = JSON.parse(body.someField);
      // }

      if (file) {
        body.image = file.filename;
      }

      const feedback = new Feedback(body);
      await feedback.save();

      const host = req.get('host');
      const protocol = req.protocol;

      res.status(201).json({
        ...feedback.toObject(),
        image: file ? `${protocol}://${host}/static/${file.filename}` : null
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

// Get all feedbacks with image URLs
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    const host = req.get('host');
    const protocol = req.protocol;

    const feedbacksWithUrls = feedbacks.map(fb => ({
      ...fb.toObject(),
      image: fb.image ? `${protocol}://${host}/static/${fb.image}` : null
    }));

    res.status(200).json(feedbacksWithUrls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one feedback with full image URL
exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ error: 'Feedback not found' });

    const host = req.get('host');
    const protocol = req.protocol;

    res.status(200).json({
      ...feedback.toObject(),
      image: feedback.image ? `${protocol}://${host}/static/${feedback.image}` : null
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update feedback (optionally with image upload)
exports.updateFeedback = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { body, file } = req;

      // If new image uploaded, update image filename
      if (file) {
        body.image = file.filename;
      }

      // Parse JSON fields if any (add here)

      const updated = await Feedback.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ error: 'Feedback not found' });

      const host = req.get('host');
      const protocol = req.protocol;

      res.status(200).json({
        ...updated.toObject(),
        image: updated.image ? `${protocol}://${host}/static/${updated.image}` : null
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];

// Delete feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Feedback not found' });
    res.status(200).json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
