const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { validationResult, check } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

//@route POST api/contacts
//@des   Regiter all users contats
//@acces  user  on contacts

router.get("/", auth, async (req, res) => {
  // res.send("Get all contact");

  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST api/contacts
//@des   Add new contats
//@acces  user  on contacts

router.post(
  "/",
  [auth, [check("name", "Name is required ").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server not found");
    }
  }
);

//@route POST api/contacts:id
//@des   Update contats
//@acces  user  on contacts

router.put("/:id", auth, async (req, res) => {
  // res.send("Updatecontact");
  const { name, email, phone, type } = req.body;

  //Build Contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server not found");
  }
});

//@route Delete api/contacts:id
//@des   Delete contats
//@acces  user  on contacts

router.delete("/:id", auth, async (req, res) => {
  // res.send("Updatecontact");
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact has been remove" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server not found");
  }
});

module.exports = router;
