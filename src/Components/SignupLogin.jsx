import React, { useState } from "react";
import ".././SignupLogin.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import authenticate_img from "../Assets/authenti_svg.jpg";
import Navbar from "./Navbar";
import { signup, login } from "../api"; // Import API functions
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
const SignupLogin = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        fullName: "",
=======
const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "Job Seeker", // Default user type
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (action === "Sign Up") {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (action === "Sign Up") {
        setSuccessMessage("Signup successful!");
      } else {
        setSuccessMessage("Login successful!");
      }
      setFormData({
        name: "",
>>>>>>> 97fd92a65f7738e724ee40b3791d44caee513722
        email: "",
        userType: "Job Seeker",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

<<<<<<< HEAD
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (action === "Sign Up") {
            if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
            if (formData.password !== formData.confirmPassword)
                newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

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
                        isJobSeeker: formData.userType === "Job Seeker" // Send boolean to backend
                    });
                    setSuccessMessage(response.data);
                } else {
                    const response = await login({
                        email: formData.email,
                        password: formData.password
                    });

                    const isJobSeeker = response.data; // Backend returns true or false

                    // Redirect based on user type
                    if (isJobSeeker) {
                        navigate("/Job");
                    } else {
                        navigate("/Company");
                    }
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
                setSuccessMessage("Error: " + (error.response?.data || "Something went wrong"));
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mb-20 mt-20 flex justify-evenly items-center">
                <div>
                    <img className=" w-0 h-0 md:h-120 md:w-full" 
                        src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?ga=GA1.1.843000903.1731528873&semt=ais_hybrid" 
                        alt="signuplogo" 
                    />
                </div>
                <div className="mr-10 signup-container">
                    <h2>{action}</h2>
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    <form onSubmit={handleSubmit}>
                        {/* Name Field (Only for Signup) */}
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

                        {/* Email Field */}
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

                        {/* Password Field */}
                        <div className="form-group">
                            <img src={password_icon} alt="Password Icon" className="input-icon" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        {/* Confirm Password Field (Only for Signup) */}
                        {action === "Sign Up" && (
                            <div className="form-group">
                                <img src={password_icon} alt="Confirm Password Icon" className="input-icon" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {/* User Type Selection (Only for Signup) */}
                        {action === "Sign Up" && (
                            <div className="user-type-container">
                                <label>User Type:</label>
                                <div className="radio-group">
                                    <label>
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="Job Seeker"
                                            checked={formData.userType === "Job Seeker"}
                                            onChange={handleChange}
                                        />
                                        Job Seeker
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="Recruiter"
                                            checked={formData.userType === "Recruiter"}
                                            onChange={handleChange}
                                        />
                                        Recruiter
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Forgot Password (Only for Login) */}
                        {action === "Login" && (
                            <div className="forgot-password"> Lost Password? <span>Click Here!</span></div>
                        )}

                        {/* Submit Buttons */}
                        <button type="submit" className={action === "Login" ? "signup-button gray" : "signup-button"} onClick={() => setAction("Sign Up")}>Sign Up</button>
                        <button type="submit" className={action === "Sign Up" ? "signup-button gray" : "signup-button"} onClick={() => setAction("Login")}>Login</button>
                   
                   
                        
                    </form>
                </div>
            </div>
        </div>        
    );
};

export default SignupLogin;
=======
  return (
    <div>
      <Navbar />
      <div className="mb-20 mt-20 flex justify-evenly items-center">
        <div>
          <img
            className=" w-0 h-0 md:h-120 md:w-full"
            src={authenticate_img}
            alt="signuplogo"
            srcset=""
          />
        </div>
        <div className="mr-10 signup-container">
          <h2>{action}</h2>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Field (Only for Signup) */}
            {action === "Sign Up" && (
              <div className="form-group">
                <img src={user_icon} alt="User Icon" className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
            )}

            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Confirm Password Field (Only for Signup) */}
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

            {/* User Type Selection (Only for Signup) */}
            {action === "Sign Up" && (
              <div className="user-type-container">
                <label>User Type:</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="Job Seeker"
                      checked={formData.userType === "Job Seeker"}
                      onChange={handleChange}
                    />
                    Job Seeker
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="Recruiter"
                      checked={formData.userType === "Recruiter"}
                      onChange={handleChange}
                    />
                    Recruiter
                  </label>
                </div>
              </div>
            )}

            {/* Forgot Password (Only for Login) */}
            {action === "Login" && (
              <div className="forgot-password">
                Lost Password?{" "}<span><a href="/lost-password" className="hover:underline">Click Here!</a></span>
              </div>
            )}

            {/* Submit Buttons */}
            <button
              type="submit"
              className={
                action === "Login" ? "signup-button gray" : "signup-button"
              }
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
            <button
              type="submit"
              className={
                action === "Sign Up" ? "signup-button gray" : "signup-button"
              }
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
>>>>>>> 97fd92a65f7738e724ee40b3791d44caee513722
