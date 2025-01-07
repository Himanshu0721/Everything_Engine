import { Plus } from "lucide-react";
import BlogCard from "./BlogForm";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { useEffect, useState } from "react";
import { useBlog } from "@/Context/blogContext";

export default function ContentForm() {
  const [isAdded, setIsAdded] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    date: "",
    image: null,
    description: "",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const { blogs, blogCreates, fetchBlogs } = useBlog();

  const { title, date, image, description } = blogData;

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image && image.size > 50 * 1024 * 1024) {
      alert("File size exceeds 50MB");
      return;
    }

    await blogCreates({ title, date, image, description });
    console.log(blogs);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Create Blog</h1>
        <button
          onClick={() => setIsAdded(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          <Plus size={20} />
          Add Blog
        </button>
      </div>

      {/* Add new blog */}
      <Dialog open={isAdded} onOpenChange={setIsAdded}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleChange}
                name="title"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleChange}
                name="date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleChange}
                name="image"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleChange}
                name="description"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAdded(false)}>
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  // Handle edit
                  setIsAdded(false);
                }}
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
        {blogs?.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            imageUrl={`http://localhost:5000${blog.image}`}
            date={blog.date}
            description={blog.description}
          />
        ))}
      </div>
    </>
  );
}
