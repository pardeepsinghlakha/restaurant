const express = require("express");
const Router = express.Router();
const MenuItem = require("./../models/MenuItem");

Router.post("/menuitem", async (req, res) => {
  const menuItemForm = req.body;
  //console.log(menuItemForm);
  try {
    const menuItemdatatodb = new MenuItem(menuItemForm);
    const response = await menuItemdatatodb.save();
    console.log("Menu Data successfully saved into the database");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to save the form data " });
  }
});

Router.get("/menuitem", async (req, res) => {
  try {
    const menudatafromdb = await MenuItem.find();
    console.log("Menu Data successfully Fatched from database");
    res.status(200).json(menudatafromdb);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to fatch the form data " });
  }
});

module.exports = Router;
