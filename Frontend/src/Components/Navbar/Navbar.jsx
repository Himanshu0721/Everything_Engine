import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => (
  <button
    onClick={toggleSidebar}
    className={`fixed  w-[20px] m-4 pl-2 z-10 transition-all duration-300 ${
      isSidebarOpen ? "ml-[17rem]" : "ml-4"
    }`}>
    <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
  </button>
);

export default Navbar;
