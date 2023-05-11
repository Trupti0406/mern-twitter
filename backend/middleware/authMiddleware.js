const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const User = require("../models/userModel");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized Access not Allowed" });
  }

  const authToken = authorization.replace("Bearer ", "");

  jwt.verify(authToken, JWT_SECRET, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({ error: "Unauthorized Access not Allowed" });
    }

    console.log("Decoded Token:", decodedToken); // Log the decoded token object

    User.findById(decodedToken.user.id) // Update to use decodedToken.user.id
      .then((userInDb) => {
        console.log("User in DB:", userInDb); // Log the userInDb object

        if (!userInDb) {
          return res.status(404).json({ error: "User not found" });
        }

        req.user = userInDb.toObject();
        next();
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  });
};
