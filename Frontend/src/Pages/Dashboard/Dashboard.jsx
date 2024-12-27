import { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import "./dashboard.css";
import Modal from "./Modal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="container">
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
        <div className="container-info">
          <img
            className="dashboard-img"
            src="https://psc2.cf2.poecdn.net/assets/_next/static/media/poeFullMultibot.aa56caf5.svg"
            alt=""
          />
          <div>
            <div className="btn-container">
              <button>
                <TbMessageChatbot /> Assistant
              </button>
              <button>
                <TbMessageChatbot /> Web-Search
              </button>
              <button>Claude-3.5-Sonnet</button>
              <button onClick={openModal}>More</button>
            </div>
          </div>
          <div className="search-container">
            <input
              className="search-box"
              type="search"
              placeholder="Start a new chat"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
