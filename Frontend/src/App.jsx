import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
<<<<<<< HEAD
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
import HelpCenter from "./Pages/helpCenter/HelpCenter";
import General from "./Pages/helpCenter/general/General";
import FaqGeneral from "./Pages/helpCenter/general/faqGeneral";
import CreatorMonetization from "./Pages/helpCenter/creatorMonetization/CreatorMonetization";
import Subscriptions from "./Pages/helpCenter/subscriptions/Subscriptions";
import FaqSubscriptions from "./Pages/helpCenter/subscriptions/faqSubscriptions";
import FaqCreator from "./Pages/helpCenter/creatorMonetization/faqCreator";
import Contact from "./Pages/Contact/Contact";
import UserGuidelines from "./Pages/Usage-guidelines/UserGuidelines";
=======

>>>>>>> 692b2a0da3062fdd89f8050cc9bd71dce10ada89
function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
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
                }`}
              >
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
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/help-center/general" element={<General />} />
                  <Route path="/contact-us" element={<Contact />}/>
                  <Route path="/usage-guidlines" element={<UserGuidelines/>}/>

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
=======
        <Route path="*" element={<Home />} />
>>>>>>> 692b2a0da3062fdd89f8050cc9bd71dce10ada89
      </Routes>
    </>
  );
}

export default App;
