const express = require("express");
const {
  SingUpHandler,
  LogInHandler,
  logout,
  getUser,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/register", SingUpHandler);
router.post("/login", LogInHandler);
router.get("/user/:id", getUser);
router.post("/logout", logout);
module.exports = router;
