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
import { useState } from "react";

export default function ContentForm() {
  const [isAdded, setIsAdded] = useState(false);
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
          <form className="space-y-4">
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
                name="title"
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
                name="description"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </form>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAdded(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // Handle edit
                setIsAdded(false);
              }}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
        <BlogCard
          title="Blog first"
          imageUrl="https://framerusercontent.com/images/vTCHP9VCr66N9bkT8uf8lJKBc.png?scale-down-to=1024"
          date="2021-09-01"
        />
      </div>
    </>
  );
}
