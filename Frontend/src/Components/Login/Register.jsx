import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration successful!");
    }
  };

  return (
    <div className="register-container">
      <h1 className="dark:text-[#a5acac]">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="dark:text-[#a5acac]">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className={`{${errors.password} ? "error-input" : ""} dark:bg-[#242424]`}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
