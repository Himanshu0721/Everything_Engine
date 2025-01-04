import React from "react";
import "./subscribe.css";
import SubscriptionCard from "../../Components/Cards/SubscriptionCard";

const cards = [
  {
    id: 1,
    title: "Sliver",
    img: "https://i.pinimg.com/736x/ee/20/d6/ee20d64932ad3df04f6da6d222da7f5b.jpg",
    months: "6 Months",
    price: "₹ 2499",
  },
  {
    id: 2,
    title: "Gold",
    img: "https://i.pinimg.com/736x/cd/94/f1/cd94f12f5b371e85abc458c17fdf978a.jpg",
    months: "1 Year",
    price: "₹ 4999",
  },
  {
    id: 1,
    title: "Bronze",
    img: "https://i.pinimg.com/736x/ae/22/09/ae2209b8396e625c3aaa2a76de1fab0a.jpg",
    months: "1 Months",
    price: "₹ 1500",
  },
];

const Subscribe = () => {
  return (
    <>
      <section className="sub-container">
        <div className="card-container">
          {cards.map((item, index) => (
            <SubscriptionCard key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Subscribe;
