const express = require("express");
const {
  SingUpHandler,
  LogInHandler,
  getUser,
  updateUser,
} = require("../Controllers/auth.controller");

const router = express.Router();

router.post("/register", SingUpHandler);
router.post("/login", LogInHandler);
router.get("/user/:id", getUser);
router.put("/user/update/:id", updateUser);

module.exports = router;
