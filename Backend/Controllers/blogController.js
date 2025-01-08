const Blog = require("../Models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const imageURL = `/uploads/${req.file.filename}`;

    if (!title || !date || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBlog = new Blog({ title, date, image: imageURL, description });
    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create blog, server error" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (!blogs) {
      return res.status(404).json({ message: "No blog found" });
    }

    res.status(200).json({ message: "Fetched successfully", blogs });
  } catch (error) {
    res.status(500).json({ error: "Fetched failed", error });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const existBlog = await Blog.findById(id);

    if (!existBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Single blog fetched successfully", existBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog." });
  }
};

const updatesBlog = async (req, res) => {
  const { id } = req.params;
  const { title, date, description } = req.body;

  try {
    const existBlog = await Blog.findById(id);

    if (!existBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (req.file) {
      existBlog.image = `/uploads/${req.file.filename}`;
    }

    existBlog.title = title || existBlog.title;
    existBlog.date = date || existBlog.date;
    existBlog.description = description || existBlog.description;

    await existBlog.save();

    res
      .status(200)
      .json({ message: "Blog updated successfully", blog: existBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog", error });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to blog deleted", error });
  }
};

module.exports = { createBlog, getBlogs, getBlogById, updatesBlog, deleteBlog };
