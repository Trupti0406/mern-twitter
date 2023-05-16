const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//Requiring models
require("./models/userModel");
require("./models/tweetModel");

// Requiring routes
app.use(require("./routes/userRoute"));
app.use(require("./routes/authRoute"));
app.use(require("./routes/tweetRoute"));

// Require and initialize the database connection
require("./database/db");

app.listen(PORT, () => {
  console.log("Server started !");
});
