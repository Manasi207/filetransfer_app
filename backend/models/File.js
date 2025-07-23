const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  fileName: String,
  sender: String,
  recipient: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", FileSchema);

// Mongoose model for File with fileName, sender, recipient, and timestamp fields