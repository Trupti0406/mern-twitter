const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

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
