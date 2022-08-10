const express = require("express");
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");
require("dotenv").config({ path: ".env" });
const db = require("./db");
const { User } = require("./models")

app.use(morgan("tiny"));

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PASSPORT
// cookies
app.use(cookieParser());
app.use(expressSession({ secret: "superTopTMDB" }));
// passport init
app.use(passport.initialize());
app.use(passport.session());
// estrategia local
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ where: { email: email.toLowerCase() } })
      .then((user) => {
        if (!user) done(null, false);
        if (user.validatePassword(password)) done(null, user);
        else done(null, false);
      })
      .catch((err) => done(err, false));
  })
);
// serialize
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// deserialize
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

app.use("/api", routes);
app.use("/*", (req, res) => {
  res.sendStatus(404);
});

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
