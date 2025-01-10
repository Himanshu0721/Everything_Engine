import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState();
  const [user, setUser] = useState(null);
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
      const response = await fetch(" http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json();
      setUser(responseData);
      localStorage.setItem("userData", JSON.stringify(responseData.user));
      localStorage.setItem(
        "userToken",
        JSON.stringify(responseData.user.token)
      );
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };
  console.log(user);

  return (
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
            className={`{${errors.name} ? "error-input" : ""} dark:bg-[#242424]`}
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
            className={`{${errors.email} ? "error-input" : ""} dark:bg-[#242424]`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="dark:text-[#a5acac]">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={`{${errors.phone} ? "error-input" : ""} dark:bg-[#242424]`}
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
            className={`{${errors.password} ? "error-input" : ""} dark:bg-[#242424]`}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <div className="already-registered">
          Already registerd?
          <Link className="redirect-to-login" to="/">
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
