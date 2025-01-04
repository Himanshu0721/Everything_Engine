const Blog = require("../Models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const image = req.file.path;

    if (!title || !date || !description) {
      return res.status(400).json({ message: "All fields are requiredd" });
    }

    const newBlog = new Blog({ title, date, image, description });
    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create blog, server error" });
  }
};

module.exports = { createBlog };
