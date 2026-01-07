//require dependencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const process = require("process");
const mongodb = require("./data/database");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

// Enabling CORS for all routes
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//importing routes
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log("Failed to connect to the database.");
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
