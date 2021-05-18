const express = require("express");
const router = express.Router();

//@route Get api/auth
//@des   Get logged in user
//@acces  Private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@route Post api/auth
//@des   Auth user $ get token
//@acces  Public

router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
