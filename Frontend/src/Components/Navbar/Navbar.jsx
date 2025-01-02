import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => (
  <button
    onClick={toggleSidebar}
    className={`m-4  mt-4 transition-all duration-300 ${
      isSidebarOpen ? "ml-[17rem]" : "ml-0"
    }`}>
    <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
  </button>
);

export default Navbar;
