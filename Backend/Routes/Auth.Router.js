const express = require("express");
const {
  SingUpHandler,
  LogInHandler,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/register", SingUpHandler);
router.post("/login", LogInHandler);

module.exports = router;
