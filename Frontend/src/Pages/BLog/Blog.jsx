import { useBlog } from "@/Context/blogContext";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const { blogs, fetchBlogs } = useBlog();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <header className="bg-[#333333] px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">TEN AI</span>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex text-xl items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-indigo-400">
              About
            </a>
            <a href="/blog" className="text-gray-300 hover:text-indigo-400">
              Blog
            </a>
          </nav>

          <button className="hidden md:block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
            Sign up
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 items-center">
            <a href="#" className="text-gray-300 hover:text-indigo-400">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400">
              Blog
            </a>
            <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
              Sign up
            </button>
          </nav>
        )}
      </header>
      <section className="px-6 py-12 md:py-20 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={`http://localhost:5000${blog.image}`}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-white truncate">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3">
                  Compare responses from multiple bots and add any bot with an
                  @-mention - all within a single conversational thread.
                </p>
                <Link
                  to={`/blog/${blog._id}`}
                  state={{ blog }}
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <div className="px-4 md:px-6  max-w-7xl mx-auto">
        <div className="flex  gap-4 text-xl border-b border-zinc-800">
          <button className="px-4 py-2 font-medium text-white border-b-2 border-indigo-600">
            All
          </button>
          <button className="px-4 py-2 font-medium text-gray-400 hover:text-white">
            Product
          </button>
          <button className="px-4 py-2 font-medium text-gray-400 hover:text-white">
            Announcement
          </button>
        </div>
      </div>

      <div className="px-4 py-12 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-zinc-800/50 rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://framerusercontent.com/images/r769u77AzEpJxW9jM4kzSbgu4w.png?scale-down-to=512"
                alt="Blog post image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                New on Poe: Creator monetization via price per message
              </h3>
              <p className="text-gray-400 mb-4">Apr 8, 2024</p>
            </div>
          </div>

          <div className="group bg-zinc-800/50 rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://framerusercontent.com/images/cYUkHfTWQURDiZuaV5eBtobmTo.png?scale-down-to=512"
                alt="Blog post image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                Poe is now available in eight new languages
              </h3>
              <p className="text-gray-400 mb-4">Nov 13, 2023</p>
            </div>
          </div>

          <div className="group bg-zinc-800/50 rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://framerusercontent.com/images/5BYunp16RZQ10HqPGYBu2AbmHxM.png"
                alt="Blog post image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                Introducing creator monetization for Poe
              </h3>
              <p className="text-gray-400 mb-4">Oct 28, 2023</p>
            </div>
          </div>

          <div className="group bg-zinc-800/50 rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://framerusercontent.com/images/EO1zU3Ocd2k9im9EOUlptHcU.webp?scale-down-to=512"
                alt="Blog post image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                Introducing the Poe API v2 for Developers
              </h3>
              <p className="text-gray-400 mb-4">Oct 24, 2023</p>
            </div>
          </div>
        </div>
      </div> */}

      <footer className="bg-zinc-800/50 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-white"
                >
                  About TEN
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Careers
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Policy</h4>
              <div className="space-y-2">
                <a
                  href="/privacy-policy"
                  className="block text-gray-400 hover:text-white"
                >
                  Privacy policy
                </a>
                <a
                  href="/term-condition"
                  className="block text-gray-400 hover:text-white"
                >
                  Terms of service
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a
                  href="/help-center"
                  className="block text-gray-400 hover:text-white"
                >
                  Help center
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Creator Guide
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-gray-400">
            <p>&copy; Copyright 2025 Quora Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
