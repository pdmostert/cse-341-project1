const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("./data/database");

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongodb.initDb((err, db) => {
  if (err) {
    console.log("Failed to connect to the database.");
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
