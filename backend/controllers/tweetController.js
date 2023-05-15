const Tweet = require("../models/tweetModel");

// Like a tweet
exports.likeTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;

    // Find the tweet by its ID
    const tweet = await Tweet.findById(id);

    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    // Check if the tweet is already liked by the user
    if (tweet.likes.includes(userId)) {
      return res.status(400).json({ error: "Tweet is already liked" });
    }

    // Add the user ID to the likes array
    tweet.likes.push(userId);

    // Save the updated tweet
    await tweet.save();

    res.json({ message: "Tweet liked successfully", tweet });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while liking the tweet" });
  }
};

// Dislike a tweet
exports.dislikeTweet = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const userId = req.user._id;

    // Retrieve the tweet document
    const tweet = await Tweet.findById(tweetId);

    // Check if the tweet exists
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    // Check if the user has liked the tweet
    const userIndex = tweet.likes.findIndex(
      (likedUserId) => likedUserId.toString() === userId.toString()
    );
    if (userIndex === -1) {
      return res.status(400).json({ error: "Tweet is not liked by the user" });
    }

    // Remove the user's ID from the likes array
    tweet.likes.splice(userIndex, 1);

    // Save the updated tweet data
    await tweet.save();

    res.json({ message: "Tweet disliked successfully", tweet });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while disliking the tweet" });
  }
};

// Reply on a tweets
exports.replyToTweet = async (req, res) => {
  try {
    const parentTweetId = req.params.id;
    const { content } = req.body;
    const tweetedBy = req.user._id;

    // Create a new tweet object with the reply content and tweetedBy user
    const replyTweet = new Tweet({
      content,
      tweetedBy,
    });

    // Save the reply tweet to the database
    await replyTweet.save();

    // Find the parent tweet and add the reply tweet's ID to the replies array
    const parentTweet = await Tweet.findByIdAndUpdate(
      parentTweetId,
      { $push: { replies: replyTweet._id } },
      { new: true }
    );

    res.json({
      message: "Tweet replied successfully",
      replyTweet,
      parentTweet,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while replying to the tweet" });
  }
};

// Get a single tweet details
exports.getTweetById = async (req, res) => {
  try {
    const tweetId = req.params.id;
    // Find the tweet by its ID and populate the referenced fields
    const tweet = await Tweet.findById(tweetId)
      .populate("tweetedBy", "-password") //excluding the password field
      .populate("likes", "-password") // excluding the password field
      .populate({
        path: "replies",
        populate: { path: "tweetedBy", select: "-password" }, //excluding the password field
      });

    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    res.json({ tweet });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the tweet" });
  }
};

// Get all tweets of a particular user
exports.getAllTweets = async (req, res) => {
  try {
    // Find all tweets and populate the referenced fields
    const tweets = await Tweet.find()
      .populate("tweetedBy", "-password") //excluding password
      .populate("likes", "-password") //excluding password
      .populate({
        path: "replies",
        populate: { path: "tweetedBy", select: "-password" },
      })
      .sort({ createdAt: -1 });
    // sorting tweets in descending order based on the createdAt field.
    // This ensures that the latest posted tweet appears first.

    res.json({ tweets });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
};

// Delete a tweet
exports.deleteTweet = async (req, res) => {
  try {
    const tweetId = req.params.id;

    // Finding the tweet by its ID
    const tweet = await Tweet.findById(tweetId);

    // Checking if the tweet exists
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    // Checking if the logged-in user created the tweet
    if (tweet.tweetedBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this tweet" });
    }

    // Deleting the tweet
    await tweet.remove();
    res.json({ message: "Tweet deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the tweet" });
  }
};

// Retweeting a tweet
exports.retweetTweet = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const userId = req.user._id;

    // Finding the tweet by its ID
    const tweet = await Tweet.findById(tweetId);

    // Checking if the tweet exists
    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    // Checking if the user has already retweeted the tweet
    const alreadyRetweeted = tweet.retweetedBy.includes(userId);
    if (alreadyRetweeted) {
      return res
        .status(400)
        .json({ error: "Tweet already retweeted by the user" });
    }

    // Adding the user ID to the retweetedBy array
    tweet.retweetedBy.push(userId);

    // Saving the updated tweet
    await tweet.save();

    res.json({ message: "Tweet retweeted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retweeting the tweet" });
  }
};
