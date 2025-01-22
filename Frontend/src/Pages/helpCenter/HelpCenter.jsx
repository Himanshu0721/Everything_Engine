import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import HelpCenterLayout from "./HelpCenterLayout";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <HelpCenterLayout>

      <section className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white dark:text-black text-2xl font-medium text-center mb-8">
            How can we help?
          </h2>
          <div className="relative">
            <input
              type="text"
              value={ searchQuery }
              onChange={ (e) => setSearchQuery(e.target.value) }
              placeholder="Search"
              className="w-full px-4 py-3 pl-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#181818]"
            />
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={ 20 }
            />
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/help-center/general"
            className="block p-6 border rounded-lg hover:border-blue-500 dark:hover:border-purple-500 transition-colors"
          >
            <h3 className="text-blue-600 dark:text-purple-500 text-lg font-medium text-center">
              General
            </h3>
          </Link>
          <Link
            to="/help-center/creator-monetization"
            className="block p-6 border rounded-lg hover:border-blue-500 dark:hover:border-purple-500 transition-colors"
          >
            <h3 className="text-blue-600 dark:text-purple-500 text-lg font-medium text-center">
              Creator Monetization
            </h3>
          </Link>
          <Link
            to="/help-center/subscriptions"
            className="block p-6 border rounded-lg hover:border-blue-500 dark:hover:border-purple-500 transition-colors"
          >
            <h3 className="text-blue-600 dark:text-purple-500 text-lg font-medium text-center">
              Subscriptions
            </h3>
          </Link>
        </div>
      </section>
    </HelpCenterLayout>
  );
};

export default HelpCenter;
