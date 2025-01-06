import React, { useState } from "react";

import "./feedBack.css";

const FeedBack = () => {
  const [starCount, setStarCount] = useState(0);

  return (
    <>
      <div className="feedback-container">
        <h1 className="title dark:text-white">Share your experience</h1>

        <div className="rating-container">
          <div className="count-container">
            {[...Array(5)].map((_, index) => {
              return (
                <span
                  key={index}
                  className={index + 1 <= starCount ? `selected` : ""}
                  onClick={() => setStarCount(index + 1)}>
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
            <label className="dark:text-[#a5acac]">Name</label>
            <input
              type="text"
              className="feedBack-input dark:bg-[#242424]"
              placeholder="Enter Your Name"
            />
            <label className="dark:text-[#a5acac]">FeedBack</label>

            <textarea
              className="feedBack-input dark:bg-[#242424]"
              type="textArea"
              placeholder="Give your FeedBack"
            />
          </div>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
