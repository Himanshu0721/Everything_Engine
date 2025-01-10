import React, { useEffect } from "react";
import { FaClock, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const BlogContent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const { blog } = location.state || {};

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const text = `Check out this blog post: ${blog.title}`;
    let shareUrl = "";

    switch (platform) {
      case "Twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-gray-100">
      <header className="bg-[#333333] px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <span className="text-xl font-semibold text-white">TEN AI</span>
            </Link>
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
            <a href="/about" className="text-gray-300 hover:text-indigo-400">
              About
            </a>
            <a href="/blog" className="text-gray-300 hover:text-indigo-400">
              Blog
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 items-center">
            <a href="#" className="text-gray-300 hover:text-indigo-400">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-indigo-400">
              Blog
            </a>
          </nav>
        )}
      </header>
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            {blog.title}
          </h1>
          <div className="flex justify-center items-center space-x-2 text-gray-400">
            <FaClock className="text-purple-400" />
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        <div className="mb-10 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={`http://localhost:5000${blog.image}`}
            alt={blog.title}
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          {blog.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Share this post
          </h2>
          <div className="flex space-x-4">
            <ShareButton
              icon={<FaTwitter />}
              color="bg-blue-400"
              onClick={() => shareOnSocial("Twitter")}
            />
            <ShareButton
              icon={<FaFacebook />}
              color="bg-blue-600"
              onClick={() => shareOnSocial("Facebook")}
            />
            <ShareButton
              icon={<FaLinkedin />}
              color="bg-blue-700"
              onClick={() => shareOnSocial("LinkedIn")}
            />
          </div>
        </footer>
      </article>

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

const ShareButton = ({ icon, color, onClick }) => (
  <button
    className={`p-3 ${color} text-white rounded-full hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default BlogContent;
