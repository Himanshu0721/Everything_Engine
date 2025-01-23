import React, { useState } from "react";
import "./contact.css";
import {
  FaBuilding,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      name,
      email,
      message,
    };
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      data.status == true
        ? toast.success(data.message)
        : toast.error("All field require");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info dark:bg-[#242424]">
        <h2 className="dark:text-white">CONTACT US</h2>
        <p className="dark:text-[#a5acac]">
          Feel free to ask your queries if needed or want to share your
          thoughts, our support team is here to help you out.
        </p>
        <div className="contact-details">
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaBuilding className="icon" /> The entrepreneurship network
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaEnvelope className="icon" /> info@entrepreneurshipnetwork.net
          </p>
        </div>
        <div
          className="social-icons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "80px",
            fontSize: "33px",
          }}>
          <a
            href="https://www.instagram.com/theentrepreneurshipnetwork?igsh=MW9peTU5c3N3cWczZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="icon-text">
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/the-entrepreneurship-network/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-text">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <div className="background-block dark:bg-[#393939]"></div>
      <div className="contact-form dark:bg-[#181818]">
        <h3 className="dark:text-white">Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="dark:bg-[#242424]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="dark:bg-[#242424]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="dark:bg-[#242424]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
        <div
          id="toast"
          className={`toast ${showSuccess ? "show" : ""}`}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            padding: "20px 40px",
            fontSize: "19px",
            borderRadius: "5px",
            background: "#4caf50",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
          <FaCheckCircle style={{ color: "white", marginRight: "5px" }} />
          Sent Successfully
        </div>
      </div>
    </div>
  );
};

export default Contact;
