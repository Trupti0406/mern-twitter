const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const tweetPicController = require("../controllers/tweetPicController");

//Create a Tweet
router.post("/api/tweet", authMiddleware, tweetPicController.createTweet);

// Like a Tweet
// router.post("/api/tweet/:id/like", authMiddleware, tweetController);

// Dislike a Tweet
// router.post("/api/tweet/:id/dislike", authMiddleware, tweetController);

// Reply on a tweet
// router.post("/api/tweet/:id/reply", authMiddleware, tweetController);

// Get a single Tweet detail
// router.post("/api/tweet/:id", authMiddleware, tweetController);

// Get all Tweet details
// router.post("/api/alltweet", authMiddleware, tweetController);

// Delete a tweet
// router.post("/api/tweet/:id/delete", authMiddleware, tweetController);

// Retweet a tweet
// router.post("/api/tweet/:id/retweet", authMiddleware, tweetController);

module.exports = router;
