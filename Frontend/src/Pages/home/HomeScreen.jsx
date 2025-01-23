import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Privacy from "../privacy/Privacy";
import TermCondition from "../termCondition/TermCondition";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../Profile/Profile";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Login/Register";
import Explore from "../Explorer/Explore";
import CreateBot from "../CreateBot/CreateBot";
import Subscribe from "../Subscribe/Subscribe";
import FeedBack from "../Feedback/FeedBack";
import Creators from "../creators/Creators";
import Settings from "../Settings/Settings";
import HelpCenter from "../helpCenter/HelpCenter";
import General from "../helpCenter/general/General";
import FaqGeneral from "../helpCenter/general/faqGeneral";
import CreatorMonetization from "../helpCenter/creatorMonetization/CreatorMonetization";
import Subscriptions from "../helpCenter/subscriptions/Subscriptions";
import FaqSubscriptions from "../helpCenter/subscriptions/faqSubscriptions";
import FaqCreator from "../helpCenter/creatorMonetization/faqCreator";
import Contact from "../Contact/Contact";
import AdminLogin from "../../Components/Admin/AdminLogin/AdminLogin";
import ProtectedRoute from "../../Components/ProtectedRoute";
import Admin from "@/Components/Admin/Admin";
import Blog from "../BLog/Blog";
import Dashboard from "../Dashboard/Dashboard";
import BlogContent from "../BLog/InsideBlogContent";
import UserGuidelines from "../Usage-guidelines/UserGuidelines";
import AboutPage from "../about/About";
import ChatBot from "@/Components/Bot/ChatBot";
import ComingSoon from "../ComingSoon";
import TenBot from "../TenBot/TenBot";

const HomeScreen = () => {
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
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogContent />} />
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
                className={`flex-1  transition-all duration-300 ${
                  isSidebarOpen && window.innerWidth > 1024
                    ? "pl-[21rem]"
                    : "pl-0"
                }`}>
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route path="*" element={<ComingSoon />} />
                  <Route path="/privacy-policy" element={<Privacy />} />
                  <Route path="/term-condition" element={<TermCondition />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/creators" element={<Creators />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/tenBot" element={<TenBot />} />
                  <Route path="/create-bot" element={<CreateBot />} />
                  <Route path="/guidelines" element={<UserGuidelines />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/subscribe" element={<Subscribe />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/feedback" element={<FeedBack />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/usage-guidlines" element={<UserGuidelines />} />
                  <Route path="/chatbot" element={<ChatBot />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/help-center/general" element={<General />} />
                  <Route
                    path="/help-center/creator-monetization"
                    element={<CreatorMonetization />}
                  />
                  <Route
                    path="/help-center/creator-monetization/faqs"
                    element={<FaqCreator />}
                  />
                  <Route
                    path="/help-center/subscriptions"
                    element={<Subscriptions />}
                  />
                  <Route
                    path="/help-center/subscriptions/faqs"
                    element={<FaqSubscriptions />}
                  />
                  <Route
                    path="/help-center/general/faqs"
                    element={<FaqGeneral />}
                  />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default HomeScreen;
