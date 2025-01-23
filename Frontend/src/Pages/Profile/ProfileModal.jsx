import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { X } from "lucide-react";
import "./profileModal.css";
import { UserContext } from "../../Context/userContext";

const ProfileModal = ({
  closeProfileModal,
  handleImageChange,
  isProfileModalOpen,
  image,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { updateUser } = useContext(UserContext);
  const id = localStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, username, email);
    closeProfileModal();
  };

  if (!isProfileModalOpen) return null;

  const handleClose = (e) => {
    if (e.target.className === "modal-overlay") {
      closeProfileModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}>
      <Card className="w-full max-w-md relative bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={closeProfileModal}>
          <X className="h-4 w-4" />
        </Button>

        <CardHeader>
          <CardTitle className="text-center">Profile</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={
                      image ||
                      "https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Name</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileModal;
