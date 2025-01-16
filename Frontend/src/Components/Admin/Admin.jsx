import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateBlog from "./CreateBlogForm/CreateBlog";
import { useAuth } from "../context/authContext";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("createblog");

  const navigate = useNavigate();

  const { adminLogout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "createblog":
        return <CreateBlog />;
      default:
        return <CreateBlog />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const handleLogout = async () => {
    await adminLogout();
    navigate("/admin/login");
  };

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full border-b"
        style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2"
              >
                <span className="sr-only">Toggle sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/admin" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  TEN Everything Engine Admin Panel
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } border-r sm:translate-x-0`}
        style={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => handlePageChange("createblog")}
                className="flex items-center w-full p-2 text-white rounded-lg group hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zm-5 10h4v2h-4v-2zm-6-2h4v2H4v-2zm0 4h8v2H4v-2zm0 4h6v2H4v-2z" />
                </svg>

                <span className="ms-3">Blog Creation</span>
              </button>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center w-full p-2 text-white rounded-lg group hover:bg-white/10"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>

                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-2 text-white rounded-lg group hover:bg-white/10"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="ms-3">Log out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div
        className={`md:ml-64 p-4 transition-all ${
          isSidebarOpen ? "ml-64" : ""
        }`}
      >
        <div className="mt-14">{renderPage()}</div>
      </div>
    </>
  );
};

export default Admin;
