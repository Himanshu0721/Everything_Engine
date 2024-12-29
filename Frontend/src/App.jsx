import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Pages/privacy/Privacy";
import TermCondition from "./Pages/termCondition/TermCondition";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  {
    /* It is for sidebar */
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <BrowserRouter>
      <div className="relative flex">
        <button
          onClick={toggleSidebar}
          className={`absolute top-5 ${
            isSidebarOpen ? "left-[17rem]" : "left-6"
          } text-black text-2xl  transition-all duration-300 z-50`}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div
          className={`fixed top-0 ${
            isSidebarOpen ? "left-0" : "-left-full"
          } w-64 h-full bg-transparent  z-40 transition-transform duration-300 lg:left-0 lg:static`}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div
          className={`flex-1 p- pr-0 transition-all duration-300 xs:pl-[20%] sm:pl-[20%] md:pl-[20%] xl:pl-[5%] ${
            isSidebarOpen && window.innerWidth < 1024
              ? "opacity-60 pointer-events-none "
              : "opacity-100"
          }`}>
          {/* CONTINUE WITH YOUR PERSPECTIVE ROUTING BELOW */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/term-condition" element={<TermCondition />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
