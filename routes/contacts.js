const express = require("express");
const router = express.Router();

//@route POST api/contacts
//@des   Regiter all users contats
//@acces  user  on contacts

router.get("/", (req, res) => {
  res.send("Get all contact");
});

//@route POST api/contacts
//@des   Add new contats
//@acces  user  on contacts

router.post("/", (req, res) => {
  res.send("Get all contact");
});

//@route POST api/contacts:id
//@des   Update contats
//@acces  user  on contacts

router.put("/:id", (req, res) => {
  res.send("Updatecontact");
});

//@route Delete api/contacts:id
//@des   Delete contats
//@acces  user  on contacts

router.delete("/:id", (req, res) => {
  res.send("Updatecontact");
});

module.exports = router;
