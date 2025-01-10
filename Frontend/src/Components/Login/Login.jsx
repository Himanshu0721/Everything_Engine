import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { UserContext } from "../../Context/userContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
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

      localStorage.setItem("userToken", responseData.user.token);
      localStorage.setItem("userData", JSON.stringify(responseData.user));
      window.location.reload();
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="custom-image" />
        </div>
        <div className="text">
          <p>TEN - Everything AI</p>
        </div>
        <form onSubmit={handleLogin} className="email-form">
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

        <p className="register-option dark:text-[#a5acac]">
          Don't have an account?{" "}
          <button
            className="register-link"
            onClick={() => navigate("/register")}>
            Register here
          </button>
        </p>

        <p className="terms">
          By continuing, you are agreeing to Ten Everything
          <Link to="/term-condition">Terms of Service</Link> and
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
        <hr />
      </div>
    </>
  );
};

export default Login;
