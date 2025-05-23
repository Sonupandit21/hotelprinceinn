const express = require('express');
const router = express.Router();
const amenityController = require('../controllers/amenityController');

router.post('/', amenityController.createAmenity);
router.get('/', amenityController.getAllAmenities);
router.get('/:id', amenityController.getAmenityById);
router.put('/:id', amenityController.updateAmenity);
router.delete('/:id', amenityController.deleteAmenity);

module.exports = router;
