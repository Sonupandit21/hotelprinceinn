const Single = require("../models/Single");

// Create
exports.createSingle = async (req, res) => {
  try {
    const newSingle = new Single(req.body);
    await newSingle.save();
    res.status(201).json({ message: "Single created", data: newSingle });
  } catch (error) {
    res.status(500).json({ message: "Create failed", error });
  }
};

// Read All
exports.getAllSingles = async (req, res) => {
  try {
    const singles = await Single.find();
    res.status(200).json(singles);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed", error });
  }
};

// Read One
exports.getSingleById = async (req, res) => {
  try {
    const single = await Single.findById(req.params.id);
    if (!single) return res.status(404).json({ message: "Not found" });
    res.status(200).json(single);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed", error });
  }
};

// Update
exports.updateSingle = async (req, res) => {
  try {
    const updated = await Single.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Updated", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error });
  }
};

// Delete
exports.deleteSingle = async (req, res) => {
  try {
    const deleted = await Single.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted", data: deleted });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error });
  }
};
