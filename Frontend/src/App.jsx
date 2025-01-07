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
import Explore from "./Pages/Explorer/Explore";
import CreateBot from "./Pages/CreateBot/CreateBot";
import Subscribe from "./Pages/Subscribe/Subscribe";
import FeedBack from "./Pages/Feedback/FeedBack";
import Blog from "./Pages/BLog/Blog";
import Admin from "./Components/Admin/Admin";
import Creators from "./Pages/creators/Creators";
import Settings from "./Pages/Settings/Settings";
import HelpCenter from "./Pages/helpCenter/HelpCenter";
import General from "./Pages/helpCenter/general/General";
import FaqGeneral from "./Pages/helpCenter/general/faqGeneral";
import CreatorMonetization from "./Pages/helpCenter/creatorMonetization/CreatorMonetization";
import Subscriptions from "./Pages/helpCenter/subscriptions/Subscriptions";
import FaqSubscriptions from "./Pages/helpCenter/subscriptions/faqSubscriptions";
import FaqCreator from "./Pages/helpCenter/creatorMonetization/faqCreator";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import ProtectedRoute from "./Components/ProtectedRoute";

import Contact from "./Pages/Contact/Contact";
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

  return <Home />;
}

export default App;
