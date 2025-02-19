const CV = require('../models/cvModel');

// ✅ Create a new CV
exports.createCV = async (req, res) => {
  try {
    const newCV = new CV(req.body);
    await newCV.save();
    res.status(201).json({ message: "CV created successfully", cv: newCV });
  } catch (error) {
    res.status(400).json("Already added");
  }
};

// ✅ Get all CVs
exports.getAllCVs = async (req, res) => {
  try {
    const cvs = await CV.find();
    res.status(200).json(cvs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a single CV by ID
exports.getCVById = async (req, res) => {
  try {
    const cv = await CV.findById(req.params.id);
    if (!cv) {
      return res.status(404).json({ message: "CV not found" });
    }
    res.status(200).json(cv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a CV
exports.updateCV = async (req, res) => {
  try {
    const updatedCV = await CV.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCV) {
      return res.status(404).json({ message: "CV not found" });
    }
    res.status(200).json({ message: "CV updated successfully", cv: updatedCV });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Delete a CV
exports.deleteCV = async (req, res) => {
  try {
    const deletedCV = await CV.findByIdAndDelete(req.params.id);
    if (!deletedCV) {
      return res.status(404).json({ message: "CV not found" });
    }
    res.status(200).json({ message: "CV deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
