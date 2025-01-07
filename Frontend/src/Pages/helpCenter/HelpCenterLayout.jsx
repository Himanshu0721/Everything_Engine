import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenterLayout = ({ children, isSidebarOpen }) => {
  return (
    <div className={`min-h-screen bg-white dark:bg-[#242424] flex flex-col transition-all duration-300 ease-in-out ${
      isSidebarOpen ? 'lg:ml-[320px]' : 'ml-0'
    }`}>
      {/* Header - Responsive */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <h1 className="text-lg sm:text-xl font-medium dark:text-white">Help Center</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <Link to="/report-bug" className="text-sm sm:text-base text-blue-500 dark:text-purple-500 dark:hover:text-purple-700 hover:text-blue-700">Report a bug</Link>
          <Link to="/contact" className="text-sm sm:text-base text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Contact Us</Link>
          <Link to="/" className="text-sm sm:text-base text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">TEN - Everything AI.com</Link>
        </div>
      </header>

      {/* Main Content - Responsive */}
      <div className="flex-1 w-full px-4 sm:px-6 lg:px-8 dark:bg-[#181818]">
        {children}
      </div>

      {/* Footer - Responsive */}
      <footer className="border-t bg-white dark:bg-[#242424]">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-4">
            <Link to="/about" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">About TEN - Everything AI</Link>
            <Link to="/guidelines" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Usage Guidelines</Link>
            <Link to="/terms" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Terms of Service</Link>
            <Link to="/privacy" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Privacy Policy</Link>
            <Link to="/subscriber-terms" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Subscriber Terms</Link>
            <Link to="/earnings-terms" className="text-blue-500 hover:text-blue-700 dark:text-purple-500 dark:hover:text-purple-700">Earnings Terms of Service</Link>
          </div>
          <div className="text-center text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className='dark:text-[#a5acac]'>Quora Inc. © 2023</span>
            <select className="border rounded px-2 py-1 text-xs sm:text-sm dark:bg-[#181818] dark:text-[#a5acac]">
              <option>English (US)</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenterLayout;