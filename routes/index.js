const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // #swagger.tags = ['Home']
  // #swagger.description = 'Endpoint to return a welcome message.'
  res.send("Welcome to the Home Page!");
});

router.use("/contacts", require("./contacts"));
router.use("/swagger", require("./swagger"));

module.exports = router;
