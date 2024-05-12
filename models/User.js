const mongoose = require("mongoose");
const userScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
    enum: ["IT Engineer", "System Admin", "Senior System Admin"],
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    reuired: true,
  },
});
// Create a models
const User = mongoose.model("User", userScheema);
module.exports = User;
