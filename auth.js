const User = require("./models/User");
const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;

passport.use(
  new LocalStratergy(async (USERNAME, password, done) => {
    try {
      console.log("Received the credentials:", USERNAME, password);
      const user = await User.findOne({ username: USERNAME });
      if (!user) return done(null, false, { message: "Username is incorrect" });
      const isPasswordMatch = await user.comparePassword(password);
      // const isPasswordMatch = user.password === password ? true : false;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorect Password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
