const express = require("express");
const contactForm = require("../Controllers/contact.controller");

const router = express.Router();
router.post("/contact", contactForm);
module.exports = router;
