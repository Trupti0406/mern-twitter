const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

// Get a single user detail
router.get("/api/user/:id", authMiddleware, userController.getSingleUser);

//Follow a user
router.put("/api/user/:id/follow", authMiddleware, userController.followUser);

//Unfollow a user
router.put(
  "/api/user/:id/unfollow",
  authMiddleware,
  userController.unfollowUser
);

// To Edit user details
router.put("/api/user/:id", authMiddleware, userController.editUserDetails);

// Get user tweetlist for a particular user
router.post(
  "/api/user/:id/tweets",
  authMiddleware,
  userController.getUserTweetsList
);
// For uploading the user's profile picture
router.post(
  "/api/user/:id/uploadpfp",
  authMiddleware,
  userController.uploadProfilePic
);

module.exports = router;
