const express = require("express");
const app = express();
const db = require("./db");
const passport = require("./auth");
const userRouter = require("./routes/userRouters.js");
const menuItemRouter = require("./routes/menuItemRouters.js");
const bodyParser = require("body-parser");

require("dotenv").config();
var _ = require("lodash");
// PORT mention
const PORT = process.env.PORT || 3000;
// Middleware method genrate
const userlog = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}]: Request made for ${req.originalUrl}`
  );
  next();
};

app.use(passport.initialize());

// Middleware use to
app.use(userlog);
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/", menuItemRouter);

const localAuthMiddleware = passport.authenticate("local", { session: false });
// Routers mention
app.get("/", localAuthMiddleware, function (req, res) {
  res.send("Welcome to our Restaurent");
});
app.listen(PORT, () => {
  console.log("Server is Running & Listening on port no " + PORT);
});
