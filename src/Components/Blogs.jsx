import React from "react";
import { useNavigate} from "react-router-dom";
import BlogPage from "../blog-component/BlogPage";
const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className=" px-4 py-32  mx-auto text-white text-center"
        style={{ backgroundColor: "#4a2e42" }}
      >
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          {" "}
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-Bold">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing theirstories and ideas. we offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/new-post")}
            className="hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            style={{ backgroundColor: "oklch(0.6 0.22 351.95)" }}
          >
            Post a New Blog
          </button>
        </div>
      </div>
      {/* all blogs container*/}
      <div className="max-w-7xl mx-auto">
        <BlogPage  /> 
      </div>
    </div>
  );
};

export default Blogs;
