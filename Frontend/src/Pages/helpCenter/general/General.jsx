import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import HelpCenterLayout from "../HelpCenterLayout";

const General = () => {
  return (
    <HelpCenterLayout>
      {/* Breadcrumb and Search */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Breadcrumb */}
          <nav className="text-sm">
            <div className="flex items-center gap-2">
              <Link
                to="/help-center"
                className="text-blue-600 hover:text-blue-700 dark:text-purple-600 dark:hover:text-purple-700"
              >
                Help Center
              </Link>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-600 dark:text-[#a5acac]">General</span>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 dark:bg-[#242424] focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-[#a5acac]">General</h1>

        {/* FAQs Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-purple-800 mb-4">FAQs</h2>
          <Link
            to="/help-center/general/faqs"
            className="block text-blue-600 dark:text-purple-600 dark:hover:text-purple-700 hover:text-blue-700 hover:underline"
          >
            TEN - Everything AI FAQs
          </Link>
        </div>
      </main>
    </HelpCenterLayout>
  );
};

export default General;
