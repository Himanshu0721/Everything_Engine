const express = require("express");
const upload = require("../Authmiddleware/multer");
const { createBlog } = require("../Controllers/blogController");
const verifyAdmin = require("../Authmiddleware/adminMiddleware");

const router = express.Router();

router.post("/create", verifyAdmin, upload.single("image"), createBlog);

module.exports = router;
