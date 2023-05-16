const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

//SingnUp Route of User
exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).json("Fill All Mendetory Field");
  }
  User.findOne({ username: username }).then((userExist) => {
    if (userExist) {
      return res.status(502).json({ message: "User Already Exist" });
    }
    bcrypt
      .hash(password, 16)
      .then((hashPass) => {
        const newUser = new User({
          name,
          username,
          email,
          password: hashPass,
        });
        newUser
          .save()
          .then(() => {
            const { password, ...others } = newUser._doc;
            console.log(others);
            return res.status(201).json(others);
          })
          .catch((err) => {
            return res.status(500).json(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  });
};

//Login Route of user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(402).json({ message: "Fill All Mendetory Field" });
  }
  User.findOne({ username: username }).then((user) => {
    if (!user) {
      return res.status(402).json({ message: "User Not Found" });
    }
    bcrypt
      .compare(password, user.password)
      .then((userMatched) => {
        if (userMatched) {
          const token = JWT.sign({ id: user._id }, JWT_SECRET);

          const userInfo = {
            id: user._id,
            name: user.name,
            email: user.email,
            follower: user.followers,
            following: user.following,
            location: user.location,
            dateOfBirth: user.dateOfBirth,
            image: user.image,
            username: user.username,
            profilePicture: user.profilePicture,
            tweets: user.tweets,
          };
          return res
            .status(200)
            .json({ result: { user: userInfo, token: token } });
        } else {
          return res.status(401).json({ message: "Invalid Credential" });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(501).json({ message: "Something Goes Wrong" });
      });
  });
};
