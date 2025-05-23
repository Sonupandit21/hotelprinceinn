const express = require("express");
const router = express.Router();
const singleController = require("../controllers/singleController");

router.post("/single", singleController.createSingle);
router.get("/get-checkin-room", singleController.getAllSingles);
router.get("/:id", singleController.getSingleById);
router.put("/:id", singleController.updateSingle);
router.delete("/:id", singleController.deleteSingle);

module.exports = router;
