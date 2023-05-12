const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

// Connecting to MongoDB database through mongoose.
mongoose.connect(MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error occurred while connecting to the database");
});
