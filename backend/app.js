/*
 * Entry point for the Express application.
 * Sets up middleware, routes, and database connection.
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/file");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/file", fileRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;
// Main application file setting up Express, MongoDB connection, and routes