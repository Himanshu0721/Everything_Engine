const express = require("express");
const { adminLogin, registerAdmin } = require("../Controllers/adminController");
const router = express.Router();

router.post("/login", adminLogin);
router.post("/register", registerAdmin);

module.exports = router;
