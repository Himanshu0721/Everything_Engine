import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import explore from "../../assets/explore.svg";
import createbot from "../../assets/createbot.svg";
import allchats from "../../assets/allchats.svg";
import yourbots from "../../assets/yourbots.svg";
import subscribe from "../../assets/subscribe.svg";
import creators from "../../assets/creators.svg";
import profile from "../../assets/profile.svg";
import setting from "../../assets/setting.svg";
import Modal from "../Modal/Modal";
import feedback from "../../assets/feedback.svg";

const Sidebar = ({ isSidebarOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isJoin, setIsJoin] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`sidebar fixed transition-transform duration-300 ease-in-out ${
        isSidebarOpen
          ? "transform-x-0 open"
          : "transform -translate-x-full closed"
      }`}>
      <div className={styles.sidebar}>
        <div
          className={styles.logo}
          style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            style={{ width: "40px", height: "40px", marginRight: "6px" }}
          />
          <div className="text-base md:text-base lg:text-lg xl:text-xl">
            <Link to={"/"}>TEN - Everything AI</Link>
          </div>
        </div>

        <nav className={styles.nav}>
          <div className="lg:flex space-x-2 border-b-2 border-gray-200 p-4">
            <Link to="/explore">
              <button className="w-32 bg-gray-100 text-[#000] px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black transition text-sm  items-start mb-2 mt-2">
                <img
                  src={explore}
                  style={{
                    height: "28px",
                    width: "28px",
                    display: "block",
                    flex: "none",
                  }}
                />
                <div className="flex flex-row justify-evenly items-center ">
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Explore
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-6 ml-10">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </Link>

            <Link to="/create-bot">
              <button className="w-32 bg-gray-100 text-[#000] px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black transition text-sm items-start mb-2 mt-2">
                <img
                  src={createbot}
                  style={{
                    marginLeft: "10px",
                  }}
                />
                <div className="flex flex-row justify-evenly items-center">
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Create Bot
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          <section>
            <ul>
              <li className="w-100 ">
                <Link
                  to="/chats"
                  className="flex items-center space-x-2 border-gray-200 gap-10 hover:bg-gray-100 p-4 hover:p-4"
                  style={{ borderBottom: "7px solid #e5e7eb" }}>
                  <img
                    src={allchats}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    All Chats
                  </span>
                </Link>
              </li>
              <Modal isOpen={isModalOpen} closeModal={closeModal} />
              <li onClick={openModal}>
                <Link
                  to=""
                  className="flex items-center space-x-2  border-gray-200 gap-10 hover:bg-gray-100 p-4"
                  style={{ borderBottom: "7px solid #e5e7eb" }}>
                  <img
                    src={yourbots}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Your Bots
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/subscribe"
                  className="flex items-center space-x-2 border-b border-gray-200 gap-10 hover:bg-gray-100 p-4">
                  <img
                    src={subscribe}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Subscribe{" "}
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/creators"
                  className="flex items-center space-x-2 border-b border-gray-200 gap-10 hover:bg-gray-100 p-4">
                  <img
                    src={creators}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    {" "}
                    Creators
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 border-b border-gray-200 gap-10 hover:bg-gray-100 p-4">
                  <img
                    src={profile}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    {" "}
                    Profile
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/settings"
                  className="flex items-center space-x-2 border-gray-200 gap-10 hover:bg-gray-100 p-4"
                  style={{ borderBottom: "7px solid #e5e7eb" }}>
                  <img
                    src={setting}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <ul>
              <li>
                <Link
                  to="/feedback"
                  className="flex items-center space-x-2 border-b-2 border-gray-200 gap-10 hover:bg-gray-100 p-4">
                  <img
                    src={feedback}
                    style={{
                      height: "28px",
                      width: "28px",
                      display: "block",
                      flex: "none",
                    }}
                  />
                  <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                    Send Feedback
                  </span>
                </Link>
              </li>
            </ul>
          </section>

          <section className="bg-gray-100 mt-4">
            <div className="flex flex-col gap-2 bg-white">
              <div className="flex flex-row items-center gap-4 ml-12">
                <p
                  className="flex items-center gap-4 cursor-pointer hover:text-gray-600 text-sm sm:text-sm md:text-base"
                  onClick={() =>
                    (window.location.href = "https://www.linkedin.com")
                  }>
                  Follow Us
                  <span className="text-blue-500">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{
                        fontSize: "1.3rem",
                        color: "#0077b5",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                  </span>
                </p>
                <p
                  className="flex items-center gap-4 cursor-pointer hover:text-gray-600 text-sm sm:text-sm md:text-base"
                  onClick={() =>
                    (window.location.href = "https://www.linkedin.com")
                  }>
                  Join Us
                  <span className="text-blue-500">
                    <FontAwesomeIcon
                      onClick={() =>
                        (window.location.href =
                          "mailto:info@entrepreneurshipnetwork.net")
                      }
                      icon={faEnvelope}
                      style={{
                        color: "#f77a32",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setIsJoin(true)}
                      onMouseLeave={() => setIsJoin(false)}
                    />
                  </span>
                </p>
              </div>

              <div>
                <ul className="flex flex-wrap mb-4 list-disc pl-5 text-gray-600 pr-4 items-center  text-xs sm:text-sm ml-4 mt-0">
                  <li className=" ml-6">
                    <a
                      href="/about"
                      className="text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>

                  <li className=" ml-4">
                    <a
                      href="/blog"
                      className="text-gray-600 hover:text-gray-900">
                      Blog
                    </a>
                  </li>

                  <li className=" ml-4">
                    <a
                      href="/careers"
                      className="text-gray-600 hover:text-gray-900">
                      Careers
                    </a>
                  </li>

                  <li className=" ml-6">
                    <a
                      href="/help-center"
                      className="text-gray-600 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>

                  <li className=" ml-4">
                    <a
                      href="/privacy-policy"
                      className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>

                  <li className=" ml-6">
                    <a
                      href="/term-condition"
                      className="text-gray-600 hover:text-gray-900">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
