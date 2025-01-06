const express = require("express");
const upload = require("../Authmiddleware/multer");
const {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updatesBlog,
} = require("../Controllers/blogController");
const verifyAdmin = require("../Authmiddleware/adminMiddleware");

const router = express.Router();

router.post("/create", verifyAdmin, upload.single("file"), createBlog);
router.get("/allblogs", verifyAdmin, getBlogs);
router.get("/blog/:id", verifyAdmin, getBlogById);
router.put("/updateblog/:id", verifyAdmin, upload.single("file"), updatesBlog);
router.delete("/deleteblog/:id", verifyAdmin, deleteBlog);

module.exports = router;
