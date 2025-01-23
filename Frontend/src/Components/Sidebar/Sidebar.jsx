import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import explore from "../../assets/explore.svg";
import createbot from "../../assets/createbot.svg";
import allchats from "../../assets/allchats.svg";
import yourbots from "../../assets/yourbots.svg";
import subscribe from "../../assets/subscribe.svg";
import creators from "../../assets/creators.svg";
import profile from "../../assets/profile.svg";
import setting from "../../assets/setting.svg";
import feedback from "../../assets/feedback.svg";
// import contact from "../../assets/contact.svg";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
  <aside
    className={`fixed top-0 transition-transform duration-300 ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } w-71 h-full z-40 bg-white overflow-y-auto shadow border-r-4`}>
    <div className={`${styles.sidebar} dark:bg-[#181818]`}>
      <div
        className={`${styles.logo} dark:bg-[#242424]`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <img
          src={logo}
          style={{ width: "40px", height: "40px", marginRight: "6px" }}
        />
        <div className="text-base md:text-base lg:text-lg xl:text-xl">
          {" "}
          <Link to="/">TEN - Everything AI </Link>
        </div>
        <button onClick={toggleSidebar} className={`pl-[30px] pt-[5px]`}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl text-gray-700 dark:text-white"
          />
        </button>
      </div>
      <nav className={styles.nav}>
        <div className="lg:flex space-x-5 border-b-2 border-gray-200 p-4">
          <Link to="/explore">
            <button className="w-32 bg-gray-100 dark:bg-[#242424] dark:hover:bg-slate-600 dark:text-white text-[#000] px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black transition text-sm  items-start mb-2 mt-2">
              <img
                className="filter backdrop-grayscale"
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
            <button className="w-32 bg-gray-100 text-[#000] dark:bg-[#242424] dark:hover:bg-slate-600 px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black transition text-sm items-start mb-2 mt-2">
              <img
                src={createbot}
                style={{
                  marginLeft: "10px",
                }}
              />
              <div className="flex flex-row justify-evenly items-center">
                <span className="text-sm sm:text-sm md:text-base lg:text-lg dark:text-white">
                  Create Bot
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 dark:text-white">
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
                className="flex items-center space-x-2 border-gray-200 gap-10 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 p-4 hover:p-4"
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
                  All Bots
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/tenBot"
                className="flex items-center space-x-2  border-gray-200 dark:border-white gap-10 hover:bg-gray-100 dark:hover:bg-gray-900 p-4"
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
                  Ten Bot
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/subscribe"
                className="flex items-center space-x-2 border-b border-gray-200 gap-10 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 p-4">
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
                className="flex items-center space-x-2 border-b border-gray-200 dark:border-white gap-10 hover:bg-gray-100 dark:hover:bg-gray-900 p-4">
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
                className="flex items-center space-x-2 border-b border-gray-200 dark:border-white gap-10 hover:bg-gray-100 dark:hover:bg-gray-900 p-4">
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
                className="flex items-center space-x-2 border-gray-200 dark:border-white dark:hover:bg-gray-900 gap-10 hover:bg-gray-100 p-4"
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
                className="flex items-center space-x-2 border-b-2 border-gray-200 gap-10 dark:border-white dark:hover:bg-gray-900 hover:bg-gray-100 p-4">
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
            <li>
              <Link
                to="/contact"
                className="flex items-center space-x-2 border-b-2 border-gray-200 gap-10 hover:bg-gray-100 p-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-black-300"
                  style={{
                    height: "1.2rem",
                    width: "1.2rem",
                  }}
                />
                <span className="text-sm sm:text-sm md:text-base lg:text-lg">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="bg-gray-100 mt-4">
          <div className="flex flex-col gap-2 bg-white dark:bg-[#181818]">
            <div className="flex flex-row items-center gap-4 ml-12">
              <p className="flex items-center gap-4 cursor-pointer dark:text-[#a5acac] hover:text-[#5d5cdd] text-sm sm:text-sm md:text-base">
                <Link to="https://www.linkedin.com" target="_blank">
                  Follow Us
                  <span className="text-[#5d5cde] mx-3">
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
                </Link>
              </p>
              <p className="flex items-center gap-4 cursor-pointer dark:text-[#a5acac] hover:text-[#5d5cdd] text-sm sm:text-sm md:text-base">
                <Link to="info@entrepreneurshipnetwork.net" target="_blank">
                  Join Us
                  <span className="text-[#5d5cde] mx-3">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{
                        color: "#5d5cde",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setIsJoin(true)}
                      onMouseLeave={() => setIsJoin(false)}
                    />
                  </span>
                </Link>
              </p>
            </div>

            <div>
              <ul className="flex  flex-wrap mb-4 list-disc pl-5 text-gray-600 pr-4 items-center  text-xs sm:text-sm ml-4 mt-0">
                <li className=" ml-6">
                  <Link
                    to="/about"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    About
                  </Link>
                </li>

                <li className=" ml-4">
                  <Link
                    to="/blog"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    Blog
                  </Link>
                </li>

                <li className=" ml-4">
                  <Link
                    to="/careers"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    Careers
                  </Link>
                </li>

                <li className=" ml-6">
                  <Link
                    to="/help-center"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    Help Center
                  </Link>
                </li>

                <li className=" ml-4">
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>

                <li className=" ml-6">
                  <Link
                    to="/term-condition"
                    className="text-gray-600 dark:text-[#a5acac] hover:text-gray-900">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
