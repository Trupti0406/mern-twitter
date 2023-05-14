const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "./tweetimages",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `tweet-image-${uniqueSuffix}${fileExtension}`);
  },
});
// Multer file filter
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [".jpg", ".jpeg", ".png"];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (allowedFileTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png files are allowed."));
  }
};

// Multer upload instance
const upload = multer({ storage, fileFilter }).single("image");

const Tweet = require("../models/tweetModel");

// Create a new tweet
exports.createTweet = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request File:", req.file);
    const { content } = req.body;
    const { _id: tweetedBy } = req.user;

    // Verify if the content is present
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    // Call the upload middleware to handle the file upload
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error("Multer Error:", err);
        return res.status(400).json({ error: "Error uploading file" });
      } else if (err) {
        console.error("Upload Error:", err);
        return res.status(400).json({ error: err.message });
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
    });
  } catch (error) {
    console.error("Create Tweet Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the tweet" });
  }
};
