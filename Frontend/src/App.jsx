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
import Dashboard from "./Components/Login/Dashboard";
import Explore from "./Pages/Explorer/Explore";
import CreateBot from "./Pages/CreateBot/CreateBot";
import Subscribe from "./Pages/Subscribe/Subscribe";
import FeedBack from "./Pages/Feedback/FeedBack";
import Blog from "./Pages/BLog/Blog";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const location = window.location.pathname;

  return (
    <BrowserRouter>
      {location !== "/blog" && !isSidebarOpen && (
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      )}
      {isSidebarOpen && location !== "/blog" && (
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <main
        className={
          location !== "/blog"
            ? `flex-1 p-0 transition-all duration-300 ${
                isSidebarOpen && window.innerWidth > 1024
                  ? "pl-[21rem]"
                  : "pl-0"
              }`
            : ""
        }
      >
        <Routes>
          <Route path="/blog" element={<Blog />} />
          {location !== "/blog" && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/term-condition" element={<TermCondition />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/create-bot" element={<CreateBot />} />
              <Route path="/register" element={<Register />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/feedback" element={<FeedBack />} />
            </>
          )}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
