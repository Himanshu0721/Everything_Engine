import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <>
      <section className="sub-container">
        <div className="card-container">
          <div className="card">
            <h2>Sliver</h2>
            <div className="img-container">
              <img
                src="https://i.pinimg.com/736x/ee/20/d6/ee20d64932ad3df04f6da6d222da7f5b.jpg"
                alt=""
              />
            </div>
            <div className="price-section">
              <h3>Price ₹1500 </h3>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="card">
            <h2>Gold</h2>
            <div className="img-container">
              <img
                src="https://i.pinimg.com/736x/cd/94/f1/cd94f12f5b371e85abc458c17fdf978a.jpg"
                alt=""
              />
            </div>
            <div className="price-section">
              <h3>Price ₹1500 </h3>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="card">
            <h2>Browns</h2>
            <div className="img-container">
              <img
                src="https://i.pinimg.com/736x/ae/22/09/ae2209b8396e625c3aaa2a76de1fab0a.jpg"
                alt=""
              />
            </div>
            <div className="price-section">
              <h3>Price ₹1500 </h3>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
