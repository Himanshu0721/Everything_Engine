import React, { useState } from "react";

import "./feedBack.css";

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
      console.log("feedback", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="feedback-container">
        <h1 className="title dark:text-white">Share your experience</h1>

        <form onSubmit={feedBackForm} className="rating-container">
          <div className="count-container">
            {[...Array(5)].map((_, index) => {
              return (
                <span
                  key={index}
                  className={index + 1 <= rating ? `selected` : ""}
                  onClick={() => setRating(index + 1)}>
                  &#9733;
                </span>
              );
            })}
          </div>
          <div className="expression">
            <span>Bad</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
          <div className="feedBackForm">
            <label className="dark:text-[#a5acac]">E mail</label>
            <input
              type="email"
              className="feedBack-input dark:bg-[#242424]"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="dark:text-[#a5acac]">FeedBack</label>

            <textarea
              className="feedBack-input dark:bg-[#242424]"
              type="textArea"
              placeholder="Give your FeedBack"
              value={feedBack}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FeedBack;
