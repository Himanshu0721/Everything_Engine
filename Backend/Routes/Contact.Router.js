const express = require("express");
const contactForm = require("../Controllers/contact.controller");
const feedBack = require("../Controllers/feedback.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/feedback", feedBack);
router.post("/contact", contactForm);
module.exports = router;
