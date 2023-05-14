const User = require("../models/userModel");
const upload = require("./uploadController");

// Getting single user
exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .populate("followers", "_id, name, username, profilePicture")
      .populate("following", "_id, name, username, profilePicture");
    // Populating followers and following data withselected fields
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some server error occured");
  }
};

// To Follow a user
exports.followUser = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const userToFollowId = req.params.id;

    // Checking if the user is trying to follow themselves
    if (loggedInUserId.equals(userToFollowId)) {
      return res.status(400).json({ error: "You cannot follow yourself" });
    }

    const loggedInUser = await User.findById(loggedInUserId);
    const userToFollow = await User.findById(userToFollowId);

    // Checking if the user to follow exists
    if (!userToFollow) {
      return res.status(404).json({ error: "User not found" });
    }

    // Checking if the user is already following the user to follow
    if (loggedInUser.following.includes(userToFollowId)) {
      return res
        .status(400)
        .json({ error: `You are already following ${userToFollow.username}` });
    }

    loggedInUser.following.push(userToFollowId);
    userToFollow.followers.push(loggedInUserId);

    await loggedInUser.save();
    await userToFollow.save();

    res
      .status(200)
      .json({ success: `Followed ${userToFollow.username} Successfully!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// To Unfollow a user
exports.unfollowUser = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const userToUnfollowId = req.params.id;

    // Checking if the user is trying to unfollow themselves
    if (loggedInUserId.equals(userToUnfollowId)) {
      return res.status(400).json({ error: "You cannot unfollow yourself" });
    }

    const loggedInUser = await User.findById(loggedInUserId);
    const userToUnfollow = await User.findById(userToUnfollowId);

    // Checking if the user to unfollow exists
    if (!userToUnfollow) {
      return res.status(404).json({ error: "User not found" });
    }

    // Checking if the user is NOT following the user to unfollow
    if (!loggedInUser.following.includes(userToUnfollowId)) {
      return res.status(400).json({ error: "You are not following this user" });
    }

    // Removing the user to unfollow from the following list of the logged-in user
    loggedInUser.following = loggedInUser.following.filter(
      (id) => id.toString() !== userToUnfollowId.toString()
    );

    // Remove the logged-in user from the followers list of the user to unfollow
    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== loggedInUserId.toString()
    );

    await loggedInUser.save();
    await userToUnfollow.save();

    res
      .status(200)
      .json({ success: `Unfollowed @${userToUnfollow.username} successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Edit user deatails
exports.editUserDetails = async (req, res) => {
  try {
    const { name, dateOfBirth, location } = req.body;
    const { id } = req.params;

    //Fetching the user whose details we want to edit from database
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Upadting the user details
    user.name = name;
    user.dateOfBirth = dateOfBirth;
    user.location = location;

    //Saving the edited user in database
    await user.save();
    res.status(200).json({ success: "User details updated successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//This API will return list of all the tweets tweeted by a user
exports.getUserTweetsList = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID and populate their tweets
    const user = await User.findById(id).populate("tweets");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const tweets = user.tweets;

    res.status(200).json({ tweets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// This api is for uploading profile picture of a certain user

exports.uploadProfilePic = (req, res) => {
  const userId = req.params.id;

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      // Save the image location in the user's profilePicture field
      user.profilePicture = `/images/${req.file.filename}`;
      await user.save();

      return res
        .status(200)
        .json({ message: "Profile picture uploaded successfully." });
    } catch (error) {
      return res.status(500).json({ error: "Server error." });
    }
  });
};
