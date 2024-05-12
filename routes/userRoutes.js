const express = require("express");
const router = express.Router();
const User = require("./../models/User");

router.post("/", async (req, res) => {
  try {
    const formdata = req.body;
    //console.log(formdata);
    //create a new user documents usingh mongoose model
    const newUser = new User(formdata);
    const response = await newUser.save();
    console.log("Form Data successfully saved into the database");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to save the form data " });
  }
});

router.get("/", async (req, res) => {
  try {
    const userDbData = await User.find();
    console.log("Data Fached successfully from the Database");
    res.status(200).json(userDbData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to save the form data " });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const userWorkType = req.params.workType;
    if (
      (userWorkType == "Senior System Admin") |
      (userWorkType == "IT Engineer") |
      (userWorkType == "System Admin")
    ) {
      const response = await User.find({ work: userWorkType });
      console.log("Data Fached successfully from the Database");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Params not matched " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to fatched the db data " });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const updatedUserData = req.body;
    const response = await User.findByIdAndUpdate(userID, updatedUserData, {
      new: true,
      runValidation: true,
    });
    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("User Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to updated user data " });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const response = await User.findByIdAndDelete(userID);
    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("User Data Deleted");
    res.status(200).json({ error: "User Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to delete user data " });
  }
});
module.exports = router;
