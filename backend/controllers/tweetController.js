const Tweet = require("../models/tweetModel");

// Create a new tweet
exports.createTweet = async (req, res) => {
  try {
    const { content } = req.body;
    const { _id: tweetedBy } = req.user;

    // Verify if the content is present
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    // Get the uploaded image file if available
    let image = null;
    if (req.file) {
      image = req.file.path;
    }

    // Create a new tweet object with content and image
    const tweet = new Tweet({
      content,
      tweetedBy,
      image,
    });

    // Save the tweet into the database
    await tweet.save();

    res.status(201).json({ message: "Tweet created successfully", tweet });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the tweet" });
  }
};
