import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "../../../Components/ui/card";
import { Button } from "../../../Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../Components/ui/dialog";
import { Trash2 } from "lucide-react";
import { useBlog } from "../../../Context/blogContext";

const BlogCard = ({ title, id, date, feature, imageUrl, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    title: title,
    date: date,
    feature: feature,
    image: null,
    description: description,
  });

  const { deleteBlog } = useBlog();

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
    }
  };

  const { updateBlog } = useBlog();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBlog(id, formData);
    setIsEdit(false);
    setIsOpen(false);
  };

  return (
    <>
      <Card className="max-w-md cursor-pointer hover:shadow-lg transition-shadow">
        <div className="relative" onClick={() => setIsOpen(true)}>
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          )}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                confirmDelete(id);
              }}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 mt-2">{date}</p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent aria-describedby="dialog-description">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>

            <Button
              onClick={() => {
                setIsEdit(true);
              }}>
              Edit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEdit} onOpenChange={setIsEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
          </DialogHeader>
          <form
            className="space-y-4"
            encType="multipart/form-data"
            onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="feature"
                className="block text-sm font-medium text-gray-700">
                Feature
              </label>
              <select
                id="feature"
                value={formData.feature}
                onChange={handleInputChange}
                name="feature"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="All">All</option>
                <option value="Product">Product</option>
                <option value="Announcement">Announcement</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="updateimage"
                className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                id="updateimage"
                name="updateimage"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogCard;
