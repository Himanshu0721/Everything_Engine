import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const requestData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json();
      setUser(responseData);
      localStorage.setItem(
        "userToken",
        JSON.stringify(responseData.user.token)
      );
      alert(`Login successful: ${responseData.message}`);
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="custom-image" />
      </div>
      <div className="text">
        <p>TEN - Everything AI</p>
      </div>

      <form onSubmit={handleEmailLogin} className="email-form">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
        />
        <button type="submit" className="login-button email">
          Login
        </button>
      </form>

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
    </div>
  );
};

export default Login;
