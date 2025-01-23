import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/userContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

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

      responseData.success === true
        ? toast.success("Login success")
        : toast.error(responseData.message);

      localStorage.setItem("userToken", responseData.user.token);
      localStorage.setItem("userId", responseData.user._id);
      window.location.reload();
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="login-wrapper ">
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="custom-image" />
        </div>
        <h3>Login to Your Account</h3>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="dark:text-[#a5acac]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                errors.name ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="dark:text-[#a5acac]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${
                errors.name ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {errors.form && <span className="error-text">{errors.form}</span>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="already-registered dark:text-[#a5acac]">
          <p>
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="redirect-to-login">
              Register here
            </button>
          </p>
        </div>
        <p className="terms dark:text-[#a5acac]">
          By continuing, you are agreeing to Ten Everything's{" "}
          <Link to="/term-condition">Terms of Service</Link> and{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
