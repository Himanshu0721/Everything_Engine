import React, { useEffect } from "react";
import { FaClock, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const BlogContent = () => {
  const location = useLocation();

  const { blog } = location.state || {};

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
