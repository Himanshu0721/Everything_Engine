import { useState } from "react";
import "./profile.css";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [name, setName] = useState("Name");
  const [userName, setUserName] = useState("userName");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  return (
    <>
      <div className="profile-section">
        <header className="header">
          <h2>Profile</h2>
        </header>
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-info">
              <div className="profile-img">
                <img
                  src={`${
                    image
                      ? image
                      : "https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
                  } `}
                  alt="img"
                />
                <div className="info">
                  <h2>{name}</h2>
                  <span>{userName}</span>
                </div>
              </div>
            </div>
            <div>
              <ProfileModal
                isProfileModalOpen={isProfileModalOpen}
                closeProfileModal={closeProfileModal}
                handleImageChange={handleImageChange}
                image={image}
              />
              <button className="edit-btn" onClick={openProfileModal}>
                Edit
              </button>
            </div>
          </div>
          <div className="follow-container">
            <div className="follow">
              <span>0</span>
              <span>Followers</span>
            </div>
            <div className="follow">
              <span>0</span>
              <span>Following</span>
            </div>
          </div>
          <div className="bots">
            <div className="bots-btn">
              <button>0 Bots</button>
              <button>0 Posts</button>
              <button>0 Follow bots</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
