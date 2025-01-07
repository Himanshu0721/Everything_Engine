const express = require("express");
const upload = require("../middlewares/multer");
const {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updatesBlog,
} = require("../Controllers/blogController");
const verifyAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

router.post("/create", verifyAdmin, upload.single("file"), createBlog);
router.get("/allblogs", verifyAdmin, getBlogs);
router.get("/blog/:id", verifyAdmin, getBlogById);
router.put("/updateblog/:id", verifyAdmin, upload.single("file"), updatesBlog);
router.delete("/deleteblog/:id", verifyAdmin, deleteBlog);

module.exports = router;
