const express = require("express");
const contactForm = require("../Controllers/contact.controller");
const feedBack = require("../Controllers/feedback.controller");
const authMiddleware = require("../Authmiddleware/authMiddleware");

const router = express.Router();
router.post("/feedback", authMiddleware, feedBack);
router.post("/contact", authMiddleware, contactForm);
module.exports = router;
