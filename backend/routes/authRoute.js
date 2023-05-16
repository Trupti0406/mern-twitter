const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST API for registering the user
router.post("/api/auth/register", authController.register);

// POST API for Login user
router.post("/api/auth/login", authController.login);
module.exports = router;
