const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();
const passport = require("passport");

router.post('/login', passport.authenticate('local'), userControllers.login);
router.post('/newUser', userControllers.newUser);
router.post('/logout', userControllers.logout);
router.get('/me', userControllers.persist)

module.exports = router