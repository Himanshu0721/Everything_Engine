const express = require("express");
const contactForm = require("../Controllers/contact.controller");
const feedBack = require("../Controllers/feedback.controller");

const router = express.Router();
router.post("/feedback", feedBack);
router.post("/contact", contactForm);
module.exports = router;
