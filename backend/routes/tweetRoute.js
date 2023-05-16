const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const tweetPicController = require("../controllers/tweetPicController");
const tweetController = require("../controllers/tweetController");

//Create a Tweet
router.post("/api/tweet", authMiddleware, tweetPicController.createTweet);

// Like a Tweet
router.post("/api/tweet/:id/like", authMiddleware, tweetController.likeTweet);

// Dislike a Tweet
router.post(
  "/api/tweet/:id/dislike",
  authMiddleware,
  tweetController.dislikeTweet
);

// Reply on a tweet
router.post(
  "/api/tweet/:id/reply",
  authMiddleware,
  tweetController.replyToTweet
);

// Get a single Tweet detail
router.get("/api/tweet/:id", authMiddleware, tweetController.getTweetById);

// Get all Tweet details
router.get("/api/alltweet", authMiddleware, tweetController.getAllTweets);

// Delete a tweet
router.delete(
  "/api/tweet/:id/delete",
  authMiddleware,
  tweetController.deleteTweet
);

// Retweet a tweet
router.post(
  "/api/tweet/:id/retweet",
  authMiddleware,
  tweetController.retweetTweet
);

router.post(
  "/api/tweet/uploadTweetPicture",
  authMiddleware,
  tweetController.uploadTweetPicture
);

module.exports = router;
