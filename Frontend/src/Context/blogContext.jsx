import { createContext, useContext, useState } from "react";

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");

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
        setBlogs(data.blogs || []);
      } else {
        setBlogs([]);
        alert("Blogs fetched successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Fetched failed blogs");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const blogCreates = async ({ title, date, feature, image, description }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("feature", feature);
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
        fetchBlogs();
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

  const updateBlog = async (id, { title, date, image, description }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("image", image);
    formData.append("description", description);

    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/updateblog/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Blog updated successfully: ", data);
        fetchBlogs();
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Error updating blog");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/deleteblog/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        fetchBlogs();
      } else {
        const errorData = await response.json();
        console.error("Failed to delete the blog:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while deleting the blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blogCreates,
        fetchBlogs,
        updateBlog,
        deleteBlog,
        loading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
