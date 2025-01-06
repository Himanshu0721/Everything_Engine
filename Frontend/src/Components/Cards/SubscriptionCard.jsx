import React from "react";

const SubscriptionCard = ({ item }) => {
  return (
    <>
      <div className="card">
        <h2 className="dark:text-white">{item.title}</h2>
        <div className="img-container">
          <img src={item.img} alt="" />
        </div>
        <div className="months-container">
          <h2 className="dark:text-white">{item.months} </h2>
        </div>
        <div className="price-section">
          <h3>Price {item.price} </h3>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
