const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

router.use("/contacts", require("./contacts"));
router.use("/swagger", require("./swagger"));

module.exports = router;
