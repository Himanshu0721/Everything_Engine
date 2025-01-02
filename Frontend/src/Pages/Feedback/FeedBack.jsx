import React, { useState } from "react";

import "./feedBack.css";

const FeedBack = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <div className="feedback-container">
        <h1>Share your experience</h1>

        <div className="rating-container">
          <div className="count-container">
            {count.map((num, index) => (
              <button key={index} className="count-btn">
                {num}
              </button>
            ))}
          </div>
          <div className="expression">
            <span>Bad</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
