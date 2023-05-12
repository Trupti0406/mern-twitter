const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const bodyParser = require("body-parser");

// Connecting to mongoDB database through mongoose.
mongoose.connect(MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error occured while connecting to data");
});
app.use(cors());
app.use(express.json());

// Set up body-parser middleware
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

//requiring models
require("./models/userModel");
require("./models/tweetModel");

// registering user schema
app.use(require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log("Server started !");
});
