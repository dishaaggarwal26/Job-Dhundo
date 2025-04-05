import React, { useState } from "react";
import ".././SignupLogin.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import authenticate_img from "../Assets/authenti_svg.jpg";
import Navbar from "./Navbar";
import { signup, login } from "../api";
import { Link, useNavigate } from "react-router-dom";

const SignupLogin = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "Job Seeker",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    let newErrors = {};
    if (action === "Sign Up") {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full Name is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (!isValidEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!isValidPassword(formData.password))
      newErrors.password = "Password must be at least 6 characters, include one letter, one number, and one special character.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (action === "Sign Up") {
          const response = await signup({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            isJobSeeker: formData.userType === "Job Seeker",
          });
          console.log("Signup Response:", response.data);
          setSuccessMessage("Signup successful!");
        } else {
          const response = await login({
            email: formData.email,
            password: formData.password,
          });
          console.log("Login Response:", response.data);
          setSuccessMessage("Login successful!");

          const isJobSeeker = response.data.isJobSeeker;

          setTimeout(() => {
            if (isJobSeeker) {
              navigate("/Job");
            } else {
              navigate("/job-post");
            }
          }, 1000);
        }

        setFormData({
          fullName: "",
          email: "",
          userType: "Job Seeker",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
      } catch (error) {
        console.error("API Error:", error.response?.data);
        setSuccessMessage(
          "Error: " + (error.response?.data || "Something went wrong")
        );
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mb-20 mt-20 flex justify-evenly items-center">
        <div>
          <img
            className="w-0 h-0 md:h-120 md:w-full"
            src={authenticate_img}
            alt="signuplogo"
          />
        </div>
        <div className="mr-10 signup-container">
          <h2>{action}</h2>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit}>
            {action === "Sign Up" && (
              <div className="form-group">
                <img src={user_icon} alt="User Icon" className="input-icon" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>
            )}

            <div className="form-group">
              <img src={email_icon} alt="Email Icon" className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <img
                src={password_icon}
                alt="Password Icon"
                className="input-icon"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {action === "Sign Up" && (
              <div className="form-group">
                <img
                  src={password_icon}
                  alt="Confirm Password Icon"
                  className="input-icon"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {action === "Login" && (
              <div className="forgot-password">
                Lost Password?{" "}
                <span>
                  <Link to="/lost-password" className="hover:underline">
                    Click Here!
                  </Link>
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="signup-button">
              {action}
            </button>

            {/* Toggle Action Button */}
            <button
              type="button"
              className="signup-button"
              onClick={() =>
                setAction(action === "Sign Up" ? "Login" : "Sign Up")
              }
            >
              {action === "Sign Up" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
