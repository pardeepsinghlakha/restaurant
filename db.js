const mongoose = require("mongoose");

//Define mongo db URI
database_URL = "mongodb://localhost:27017/restaurant";

mongoose.connect(database_URL);

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
