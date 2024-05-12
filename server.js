const db = require("./db");
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const menuItemRouter = require("./routes/menuItemRouters.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var _ = require("lodash");

app.use("/user", userRouter);
app.use("/", menuItemRouter);
app.listen(3000, () => {
  console.log("Server is Running & Listening on port no 3000");
});
