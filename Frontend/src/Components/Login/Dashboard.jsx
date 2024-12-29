import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Code entered: ${code}`);
    // Add your verification logic here
  };

  return (
    <div className="verify-container">
      <div className="verify-logo">
        <img
          src="https://psc2.cf2.poecdn.net/assets/_next/static/media/poeFullMultibot.aa56caf5.svg"
          alt="Poe Logo"
          className="logo-image"
        />
      </div>
      <h2>Get started</h2>
      <h1>Verify email</h1>
      <p>Your code was sent to your Email</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code"
          className="code-input"
          required
        />
        <button type="submit" className="verify-button">
          Verify
        </button>
      </form>
      <div className="links">
        <button className="link-button">Resend code</button>
        <button className="link-button">Use a different email</button>
      </div>
    </div>
  );
};

export default Dashboard;
