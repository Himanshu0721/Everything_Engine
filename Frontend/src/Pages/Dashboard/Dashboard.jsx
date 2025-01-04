import { useState } from "react";
import "./dashboard.css";
import logo from "../../assets/logo.svg";

import Modal from "../../Components/Modal/Modal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="dashboard-container">
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
        <div className="container-info">
          <img className="dashboard-img" src={logo} alt="img" />
          <h2 className="title">TEN - EVERYTHING AI</h2>
          <div>
            <div className="btn-container">
              <button className="dashboard-btn">Assistant</button>
              <button className="dashboard-btn">Web-Search</button>
              <button className="dashboard-btn">Claude-3.5-Sonnet</button>
              <button className="dashboard-btn" onClick={openModal}>
                More
              </button>
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
