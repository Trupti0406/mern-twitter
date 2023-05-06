const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { JWT_SECRET } = require("../config");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
router.post(
  "/api/auth/register",
  [
    body("name").isLength({ min: 2 }),
    body("email").isEmail(),
    body(
      "username",
      "Username must be in lowercase, user can use special characters and uderscore(_) for the same"
    ).isLowercase(),
    body("password", "Password must be 5 or more characters").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: securePassword,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// Login Route
router.post(
  "/api/auth/login",
  [
    body(
      "username",
      "Username must be in lowercase, user can use special characters and uderscore(_) for the same"
    ).isLowercase(),
    body("password", "Password must be 5 or more characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let username = req.body.username;

    try {
      let userData = await User.findOne({ username });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const psdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!psdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
