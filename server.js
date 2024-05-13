const express = require("express");
const app = express();
const db = require("./db");
const userRouter = require("./routes/userRouters.js");
const menuItemRouter = require("./routes/menuItemRouters.js");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
var _ = require("lodash");

app.use("/user", userRouter);
app.use("/", menuItemRouter);
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to our Restaurent");
});
app.listen(PORT, () => {
  console.log("Server is Running & Listening on port no " + PORT);
});
