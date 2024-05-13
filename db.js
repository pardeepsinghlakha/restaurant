const mongoose = require("mongoose");
require("dotenv").config();

//Define mongo db URI
const DATABASE_NAME = process.env.DATABASE_NAME;
//const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
// const database_URI_Local = process.env.DATABASE_URI_LOCAL;
const database_URI_Online = process.env.DATABASE_URI_ONLINE;
mongoose.connect(database_URI_Online, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB Database successfully Connected");
});
db.on("error", (err) => {
  console.error("MongoDB Connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB Server Disconnected ");
});
module.exports = {
  db,
};
