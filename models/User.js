const mongoose = require("mongoose");
const bcrpt = require("bcrypt");
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
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userScheema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrpt.genSalt(10);
    const hashedPassword = await bcrpt.hash(user.password, salt);
    console.log(
      "Hashed Password with salt genrated by the bcrypt lib: ",
      hashedPassword
    );
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
userScheema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrpt.compare(userPassword, this.password);
    console.log("Compair password function output is: ", isMatch);
    return isMatch;
  } catch (error) {}
};

// Create a models
const User = mongoose.model("User", userScheema);
module.exports = User;
