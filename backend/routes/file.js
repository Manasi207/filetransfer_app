const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getFileLogs } = require("../controllers/fileController");

router.get("/history", auth, getFileLogs);

module.exports = router;
// Routes for handling file logs, protected by authentication middleware