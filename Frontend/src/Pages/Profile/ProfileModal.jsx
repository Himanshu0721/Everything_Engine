import { IoMdClose } from "react-icons/io";
import "./profileModal.css";

const ProfileModal = ({
  closeProfileModal,
  handleImageChange,
  isProfileModalOpen,
  setUser,
  image,
}) => {
  if (!isProfileModalOpen) return null;

  const handleClose = (e) => {
    if (e.target.className === "modal-overlay") {
      closeProfileModal();
    }
  };
  return (
    <>
      <div className="profile-modal-overlay" onClick={handleClose}>
        <div className="profile-modal-content">
          <button
            className="profile-modal-close-btn"
            onClick={closeProfileModal}>
            <IoMdClose />
          </button>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-2xl">Profile</h2>
            <div className="profile-img">
              <div className="profile-edit">
                <img
                  src={`${
                    image
                      ? image
                      : "https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0="
                  }`}
                  alt=""
                  style={{ maxWidth: "500px", display: "block" }}
                />
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="mt-1 block w-full text-sm  text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="user-info">
              <div className="flex mt-2">
                <label>Name</label>
                <input
                  className="input-name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="flex mt-2">
                <label>UserName</label>
                <input
                  type="text"
                  className="user-name"
                  placeholder="userName"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
