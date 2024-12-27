import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <div className="navbar fixed">
            <button onClick={toggleSidebar} className={`absolute top-5 ${isSidebarOpen ? "left-[17rem]" : "left-6"} text-black text-2xl transition-all duration-300`}>
               <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    );
};

export default Navbar;
