import React, { useState, useRef,useContext } from "react";
import ".././SignupLogin.css";
import { motion } from "framer-motion";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import authenticate_img from "../Assets/authenti_svg.jpg";
import { signup, login } from "../api";
import { Link, useNavigate } from "react-router-dom";

const SignupLogin = () => {


  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  
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
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    let newErrors = {};
    let focusField = null;
    if (action === "Sign Up") {
      const nameParts = formData.fullName.trim().split(" ");
      if (nameParts.length < 2) {
        newErrors.fullName = "Please enter your full name (first and last)";
        focusField = fullNameRef;
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        if (!focusField) focusField = confirmPasswordRef;
      }
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      if (!focusField) focusField = emailRef;
    }
    if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters, include one letter, one number, and one special character.";
      if (!focusField) focusField = passwordRef;
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, focusField };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, focusField } = validateForm();

    if (!isValid) {
      if (focusField && focusField.current) {
        focusField.current.focus();
      }
      return;
    }
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
        setGeneralError(""); //clear any previous error
      } else {
        const response = await login({
          email: formData.email,
          password: formData.password,
        });
        console.log("Login Response:", response.data);
        setSuccessMessage("Login successful!");
        setGeneralError(""); //clear any previous error

  

        setTimeout(() => {
          if (isJobSeeker) { // 1 for job seeker and 0 for recruiter
            navigate("/");
          } else {
            navigate("/Jobs");
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
    } 
    catch (error) {
      console.error("Full Error Object:", error);
    
      const errorMessage =
        error.response?.data?.message || error.message || "Something went wrong";
    
      setGeneralError("Error: " + errorMessage);
      setSuccessMessage(""); 
        }
    


   
  };

  return (
    <div>
      <div className="mb-20 mt-20  flex justify-evenly items-center">
        {/* Image Section */}
        <motion.div
  className="hidden md:block w-full md:w-1/2"
  initial={{ x: -200 }}
  animate={{ x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <img
    className="w-full max-w-md h-auto object-contain mx-auto"
    src={authenticate_img}
    alt="signuplogo"
  />
</motion.div>



        {/* Form Section */}
        <motion.div
          className=" signup-container w-full  md:w-1/2"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>{action}</h2>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {generalError && <p className="error-message">{generalError}</p>}
          <form onSubmit={handleSubmit}>
            {action === "Sign Up" && (
              <>
                <div className="form-group">
                  <img src={user_icon} alt="User Icon" className="input-icon" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    ref={fullNameRef}
                  />
                </div>
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </>
            )}

            <div className="form-group">
              <img src={email_icon} alt="Email Icon" className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                ref={emailRef}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
           

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
                ref={passwordRef}
              />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

            {action === "Sign Up" && (
              <>
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
                    ref={confirmPasswordRef}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </>
            )}

            {action === "Login" && (
              <div className="forgot-password">
                Forgot Password?{" "}
                <span>
                  <Link to="/lost-password" className="hover:underline">
                    Click Here!
                  </Link>
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="signup-button"
              disabled={action === "Sign Up" && !formData.fullName.trim()}
            >
              {action}
            </button>

            {/* Toggle Action Button */}
            <button
              type="button"
              className="signup-button"
              onClick={() => {
                setAction(action === "Sign Up" ? "Login" : "Sign Up");
                setErrors({}); // clear errors on mode switch
                setSuccessMessage("");
                setGeneralError("");
              }}
            >
              {action === "Sign Up" ? "Login" : "Sign Up"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupLogin;
