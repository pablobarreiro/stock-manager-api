const { User } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  login: (req, res) => {
    res.status(201).send({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  },

  newUser: async (req, res) => {
    try {
      const createdUser = await User.create({
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password,
      });
      res.status(201).send({
        id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email,
      });
    } catch (err) {
      if (err.errors) res.send(err.errors[0].message);
      else {
        console.log(err.original);
        res.send(`${err.original}`);
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.sendStatus(204);
    });
  },

  persist: (req, res) => {
    if (req.user)
      res.send({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
      });
    else res.sendStatus(401);
  },
};
