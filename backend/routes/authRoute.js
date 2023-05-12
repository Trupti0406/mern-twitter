const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");

// POST API for registering the user
router.post(
  "/register",
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
  authController.register
);

// POST API for Login user
router.post(
  "/login",
  [
    body(
      "username",
      "Username must be in lowercase, user can use special characters and uderscore(_) for the same"
    ).isLowercase(),
    body("password", "Password must be 5 or more characters").isLength({
      min: 5,
    }),
  ],
  authController.login
);
module.exports = router;
