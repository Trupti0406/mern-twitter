const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Tweet = require("../models/tweetModel");
const { body, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const tweetController = require("../controllers/tweetController");

//Create a Tweet
router.post("/api/tweet", authMiddleware, tweetController);

// Like a Tweet
router.post("/api/tweet/:id/like", authMiddleware, tweetController);

// Dislike a Tweet
router.post("/api/tweet/:id/dislike", authMiddleware, tweetController);

// Reply on a tweet
router.post("/api/tweet/:id/reply", authMiddleware, tweetController);

// Get a single Tweet detail
router.post("/api/tweet/:id", authMiddleware, tweetController);

// Get all Tweet details
router.post("/api/alltweet", authMiddleware, tweetController);

// Delete a tweet
router.post("/api/tweet/:id/delete", authMiddleware, tweetController);

// Retweet a tweet
router.post("/api/tweet/:id/retweet", authMiddleware, tweetController);
