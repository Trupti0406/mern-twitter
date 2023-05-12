const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const salt = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: securePassword,
    }).then(res.json({ success: true }));
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password } = req.body;

  try {
    const userData = await User.findOne({ username });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userData.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials" });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    return res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
