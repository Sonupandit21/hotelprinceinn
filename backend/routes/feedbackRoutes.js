const express = require('express');
const router = express.Router();
const {
  createFeedback,
  getAllFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback
} = require('../controllers/feedbackController');

router.post('/', createFeedback);       // Create Feedback
router.get('/', getAllFeedback);        // Get All Feedback
router.get('/:id', getFeedback);        // Get Feedback by ID
router.put('/:id', updateFeedback);     // Update Feedback by ID
router.delete('/:id', deleteFeedback);  // Delete Feedback by ID

module.exports = router;
