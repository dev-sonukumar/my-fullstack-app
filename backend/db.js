const mongoose = require("mongoose");

// Connect to MongoDB
const mongoURL =
  "mongodb+srv://mcstechnology:mcstechnology2025@cluster0.zdyek.mongodb.net/mcs";

mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB Connection Error", err));
