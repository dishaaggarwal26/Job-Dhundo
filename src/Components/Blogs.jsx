import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPage from "../blog-component/BlogPage";
import { motion } from "framer-motion";
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className=" bg-gradient-to-r shadow-2xs from-pink-300  to-pink-200 text-white py-16 text-center mx-2 rounded-xl">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-wide"
        >
          Welcome to Our Blog
        </motion.h1>
        <p className="text-gray-800 font-bold p-10 lg:w-3/5  mx-auto mb-5 font-Bold md:p-0">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing theirstories and ideas. we offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
        <div className="mt-6 flex items-center justify-center">
            <button
              onClick={() => navigate("/new-blogpost")}
              className=" text-white font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
              style={{ backgroundColor: "oklch(0.6 0.22 351.95)" }}
            >
              Post a New Blog
            </button>
        </div>
      </div>
      {/* all blogs container*/}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
