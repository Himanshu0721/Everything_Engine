import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenterLayout = ({ children, isSidebarOpen }) => {
  return (
    <div
      className={ `
        min-h-screen bg-white dark:bg-[#242424] flex flex-col 
        transition-all duration-300 ease-in-out
        pt-4 sm:pt-6 md:pt-8 lg:pt-10
        ${isSidebarOpen ? 'lg:ml-[320px]' : 'ml-0'}
      `}
    >
      {/* Header - Enhanced Responsive Design */ }
      <header className="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-6 border-b mb-4 sm:mb-6 lg:mb-8">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-medium dark:text-white">Help Center</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <Link
            to="/report-bug"
            className="text-sm sm:text-base text-blue-500 dark:text-purple-500 dark:hover:text-purple-700 hover:text-blue-700"
          >
            Report a bug
          </Link>
          <Link
            to="/contact"
            className="text-sm sm:text-base text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
          >
            Contact Us
          </Link>
          <Link
            to="/"
            className="text-sm sm:text-base text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
          >
            TEN - Everything AI.com
          </Link>
        </div>
      </header>

      {/* Main Content - Enhanced Padding */ }
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 dark:bg-[#181818]">
        { children }
      </main>

      {/* Footer - Enhanced Spacing */ }
      <footer className="border-t bg-white dark:bg-[#242424] mt-8 sm:mt-10 lg:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm mb-6 sm:mb-8">
            <Link
              to="/about"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              About TEN - Everything AI
            </Link>
            <Link
              to="/guidelines"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Usage Guidelines
            </Link>
            <Link
              to="/terms"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Privacy Policy
            </Link>
            <Link
              to="/subscriber-terms"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Subscriber Terms
            </Link>
            <Link
              to="/earnings-terms"
              className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Earnings Terms of Service
            </Link>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="dark:text-[#a5acac]">Quora Inc. © 2023</span>
            <select className="border rounded px-3 py-1.5 text-xs sm:text-sm dark:bg-[#181818] dark:text-[#a5acac] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>English (US)</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenterLayout;