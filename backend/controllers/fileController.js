// Handles file viewing/transfer logs for users

const File = require("../models/File");

exports.getFileLogs = async (req, res) => {
  try {
    const logs = await File.find({ recipient: req.userId }).sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch file logs", error: err.message });
  }
};
