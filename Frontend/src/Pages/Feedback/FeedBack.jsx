import React, { useState } from "react";
import "./feedBack.css";
import { toast } from "react-toastify";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  const [feedBack, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const feedBackForm = async (e) => {
    e.preventDefault();
    const requestData = {
      email,
      feedBack,
      rating,
    };
    console.log(requestData);
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      data.success === true
        ? toast.success(data.message)
        : toast.error("All fields are required");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feedback-container">
      <h1 className="title dark:text-white">Share your experience</h1>

      <form onSubmit={feedBackForm} className="feedback-form">
        {/* Rating Section */}
        <div className="rating-container">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index + 1 <= rating ? "selected" : ""}
              onClick={() => setRating(index + 1)}>
              ★
            </span>
          ))}
        </div>

        {/* Rating Labels */}
        <div className="expression">
          <span>Bad</span>
          <span>Good</span>
          <span>Excellent</span>
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label className="dark:text-[#a5acac]">Email</label>
          <input
            type="email"
            className="feedback-input dark:bg-[#242424]"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Feedback Input */}
        <div className="input-group">
          <label className="dark:text-[#a5acac]">Feedback</label>
          <textarea
            className="feedback-input dark:bg-[#242424]"
            placeholder="Give your Feedback"
            value={feedBack}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
