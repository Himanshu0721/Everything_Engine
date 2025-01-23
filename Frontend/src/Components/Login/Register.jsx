import React, { useState } from "react";
import "./register.css";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const requestData = {
      username,
      email,
      number,
      password,
    };
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json();

      if (responseData.success) {
        toast.success("Signup success");
        localStorage.setItem("userId", responseData.user._id);
        localStorage.setItem("userToken", responseData.user.token);
        navigate("/");
        window.location.reload();
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="custom-image" />
        </div>
        <h3 className="dark:text-[#a5acac]">Create an Account</h3>

        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name" className="dark:text-[#a5acac]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className={`${
                errors.name ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="dark:text-[#a5acac]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                errors.email ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="dark:text-[#a5acac]">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="phone"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={`${
                errors.phone ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="dark:text-[#a5acac]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${
                errors.password ? "error-input" : ""
              } dark:bg-[#242424]`}
              required
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="register-button">
            Register
          </button>

          <div className="already-registered dark:text-[#a5acac]">
            Already registered?{" "}
            <Link className="redirect-to-login" to="/">
              Login
            </Link>
          </div>
        </form>

        <p className="terms dark:text-[#a5acac]">
          By continuing, you are agreeing to Ten Everything's{" "}
          <Link to="/term-condition">Terms of Service</Link> and{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
