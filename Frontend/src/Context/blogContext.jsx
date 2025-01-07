import { createContext, useContext, useState } from "react";

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");

  const blogCreates = async ({ title, date, image, description }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("image", image);
    formData.append("description", description);
    try {
      const response = await fetch("http://localhost:5000/api/blogs/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog created successfully: ", data);
        setBlogs({
          title: "",
          date: "",
          image: null,
          description: "",
        });
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Error creating blog");
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/blogs/allblogs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBlogs(data.blogs);
      } else {
        alert("Blogs fetched successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Fetched failed blogs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, blogCreates, fetchBlogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
