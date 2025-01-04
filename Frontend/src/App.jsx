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
import Admin from "./Components/Admin/Admin";
import Creators from "./Pages/creators/Creators";
import Settings from "./Pages/Settings/Settings";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="*"
          element={
            <>
              {!isSidebarOpen && (
                <Navbar
                  toggleSidebar={toggleSidebar}
                  isSidebarOpen={isSidebarOpen}
                />
              )}
              {isSidebarOpen && (
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
              )}
              <main
                className={`flex-1 p-0 transition-all duration-300 ${
                  isSidebarOpen && window.innerWidth > 1024
                    ? "pl-[21rem]"
                    : "pl-0"
                }`}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="/term-condition" element={<TermCondition />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/creators" element={<Creators />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/create-bot" element={<CreateBot />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/subscribe" element={<Subscribe />} />
                  <Route path="/feedback" element={<FeedBack />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
