const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

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

//requiring models
require("./models/userModel");

// registering user schema
app.use(require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log("Server started !");
});
