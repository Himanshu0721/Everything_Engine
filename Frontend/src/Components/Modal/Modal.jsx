import { IoMdClose } from "react-icons/io";
import "./modal.css";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeModal}>
          <IoMdClose />
        </button>
        <h1>Coming Soon ! </h1>
      </div>
    </div>
  );
};

export default Modal;
