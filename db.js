// Importing dotenv to load environment variables from .env file
require("dotenv").config();

// Importing mongoose for MongoDB interactions
const mongoose = require("mongoose");

// Retrieving the MongoDB URI from environment variables
const databaseURI = process.env.DATABASE_URI_ONLINE;

// Connecting to MongoDB using the provided URI
mongoose.connect(databaseURI);

// Getting the default connection object from mongoose
const db = mongoose.connection;

// Event listener for successful MongoDB connection
db.on("connected", () => {
  console.log("MongoDB Database connected successfully");
});

// Event listener for MongoDB connection error
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Event listener for MongoDB disconnection
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Exporting the MongoDB connection object for external usage
module.exports = db;
