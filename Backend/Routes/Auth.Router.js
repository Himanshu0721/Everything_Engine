const express = require("express");
const {
  SingUpHandler,
  LogInHandler,
  logout,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/register", SingUpHandler);
router.post("/login", LogInHandler);
router.post("/logout", logout);
module.exports = router;
