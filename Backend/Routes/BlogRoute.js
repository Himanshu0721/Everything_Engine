const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  createBlog,
  getBlogs,
  getBlogById,
  blogFilterByFeature,
  deleteBlog,
  updatesBlog,
} = require("../Controllers/blogController");
const verifyAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

const directory = path.join(__dirname, "../uploads/");

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) return cb(null, true);
    cb(new Error("Only images are allowed"));
  },
  limits: { fileSize: 50 * 1024 * 1024 },
});

router.post("/create", verifyAdmin, upload.single("image"), createBlog);
router.get("/allblogs", verifyAdmin, getBlogs);
router.get("/blog/:id", getBlogById);
router.put(
  "/updateblog/:id",
  verifyAdmin,
  upload.single("updateimage"),
  updatesBlog
);
router.get("/filterbyfeature", blogFilterByFeature);
router.delete("/deleteblog/:id", verifyAdmin, deleteBlog);

module.exports = router;
