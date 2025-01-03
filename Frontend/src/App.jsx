import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Privacy from "./Pages/privacy/Privacy";
import TermCondition from "./Pages/termCondition/TermCondition";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Components/Login/Dashboard";
import Explore from "./Pages/Explorer/Explore";
import CreateBot from "./Pages/CreateBot/CreateBot";
import Blog from "./Pages/BLog/Blog";
import ComingSoon from "./Pages/BLog/ComingSoon";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isUser, setIsUser] = useState(false);

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

  const location = window.location.pathname;

  return (
    <BrowserRouter>
      <div className={`${location !== "/blog" ? "relative flex" : ""}`}>
        <button
          onClick={toggleSidebar}
          className={`absolute top-5 ${
            location === "/blog"
              ? "hidden"
              : isSidebarOpen
              ? "left-[17rem]"
              : "left-6"
          } text-black text-2xl  transition-all duration-300 z-50`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {location !== "/blog" && <Navbar toggleSidebar={toggleSidebar} />}

        <div
          className={`fixed top-0 ${
            isSidebarOpen && location !== "/blog" ? "left-0" : "-left-full"
          } w-64 h-full bg-transparent  z-40 transition-transform duration-300 lg:left-0 lg:static`}
        >
          {location !== "/blog" && (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          )}
        </div>
        <div
          className={`${
            location !== "/blog"
              ? "flex-1 p-0 pr-0 transition-all duration-300 xs:pl-[20%] sm:pl-[20%] md:pl-[20%] xl:pl-[5%]"
              : ""
          } ${
            isSidebarOpen && window.innerWidth < 1024
              ? "opacity-60 pointer-events-none "
              : "opacity-100"
          }`}
        >
          {/* CONTINUE WITH YOUR PERSPECTIVE ROUTING BELOW */}
          <Routes>
            <Route path="/blog" element={<Blog />} />
            {location !== "/blog" && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/term-condition" element={<TermCondition />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-bot" element={<CreateBot />} />
                <Route path="*" element={<ComingSoon />} />
              </>
            )}
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
