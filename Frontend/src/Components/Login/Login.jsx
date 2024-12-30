import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isPhoneLogin, setIsPhoneLogin] = useState(false); // State to toggle between email and phone login

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    alert(`Login with email: ${email} and password: ${password}`);
    navigate("/dashboard"); // Navigate to the new page
  };

  const handlePhoneLogin = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    alert(`Login with phone: ${phone} and password: ${password}`);
    navigate("/dashboard"); // Navigate to the new page
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="custom-image" />
      </div>
      <div className="text">
        <p>
          Talk to the best AI models like ChatGPT, GPT-4, Claude 3.5 Sonnet,
          FLUX1.1, and millions of others - all on Poe.
        </p>
      </div>

      {!isPhoneLogin ? (
        <form onSubmit={handleEmailLogin} className="email-form">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="email-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="password-input"
          />
          <button type="submit" className="login-button email">
            Login
          </button>
        </form>
      ) : (
        <form onSubmit={handlePhoneLogin} className="phone-form">
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            required
            className="phone-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="password-input"
          />
          <button type="submit" className="login-button phone">
            Login
          </button>
        </form>
      )}

      <button
        className="toggle-login"
        onClick={() => setIsPhoneLogin((prev) => !prev)}>
        {isPhoneLogin ? "Use email" : "Use phone"}
      </button>

      <p className="register-option">
        Don't have an account?{" "}
        <button className="register-link" onClick={() => navigate("/register")}>
          Register here
        </button>
      </p>

      <p className="terms">
        By continuing, you are agreeing to Ten Everything{" "}
        <a href="#terms">Terms of Service</a> and{" "}
        <a href="#privacy">Privacy Policy</a>.
      </p>
      <hr />
      <div className="footer-links">
        <a href="#about" className="footer-link">
          About
        </a>
        <a href="#blog" className="footer-link">
          Blog
        </a>
        <a href="#apps" className="footer-link">
          Apps
        </a>
      </div>
    </div>
  );
};

export default Login;
